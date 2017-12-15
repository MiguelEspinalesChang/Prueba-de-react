//dependencias
import React, { Component } from 'react';
import PropTypes from 'prop-type';
import {
  Link
} from 'react-router-dom'

//assets
import logo from './imagenes/logo.svg';
import './Css/Header.css';


class Header extends Component {

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
                {items && items.map((item,key) => <li key={key}><Link to={item.url}>{item.title}</Link></li>)}
            </ul>
        </div>
      </div>
    );
  }
}

export default Header;
