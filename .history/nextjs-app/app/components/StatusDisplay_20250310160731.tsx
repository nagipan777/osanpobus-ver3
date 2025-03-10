import React from 'react';

interface StatusDisplayProps {
  operatingStatus: string;
  nextBusDeparture: string | null;
  minutesToNextBus: number | null;
  onUpdate: () => void;
}

const StatusDisplay: React.FC<StatusDisplayProps> = ({ operatingStatus, nextBusDeparture, minutesToNextBus, onUpdate }) => {
  let statusText = '';
  let nextBusText = '';

  switch (operatingStatus) {
    case 'running':
      statusText = `本日は平日で運行しています`;
      nextBusText = `次のバスは ${nextBusDeparture} （あと${minutesToNextBus}分）`;
      break;
    case 'not-running':
      statusText = '本日は運休です';
      nextBusText = '本日は運休です';
      break;
    case 'day-ended':
      statusText = '本日の運行は終了しました';
      nextBusText = '本日の運行は終了しました';
      break;
    default:
      statusText = '読み込み中...';
      nextBusText = '次のバスを確認中...';
  }

  return (
    <div id="status-container">
      <div className={`status ${operatingStatus}`}>{statusText}</div>
      <div className="next-bus" id="next-bus-display">{nextBusText}</div>
      <button onClick={onUpdate}>更新</button>
    </div>
  );
};

export default StatusDisplay;
