import React, { useState, useEffect } from 'react';
import './Styles.css';

const Form = ({ inputs, setInputs }) => {
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  useEffect(() => {
    validateInputs();
  }, [inputs]);

  const validateInputs = () => {
    let errorsObj = {};

    // Validando First Name
    if (inputs.firstName.trim().length > 0 && inputs.firstName.trim().length < 2) {
      errorsObj.firstName = 'First Name must be at least 2 characters';
    } else {
      errorsObj.firstName = '';
    }

    // Validando Last Name
    if (inputs.lastName.trim().length > 0 && inputs.lastName.trim().length < 2) {
      errorsObj.lastName = 'Last Name must be at least 2 characters';
    } else {
      errorsObj.lastName = '';
    }

    // Validando Email
    if (inputs.email.trim().length > 0 && inputs.email.trim().length < 5) {
      errorsObj.email = 'Email must be at least 5 characters';
    } else {
      errorsObj.email = '';
    }

    // Validando Passwords
    if (
      inputs.password.trim().length > 0 &&
      (inputs.password.trim().length < 8 || inputs.password !== inputs.confirmPassword)
    ) {
      errorsObj.password = 'Password must be at least 8 characters';
      errorsObj.confirmPassword = 'Passwords must match';
    } else {
      errorsObj.password = '';
      errorsObj.confirmPassword = '';
    }

    setErrors(errorsObj);
  };

  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className='app'>
      <div className='form-group'>
        <label className='text' htmlFor='firstName'>
          First Name{' '}
        </label>
        <input
          className='inf'
          onChange={onChange}
          type='text'
          name='firstName'
          placeholder='Search...'
        />
      </div>
      {errors.firstName && <span className='error'>{errors.firstName}</span>}

      <div className='form-group2'>
        <label className='text' htmlFor='lastName'>
          Last Name{' '}
        </label>
        <input
          className='inf'
          onChange={onChange}
          type='text'
          name='lastName'
          placeholder='Search...'
        />
      </div>
      {errors.lastName && <span className='error'>{errors.lastName}</span>}

      <div className='form-group2'>
        <label className='text2' htmlFor='email'>
          Email{' '}
        </label>
        <input
          className='inf2'
          onChange={onChange}
          type='text'
          name='email'
          placeholder='Search...'
        />
      </div>
      {errors.email && <span className='error'>{errors.email}</span>}

      <div className='form-group2'>
        <label className='text' htmlFor='password'>
          Password{' '}
        </label>
        <input
          className='inf3'
          onChange={onChange}
          type='password'
          name='password'
          placeholder='Search...'
        />
      </div>
      {errors.password && <span className='error'>{errors.password}</span>}
      <div>
        {errors.confirmPassword && (
          <span className='error'>{errors.confirmPassword}</span>
        )}
      </div>
      
      <div className='form-group2'>
        <label className='text' htmlFor='confirmPassword'>
          Confirm<br /> Password{' '}
        </label>
        <input
          className='inf4'
          onChange={onChange}
          type='password'
          name='confirmPassword'
          placeholder='Search...'
        />
      </div>
    </form>
  );
};

export default Form;