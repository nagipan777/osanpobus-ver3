import React from 'react';

interface RouteSelectorProps {
  currentRoute: string;
  setRoute: (route: string) => void;
}

const RouteSelector: React.FC<RouteSelectorProps> = ({ currentRoute, setRoute }) => {
  return (
    <div className="route-selector">
      <button
        className={`route-btn route-orange ${currentRoute === 'orange' ? 'active' : ''}`}
        onClick={() => setRoute('orange')}
      >
        オレンジコース
      </button>
      <button
        className={`route-btn route-green ${currentRoute === 'green' ? 'active' : ''}`}
        onClick={() => setRoute('green')}
      >
        グリーンコース
      </button>
      <button
        className={`route-btn route-purple ${currentRoute === 'purple' ? 'active' : ''}`}
        onClick={() => setRoute('purple')}
        style={{ display: 'none' }}
      >
        日曜コース
      </button>
    </div>
  );
};

export default RouteSelector;
