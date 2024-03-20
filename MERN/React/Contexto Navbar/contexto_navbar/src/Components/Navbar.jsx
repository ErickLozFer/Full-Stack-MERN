import React, { useContext } from 'react';
import { UserContext } from '../Pages/App/Wrapper.jsx';
import './Styles.css';

const Navbar = () => {
    const { username } = useContext(UserContext);

    return (
        <div className='nombre'>
            ¡Hi, {username}!
        </div>
    );
};

export default Navbar;