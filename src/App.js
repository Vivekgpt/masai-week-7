import React from 'react';
import './App.css';
import Activities from './Activities';

class Profile extends React.Component{
  render(){
    return (
      <div className="App">
        <header className="App-header">
            <nav className="navbar navbar-light h1">
            <u>HEALTH ADVISOR <img src="https://www.pngkey.com/png/detail/251-2514184_about-natures-way-medicine-medical-marijuana-symbol-hd.png" width="50" height="50" className="d-inline-block align-top" alt="..."/> </u>
            </nav>
        </header>
        <Activities/>
      </div>
    );
  }
}

export default Profile;
