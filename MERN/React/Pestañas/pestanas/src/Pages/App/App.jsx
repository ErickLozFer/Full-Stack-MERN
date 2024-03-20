import React from 'react';
import Tabs from '../../Components/Tabs.jsx';

const App = () => {
  const handleTabClick = (tabName) => {
    console.log(`Clicked on ${tabName}`);
  };

  const tabs = [
    {
      label: 'Tab 1',
      content: <div>Contenido de la pestaña 1.</div>,
    },
    {
      label: 'Tab 2',
      content: <div>Contenido de la pestaña 2.</div>,
      onClick: () => handleTabClick('Tab 2'),
    },
    {
      label: 'Tab 3',
      content: <div>Contenido de la pestaña 3.</div>,
      onClick: () => handleTabClick('Tab 3'),
    },
  ];

  return (
    <div>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default App;