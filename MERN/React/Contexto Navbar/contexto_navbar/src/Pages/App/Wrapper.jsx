import React, { useState } from 'react';
import Navbar from '../../Components/Navbar.jsx';
import FormWrapper from '../../Components/FormWrapper.jsx';
import Form from '../../Components/Form.jsx';

export const UserContext = React.createContext();

const Wrapper = () => {
    const [username, setUsername] = useState("usuario");

    return (
        <UserContext.Provider value={{ username, setUsername }}>
            <div>
                <Navbar />
                <FormWrapper>
                    <Form />
                </FormWrapper>
            </div>
        </UserContext.Provider>
    );
};

export default Wrapper;