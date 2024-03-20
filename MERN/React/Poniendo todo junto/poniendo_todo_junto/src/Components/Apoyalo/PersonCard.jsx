import { useState } from 'react';
import PropTypes from 'prop-types';
import './Style.css';

const PersonCard = (props) => {

    const [age, setAge] = useState(props.age);

    const handleBirthday = () => {
        setAge(age + 1);
    };

    return (
        <div className="person-card">
            <h2>{props.lastName} {props.firstName}</h2>
            <p>Age: {age}</p>
            <p>Hair Color: {props.hairColor}</p>
            <button className='button' onClick={handleBirthday}>Birthday Button for {props.fullName}</button>
        </div>
    );
}

PersonCard.propTypes = {
    lastName: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    hairColor: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
};

export default PersonCard;