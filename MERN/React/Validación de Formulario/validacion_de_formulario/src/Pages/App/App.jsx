import React, { useReducer } from 'react';
import Form from '../../Components/Form.jsx';

const initialState = {
  firstName: {
    value: '',
    error: null
  },
  lastName: {
    value: '',
    error: null
  },
  email: {
    value: '',
    error: null
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        [action.field]: {
          ...state[action.field],
          value: action.value,
          error: validateField(action.field, action.value)
        }
      };
    default:
      return state;
  }
};

const validateField = (fieldName, value) => {
  switch (fieldName) {
    case 'firstName':
    case 'lastName':
      return value.length === 0 ? 'Este campo es obligatorio.' : null;
    case 'email':
      return /^\S+@\S+\.\S+$/.test(value) ? null : 'Por favor, introduce un correo electrónico válido.';
    default:
      return null;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'CHANGE', field: name, value: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Acá se maneja el envío del formulario.
    console.log('Formulario enviado:', state);
  };

  return (
    <div>
      <Form state={state} dispatch={dispatch} handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
};

export default App;