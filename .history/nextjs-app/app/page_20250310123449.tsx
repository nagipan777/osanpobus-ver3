'use client';

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Timetable from './components/Timetable';
import StatusDisplay from './components/StatusDisplay';
import RouteSelector from './components/RouteSelector';

const GAS_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycby3s7t899d0903VNEjbhbEMC39JeUKKFN86erO06ul-EU1ZFeVthZuNZSKvoQZfnudUBA/exec';

export default function Home() {
  const [busSchedule, setBusSchedule] = useState(null);
  const [currentRoute, setCurrentRoute] = useState('orange');
  const [isHoliday, setIsHoliday] = useState(false);
  const [isSunday, setIsSunday] = useState(false);
  const [nextBusDeparture, setNextBusDeparture] = useState(null);
  const [minutesToNextBus, setMinutesToNextBus] = useState(null);
  const [operatingStatus, setOperatingStatus] = useState('unknown');

  useEffect(() => {
    async function fetchBusSchedule() {
      try {
        console.log("バススケジュールデータの取得を開始します");
        
        // GASスクリプトからデータを直接取得（CORS対応済み）
        console.log("GASスクリプトから直接データを取得します");
        const response = await fetch(GAS_WEB_APP_URL, {
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
          schedule = busSchedule[currentRoute].holiday; // 日曜日専用スケジュール
          scheduleType = '日曜コース';
      } else if (isHoliday) {
          setOperatingStatus('not-running');
          return;
      } else {
          schedule = busSchedule[currentRoute].weekday;
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
    }

    const useFallbackData = () => {
      console.log("フォールバックデータを使用します");
      // ここに静的なフォールバックデータを定義できます
      // 例: ハードコードされた時刻表
      setBusSchedule({
          orange: {
              weekday: ["9:00", "10:30", "12:00", "13:30", "15:00", "16:30"],
              holiday: ["10:00", "12:00", "14:00", "16:00"]
          },
          green: {
              weekday: ["9:15", "10:45", "12:15", "13:45", "15:15", "16:45"],
              holiday: ["10:30", "12:30", "14:30", "16:30"]
          }
      });
      
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
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
