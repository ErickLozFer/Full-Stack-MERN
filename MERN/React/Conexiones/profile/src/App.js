import React, { useState } from 'react';
import './App.css';
import janeImage from './images/jane-m.jpg';
import mapMarkerIcon from './icons/map-marker.png';
import gearIcon from './icons/gear.png';
import acceptCircleIcon from './icons/accept-circle.png';
import closeCircleIcon from './icons/close-circle.png';
import toddImage from './images/todd-s.jpg';
import philImage from './images/phil-s.jpg';
import adrienImage from './images/adrien-s.jpg';
import anneImage from './images/anne-s.jpg';
import alayneImage from './images/alayne-s.jpg';
import arryImage from './images/arry-s.jpg';

function App() {
  const [connectionRequests, setConnectionRequests] = useState([
    { id: 1, name: 'Todd E', image: toddImage },
    { id: 2, name: 'Phil K', image: philImage }
  ]);

  const [connections, setConnections] = useState([
    { id: 497, name: 'Adrien D', image: adrienImage },
    { id: 498, name: 'Anne J', image: anneImage },
    { id: 499, name: 'Alayne T', image: alayneImage },
    { id: 500, name: 'Arry Y', image: arryImage }
  ]);

  const [username, setUsername] = useState('Jane Doe');
  const totalConnections = connections.length + 496;

  const acceptRequest = (user) => {
    setConnectionRequests(prevRequests =>
      prevRequests.filter(request => request.id !== user.id)
    );
    setConnections(prevConnections => [...prevConnections, user]);
  };

  const ignoreRequest = (user) => {
    setConnectionRequests(prevRequests =>
      prevRequests.filter(request => request.id !== user.id)
    );
  };

  const editUsername = () => {
    setUsername('Mariah V');
  };

  return (
    <div className="App">
      <div id="nav">
        <h1 className="nav-title">Profile</h1>
        <ul className="nav-links overflow">
          <li><a href="#">Home</a></li>
          <li><a href="#" className="active">My Profile</a></li>
          <li><a href="#">Find Connections</a></li>
          <li><button className="btn right overflow">Sign Out</button></li>
        </ul>
      </div>

      <div id="user-card">
        <div className="user overflow">
          <div className="card-1">
            <img className="photo" src={janeImage} alt="jane" />
          </div>
          <div className="card-2 overflow">
            <h1 className="name-1" id="username">{username}</h1>
            <h3 className="map-icon">
              <img className="map" src={mapMarkerIcon} alt="map" />
              Seattle
            </h3>
            <p className="data">
              Developer | Engineer | Problem Solver<br />
              Master of shadows and the Internet!
            </p>
            <p onClick={editUsername}>
              <button className="edit-profile" onClick={editUsername}>
                <img src={gearIcon} alt="edit" className="edit" />
                edit profile
              </button>
            </p>
          </div>
        </div>
      </div>

      <div id="education">
        <div className="title-1">
          <p className="margin-1">Education</p>
        </div>
        <div className="border-1">
          <p className="margin-2 program">Coding Dojo - Full Stack Bootcamp</p>
          <p className="margin-2 date">Dec 2019 - Mar 2020</p>
          <p className="margin-2 knowledge">
            Triple black belt in Python, MERN and C#...
          </p>
        </div>
      </div>

      <div id="connection-requests" className="overflow">
        <div className="title-2">
          <p className="circle-1" id="requests">{connectionRequests.length}</p>
          <p className="title-3 margin-3">Connection Requests</p>
        </div>
        <div className="border-2">
          {connectionRequests.map(user => (
            <div className="seccion-1 overflow" key={user.id}>
              <img src={user.image} alt={user.name} className="photo-todd" />
              <p className="name-2">{user.name}</p>
              <div className="check-close">
                <img
                  src={acceptCircleIcon}
                  alt="check"
                  className="check"
                  onClick={() => acceptRequest(user)}
                />
                <img
                  src={closeCircleIcon}
                  alt="close"
                  className="close"
                  onClick={() => ignoreRequest(user)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id="your-connections" className="overflow">
        <div className="title-4">
          <p className="circle-2" id="connections">{totalConnections}</p>
          <p className="title-5 margin-4">Your Connections</p>
        </div>
        <div className="border-3">
          {connections.map(user => (
            <div className="seccion-2 overflow" key={user.id}>
              <img src={user.image} alt={user.name} className="photo-adrien" />
              <p className="name-3">{user.name}</p>
            </div>
          ))}
          <div className="view">
            <a href="#" className="more-2">View More</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;