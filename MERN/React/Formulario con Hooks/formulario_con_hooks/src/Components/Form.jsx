import React from 'react';
import './Styles.css'

const Form = props => {
    const { inputs, setInputs } = props;

    const onChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    return (
        <form className='app'>
            <div className='form-group'>
               <label className='text' htmlFor='firstName'>First Name </label>
                <input className='inf' onChange={onChange} type='text' name='firstName'/> 
            </div>
            <div className='form-group'>
                <label className='text' htmlFor='lastName'>Last Name </label>
                <input className='inf' onChange={onChange} type='text' name='lastName'/>
            </div>
            <div className='form-group'>
                <label className='text2' htmlFor='email'>Email </label>
                <input className='inf2' onChange={onChange} type='text' name='email'/>
            </div>
            <div className='form-group'>
                <label className='text' htmlFor='password'>Password </label>
                <input className='inf3' onChange={onChange} type='password' name='password'/>
            </div>
            <div className='form-group'>
                <label className='text' htmlFor='confirmPassword'>Confirm<br/> Password </label>
                <input className='inf4' onChange={onChange} type='password' name='confirmPassword'/>
            </div>
        </form>
    );
};

export default Form;