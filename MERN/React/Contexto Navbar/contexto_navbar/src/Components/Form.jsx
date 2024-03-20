import React, { useContext } from 'react';
import { UserContext } from '../Pages/App/Wrapper.jsx';
import './Styles.css';

const Form = () => {
    const { setUsername } = useContext(UserContext);

    const handleInputChange = (e) => {
        setUsername(e.target.value);
    };

    return (
        <div className='datos1'>
            <label className='datos2' htmlFor="username">Your Name:</label>
            <input className='datos3' type="text" id="username" onChange={handleInputChange} />
        </div>
    );
};

export default Form;