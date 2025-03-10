import React from 'react';

interface TimetableProps {
  busSchedule: any;
  currentRoute: string;
  isHoliday: boolean;
  isSunday: boolean;
  nextBusDeparture: string | null;
  minutesToNextBus: number | null;
}

const Timetable: React.FC<TimetableProps> = ({ busSchedule, currentRoute, isHoliday, isSunday, nextBusDeparture, minutesToNextBus }) => {
  if (!busSchedule || !busSchedule[currentRoute]) {
    console.error("エラー: 選択されたルートの時刻表データが見つかりません");
    return <div>本日の運行はありません</div>;
  }

  const now = new Date();
  const day = now.getDay();
  let schedule: string[] = [];
  let scheduleType = '平日';

  if (isHoliday) {
    schedule = busSchedule[currentRoute].holiday || [];
    scheduleType = '祝日';
  } else if (isSunday) {
    schedule = busSchedule[currentRoute].holiday || [];
    scheduleType = '日曜';
  } else if (day === 6) {
    schedule = busSchedule[currentRoute].saturday || [];
    scheduleType = '土曜';
  } else {
    schedule = busSchedule[currentRoute].weekday || [];
    scheduleType = '平日';
  }

  if (!Array.isArray(schedule)) {
    console.error("エラー: schedule が配列ではありません:", schedule);
    return <div>本日の運行はありません</div>;
  }

  if (schedule.length === 0) {
    return <div>本日の運行はありません</div>;
  }

  // 時刻表のヘッダー

  // 時刻表の内容を構築する前に、schedule が空でないことを確認
  const nowTime = new Date();
  const currentHour = nowTime.getHours();
  const currentMinute = nowTime.getMinutes();
  const currentTimeValue = currentHour * 60 + currentMinute;

  const tableRows = schedule.map(timeStr => {
    const [hours, minutes] = timeStr.split(':').map(Number);
    const busTimeValue = hours * 60 + minutes;

    let status = '';
    let rowClass = '';

    if (busTimeValue < currentTimeValue) {
      status = '出発済み';
    } else if (timeStr === nextBusDeparture) {
      status = `あと${minutesToNextBus}分`;
      rowClass = 'next';
    } else {
      const diff = busTimeValue - currentTimeValue;
      status = `あと${diff}分`;
    }

    return (
      <tr className={rowClass} key={timeStr}>
        <td>{timeStr}</td>
        <td>{status}</td>
      </tr>
    );
  });

  return (
    <div className="card" id="timetable-container" style={{ display: 'block' }}>
      <h2>本日の時刻表</h2>
      <table className="timetable" id="timetable">
        <tbody>
          {tableRows}
        </tbody>
      </table>
    </div>
  );
};

export default Timetable;
