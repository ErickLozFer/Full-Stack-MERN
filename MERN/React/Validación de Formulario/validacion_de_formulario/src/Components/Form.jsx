import React from 'react';
import './Style.css'

const Form = ({ state, dispatch, handleChange, handleSubmit }) => {
    const emailBorderStyle = state.email.error ? { borderColor: 'red' } : {};

    const handleEmailChange = (e) => {
        const { name, value } = e.target;
        dispatch({ type: 'CHANGE', field: name, value: value });
    };

    return (
        <form className='form' onSubmit={handleSubmit}>
            <div className='inf0 espace'>
                <label htmlFor="firstName">First Name</label>
            </div>
            <div className='inf'>
                <input className='tamaño' type="text" id="firstName" name="firstName" value={state.firstName.value} onChange={handleChange} />
                {state.firstName.error && (
                    <p className="error">{state.firstName.error}</p>
                )}
            </div>
            <div className='espace'>
                <label htmlFor="lastName">Last Name</label>
            </div>
            <div className='inf'>
                <input className='tamaño' type="text" id="lastName" name="lastName" value={state.lastName.value} onChange={handleChange} />
                {state.lastName.error && (
                    <p className="error">{state.lastName.error}</p>
                )}
            </div>
            <div className='espace'>
                <label htmlFor="email">Email</label>
            </div>
            <div className='inf'>
                <input className='tamaño'
                    type="email"
                    id="email"
                    name="email"
                    value={state.email.value}
                    onChange={handleEmailChange}
                    style={emailBorderStyle}
                />
                {state.email.error && (
                    <p className="error">{state.email.error}</p>
                )}
            </div>
            <div className='inf2'>
                <button className='color' type="submit">Submit</button>
            </div>
        </form>
    );
};

export default Form;