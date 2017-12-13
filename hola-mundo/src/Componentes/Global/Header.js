//dependencias
import React, { Component } from 'react';
import PropTypes from 'prop-type';


//assets
import logo from './imagenes/logo.svg';
import './Css/Header.css';


class Header extends Component {

  static props = {
    title : PropTypes.toString.isRequired,
    items : PropTypes.array
  };
  render() {

      const {title,items}= this.props;

    return (
      <div className="Header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div>
        <h2>{title}</h2>
            <ul className="menu">
                {items && items.map((item,key) => <li key={key}>{item.title}</li>)}
            </ul>
        </div>
      </div>
    );
  }
}

export default Header;
