import React, { Component } from 'react';
import logo from './imagenes/logo.svg';
import './Css/Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="logo">
          <img src={logo} alt="logo" />
          <h2 >Bienvenido a React</h2>
        </div>
      </div>
    );
  }
}

export default Header;
