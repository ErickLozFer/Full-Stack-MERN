import React, { useState } from 'react';
import './Style.css';

function ColorForm({ onColorSubmit }) {
    const [color, setColor] = useState('');
    const [size, setSize] = useState({ width: '', height: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        onColorSubmit({ color, size });
        setColor('');
        setSize({ width: '', height: '' });
    };

    return (
        <form className='espace' onSubmit={handleSubmit}>
            <label className='texto' htmlFor="colorInput">Color</label>
            <input className='search'
                type="text"
                placeholder="Enter color name"
                value={color}
                onChange={(e) => setColor(e.target.value)}
            />
            <label className='texto' htmlFor="widthInput">Width</label>
            <input className='search'
                type="number"
                placeholder="Enter width"
                value={size.width}
                onChange={(e) => setSize({ ...size, width: e.target.value })}
            />
            <label className='texto' htmlFor="heightInput">Height</label>
            <input className='search'
                type="number"
                placeholder="Enter height"
                value={size.height}
                onChange={(e) => setSize({ ...size, height: e.target.value })}
            />
            <button className='texto2' type="submit">Add</button>
        </form>
    );
}

export default ColorForm;