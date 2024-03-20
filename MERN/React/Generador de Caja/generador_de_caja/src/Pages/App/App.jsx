import React, { useState } from 'react';
import './App.css';
import ColorBox from '../../Components/ColorBox';
import ColorForm from '../../Components/ColorForm';

function App() {
  const [colors, setColors] = useState([]);

  const addColor = ({ color, size }) => {
    setColors([...colors, { color, size }]);
  };

  return (
    <div className="App">
      <h2 className='titulo'>Color Box</h2>
      <ColorForm onColorSubmit={addColor} />
      <div className="color-box-container">
        {colors.map((item, index) => (
          <ColorBox key={index} color={item.color} width={item.size.width} height={item.size.height} />
        ))}
      </div>
    </div>
  );
}

export default App;