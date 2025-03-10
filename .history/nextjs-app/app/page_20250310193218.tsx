'use client';

import React, { useState, useEffect } from 'react';
// コンポーネントのインポートには動的インポートを使用するか、
// コンポーネント自体が 'use client' 指示子を持っていることを確認する必要があります
import dynamic from 'next/dynamic';

// 動的インポートを使用してクライアントコンポーネントとして読み込む
const Header = dynamic(() => import('./components/Header'), { ssr: false });
const Timetable = dynamic(() => import('./components/Timetable'), { ssr: false });
const StatusDisplay = dynamic(() => import('./components/StatusDisplay'), { ssr: false });
const RouteSelector = dynamic(() => import('./components/RouteSelector'), { ssr: false });

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

// 環境変数のプレフィックスを修正（Next.jsではNEXT_PUBLIC_が必要）
const GAS_WEB_APP_URL = process.env.NEXT_PUBLIC_GAS_WEB_APP_URL;

export default function Home() {
  const [busSchedule, setBusSchedule] = useState<BusSchedule | null>(null);
  const [currentRoute, setCurrentRoute] = useState('orange');
  const [isHoliday, setIsHoliday] = useState(false);
  const [isSunday, setIsSunday] = useState(false);
  const [nextBusDeparture, setNextBusDeparture] = useState<string | null>(null);
  const [minutesToNextBus, setMinutesToNextBus] = useState<number | null>(null);
  const [operatingStatus, setOperatingStatus] = useState('unknown');
  const [isLoading, setIsLoading] = useState(true);

  // 祝日チェック機能
  useEffect(() => {
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

        const isSundayCheck = today.getDay() === 0;  // 日曜日判定
        const isHolidayCheck = holidays.includes(formattedDate) && !isSundayCheck;  // 祝日判定（日曜日は除外）
        
        setIsSunday(isSundayCheck);
        setIsHoliday(isHolidayCheck);
      } catch (error) {
        console.error('祝日確認中にエラーが発生しました:', error);
        setIsHoliday(false);
        setIsSunday(false);
      }
    }

    checkIfHoliday();
  }, []);

  // バススケジュールデータの取得（JSONP方式）
  useEffect(() => {
    async function fetchBusSchedule() {
      setIsLoading(true);
      try {
        console.log("バススケジュールデータの取得を開始します");
        
        if (!GAS_WEB_APP_URL) {
          console.error("GAS_WEB_APP_URLが設定されていません");
          throw new Error("GAS_WEB_APP_URLが設定されていません");
        }
        
        // JSONP方式でデータを取得
        console.log(`JSONPでデータを取得します: ${GAS_WEB_APP_URL}`);
        
        // JSONP用にコールバック関数を定義
        const callbackName = 'busScheduleCallback_' + new Date().getTime();
        
        // グローバルスコープにコールバック関数を定義
        (window as any)[callbackName] = (data: any) => {
          console.log("JSONPで取得したデータ:", data);
          const processedData = processScheduleData(data);
          setBusSchedule(processedData);
          setIsLoading(false);
          
          // コールバック関数を削除（メモリリーク防止）
          delete (window as any)[callbackName];
          // スクリプトタグを削除
          const scriptElement = document.getElementById('jsonp-script');
          if (scriptElement && scriptElement.parentNode) {
            scriptElement.parentNode.removeChild(scriptElement);
          }
        };
        
        // スクリプトタグを作成してDOMに追加
        const script = document.createElement('script');
        script.id = 'jsonp-script';
        script.src = `${GAS_WEB_APP_URL}?callback=${callbackName}`;
        document.body.appendChild(script);
        
        // タイムアウト処理
        const timeoutPromise = new Promise<void>((_, reject) => {
          setTimeout(() => {
            reject(new Error('データ取得がタイムアウトしました'));
            // コールバック関数とスクリプトタグをクリーンアップ
            delete (window as any)[callbackName];
            const scriptElement = document.getElementById('jsonp-script');
            if (scriptElement && scriptElement.parentNode) {
              scriptElement.parentNode.removeChild(scriptElement);
            }
          }, 10000); // 10秒タイムアウト
        });
        
        // タイムアウト処理を並行して実行
        await timeoutPromise;
      } catch (error) {
        console.error('データ取得に失敗しました:', error);
        
        // フォールバック: ローカルデータを使用
        console.log("フォールバックデータを使用します");
        const fallbackData = useFallbackData();
        setBusSchedule(fallbackData);
        setIsLoading(false);
      }
    }

    fetchBusSchedule();
  }, []);

  // スケジュールデータを処理する関数
  const processScheduleData = (data: any): BusSchedule => {
    console.log("データ処理を開始します:", data);

    try {
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

      const processedSchedule = {
        orange: {
          weekday: orangeWeekday,
          holiday: orangeHoliday
        },
        green: {
          weekday: greenWeekday,
          holiday: greenHoliday
        }
      };

      console.log("処理したバススケジュール:", processedSchedule);
      return processedSchedule;
    } catch (error) {
      console.error("データ処理中にエラーが発生しました:", error);
      return useFallbackData();
    }
  }

  // フォールバックデータを提供する関数
  const useFallbackData = (): BusSchedule => {
    console.log("フォールバックデータを使用します");
    // ハードコードされた時刻表
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
    
    console.log("フォールバックデータを設定しました");
    return fallbackData;
  }

  // 次のバス情報を更新
  useEffect(() => {
    function updateNextBusInfo() {
      if (!busSchedule) return;

      const now = new Date();
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();
      const currentTimeValue = currentHour * 60 + currentMinute; // 分単位での現在時刻

      // 運行スケジュールの選択（平日、日曜・祝日）
      let schedule;

      if (isSunday) {
        schedule = busSchedule[currentRoute as 'orange' | 'green'].holiday; // 日曜日専用スケジュール
      } else if (isHoliday) {
        setOperatingStatus('not-running');
        setNextBusDeparture(null);
        setMinutesToNextBus(null);
        return;
      } else {
        schedule = busSchedule[currentRoute as 'orange' | 'green'].weekday;
      }

      if (!schedule || schedule.length === 0) {
        setOperatingStatus('not-running');
        setNextBusDeparture(null);
        setMinutesToNextBus(null);
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
        setOperatingStatus('day-ended');
        setNextBusDeparture(null);
        setMinutesToNextBus(null);
        return;
      }

      setNextBusDeparture(nextBusTime);
      setMinutesToNextBus(minutesToNext);
      setOperatingStatus('running');
    }

    updateNextBusInfo();
    // 1分ごとに次のバス情報を更新するタイマーを設定
    const timer = setInterval(updateNextBusInfo, 60000);
    
    // クリーンアップ関数
    return () => clearInterval(timer);
  }, [busSchedule, currentRoute, isHoliday, isSunday]);

  // データの再取得（JSONP方式）
  const refreshData = async () => {
    try {
      if (!GAS_WEB_APP_URL) {
        throw new Error("GAS_WEB_APP_URLが設定されていません");
      }
      
      setIsLoading(true);
      
      // 以前のスクリプトタグがあれば削除
      const oldScript = document.getElementById('jsonp-refresh-script');
      if (oldScript && oldScript.parentNode) {
        oldScript.parentNode.removeChild(oldScript);
      }
      
      // JSONP用にコールバック関数を定義
      const callbackName = 'busScheduleRefreshCallback_' + new Date().getTime();
      
      // グローバルスコープにコールバック関数を定義
      (window as any)[callbackName] = (data: any) => {
        console.log("JSONPで再取得したデータ:", data);
        const processedData = processScheduleData(data);
        setBusSchedule(processedData);
        setIsLoading(false);
        
        // コールバック関数を削除（メモリリーク防止）
        delete (window as any)[callbackName];
        // スクリプトタグを削除
        const scriptElement = document.getElementById('jsonp-refresh-script');
        if (scriptElement && scriptElement.parentNode) {
          scriptElement.parentNode.removeChild(scriptElement);
        }
      };
      
      // キャッシュ回避のためのタイムスタンプパラメータを追加
      const timestamp = new Date().getTime();
      
      // スクリプトタグを作成してDOMに追加
      const script = document.createElement('script');
      script.id = 'jsonp-refresh-script';
      script.src = `${GAS_WEB_APP_URL}?callback=${callbackName}&_=${timestamp}`;
      document.body.appendChild(script);
      
      // タイムアウト処理
      setTimeout(() => {
        if ((window as any)[callbackName]) {
          console.error('データの再取得がタイムアウトしました');
          delete (window as any)[callbackName];
          const scriptElement = document.getElementById('jsonp-refresh-script');
          if (scriptElement && scriptElement.parentNode) {
            scriptElement.parentNode.removeChild(scriptElement);
          }
          setIsLoading(false);
        }
      }, 10000); // 10秒タイムアウト
      
    } catch (error) {
      console.error('データの再取得に失敗しました:', error);
      // エラー通知などを行う場合はここに追加
      setIsLoading(false);
    }
  };

  const setRoute = (route: string) => {
    setCurrentRoute(route);
  };

  if (isLoading && !busSchedule) {
    return <div className="flex items-center justify-center min-h-screen">データを読み込み中...</div>;
  }

  return (
    <div>
      <Header />
      <RouteSelector currentRoute={currentRoute} setRoute={setRoute} />
      <StatusDisplay
        operatingStatus={operatingStatus}
        nextBusDeparture={nextBusDeparture}
        minutesToNextBus={minutesToNextBus}
        onUpdate={refreshData}
      />
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