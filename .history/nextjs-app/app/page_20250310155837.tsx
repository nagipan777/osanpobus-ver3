'use client';

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Timetable from './components/Timetable';
import StatusDisplay from './components/StatusDisplay';
import RouteSelector from './components/RouteSelector';

interface BusSchedule {
  orange: {
    weekday: string[];
    holiday: string[];
  };
  green: {
    weekday: string[];
    holiday: string[];
  };
}

const GAS_WEB_APP_URL = process.env.GAS_WEB_APP_URL;  // APIはこれでお願いします

export default function Home() {
  const [busSchedule, setBusSchedule] = useState<BusSchedule | null>(null);
  const [currentRoute, setCurrentRoute] = useState('orange');
  const [isHoliday, setIsHoliday] = useState(false);
  const [isSunday, setIsSunday] = useState(false);
  const [nextBusDeparture, setNextBusDeparture] = useState<string | null>(null);
  const [minutesToNextBus, setMinutesToNextBus] = useState<number | null>(null);
  const [operatingStatus, setOperatingStatus] = useState('unknown');

  useEffect(() => {
    async function fetchBusSchedule() {
      try {
        console.log("バススケジュールデータの取得を開始します");
        
        // GASスクリプトからデータを直接取得（CORS対応済み）
        console.log("GASスクリプトから直接データを取得します");
        const response = await fetch(GAS_WEB_APP_URL || "", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        
        const data = await response.json();
        console.log("取得したデータ:", data);
        
        // データを処理
        processScheduleData(data);
        
      } catch (error) {
        console.error('データ取得に失敗しました:', error);
        //errorContainerEl.textContent = `エラー: スプレッドシートデータの取得に失敗しました`;
        //errorContainerEl.style.display = 'block';
        //loadingEl.style.display = 'none';
        
        // フォールバック: ローカルデータを使用
        useFallbackData();
        return null;
      }
    }

    async function checkIfHoliday() {
      try {
          const today = new Date();
          const formattedDate = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
      
          // 簡易実装：祝日APIの代わりに手動で日付リストを管理
          const holidays = [
              "2025-01-01", "2025-02-11", "2025-03-21", "2025-04-29",
              "2025-05-03", "2025-05-05", "2025-07-15", "2025-08-11", "2025-09-16", "2025-09-23", "2025-10-14",
              "2025-11-03", "2025-11-23", "2025-12-23"
          ];

          setIsSunday(today.getDay() === 0);  // 日曜日判定
          setIsHoliday(holidays.includes(formattedDate) && !isSunday);  // 祝日判定（日曜日は除外）
      
          return { isHoliday: isHoliday, isSunday: isSunday };
      } catch (error) {
          console.error('祝日確認中にエラーが発生しました:', error);
          setIsHoliday(false);
          setIsSunday(false);
          return { isHoliday: false, isSunday: false };
      }
  }

    const updateNextBusInfo = () => {
      if (!busSchedule) return;

      const now = new Date();
      const day = now.getDay(); // 0:日, 1:月, ... 6:土
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();
      const currentTimeValue = currentHour * 60 + currentMinute; // 分単位での現在時刻

      // 運行スケジュールの選択（平日、土曜、日曜・祝日）
      let schedule;
      let scheduleType = '平日';

      if (isSunday) {
          schedule = (busSchedule as BusSchedule)[currentRoute as 'orange' | 'green'].holiday; // 日曜日専用スケジュール
          scheduleType = '日曜コース';
      } else if (isHoliday) {
          setOperatingStatus('not-running');
          return;
      } else {
          schedule = (busSchedule as BusSchedule)[currentRoute as 'orange' | 'green'].weekday;
      }

      if (!schedule || schedule.length === 0) {
          setOperatingStatus('not-running');
          return;
      }

      let nextBusTime = null;
      let minutesToNext = Infinity;

      for (const timeStr of schedule) {
          const [hours, minutes] = timeStr.split(':').map(Number);
          const busTimeValue = hours * 60 + minutes; // 分単位でのバス時刻
          const diff = busTimeValue - currentTimeValue;

          if (diff > 0 && diff < minutesToNext) {
              minutesToNext = diff;
              nextBusTime = timeStr;
          }
      }

      if (!nextBusTime) {
          const now = new Date();
          const currentHour = now.getHours();

          if (currentHour < 24) {
              setOperatingStatus('day-ended');
              return;
          }
      }

      setNextBusDeparture(nextBusTime);
      setMinutesToNextBus(minutesToNext);

      setOperatingStatus('running');
    }

    const processScheduleData = (data: any) => {
      console.log("データ処理を開始します:", data);

      // 新しいGASスクリプトの形式に合わせてデータを処理
      const extractRouteData = (routeType: string, dayType: string) => {
        return data["Sheet1"]
          .filter((row: any) => row.route === routeType && row.day_type === dayType)
          .map((row: any) => row.time)
          .sort();
      };

      const orangeWeekday = extractRouteData('orange', 'weekday');
      const orangeHoliday = extractRouteData('orange', 'holiday');
      const greenWeekday = extractRouteData('green', 'weekday');
      const greenHoliday = extractRouteData('green', 'holiday');

      setBusSchedule({
        orange: {
          weekday: orangeWeekday,
          holiday: orangeHoliday
        },
        green: {
          weekday: greenWeekday,
          holiday: greenHoliday
        }
      });

      console.log("バススケジュールを設定しました:", busSchedule);
    } // Ensure data processing is correct

    const useFallbackData = () => {
      console.log("フォールバックデータを使用します");
      // ここに静的なフォールバックデータを定義できます
      // 例: ハードコードされた時刻表
      const fallbackData: BusSchedule = {
        orange: {
            weekday: ["9:00", "10:30", "12:00", "13:30", "15:00", "16:30"],
            holiday: ["10:00", "12:00", "14:00", "16:00"]
        },
        green: {
            weekday: ["9:15", "10:45", "12:15", "13:45", "15:15", "16:45"],
            holiday: ["10:30", "12:30", "14:30", "16:30"]
        }
      };
      setBusSchedule(fallbackData);
      
      console.log("フォールバックデータを設定しました");
    }

    fetchBusSchedule();
    checkIfHoliday();
    updateNextBusInfo();
  }, [currentRoute, isHoliday, isSunday]);

  const setRoute = (route: string) => {
    setCurrentRoute(route);
  };

  return (
    <div>
      <Header />
      <RouteSelector currentRoute={currentRoute} setRoute={setRoute} />
      <StatusDisplay operatingStatus={operatingStatus} nextBusDeparture={nextBusDeparture} minutesToNextBus={minutesToNextBus} />
      <Timetable
        busSchedule={busSchedule}
        currentRoute={currentRoute}
        isHoliday={isHoliday}
        isSunday={isSunday}
        nextBusDeparture={nextBusDeparture}
        minutesToNextBus={minutesToNextBus}
      />
    </div>
  );
}
