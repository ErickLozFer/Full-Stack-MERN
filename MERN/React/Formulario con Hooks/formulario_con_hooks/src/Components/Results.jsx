import React from "react";
import './Styles.css'

const Results = props => {
    const { firstName, lastName, email, password, confirmPassword } = props.data;

    return (
        <div>
            <h3 className="titulo">Your Form Data</h3>
            <p className="data">First Name: {firstName}</p>
            <p className="data">Last Name: {lastName}</p>
            <p className="data">Email: {email}</p>
            <p className="data">Password: {password}</p>
            <p className="data">Confirm Password: {confirmPassword}</p>
        </div>
    );
};

export default Results;