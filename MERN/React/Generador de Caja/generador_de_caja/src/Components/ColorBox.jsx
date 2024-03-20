import React from 'react';
import './Style.css';

function ColorBox({ color, width, height }) {
    const style = {
        backgroundColor: color,
        width: `${width}px`,
        height: `${height}px`
    };

    return (
        <div
            className="color-box"
            style={style}
        ></div>
    );
}

export default ColorBox;