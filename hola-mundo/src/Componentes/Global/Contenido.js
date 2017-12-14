//dependencias
import React, { Component } from 'react';
import PropTypes from 'prop-type';
//assents
import './Css/Contenido.css';

class Contenido extends Component {
static PropTypes ={
    body: PropTypes.object
};

  render() {
      const {body}= this.props;
    return (

      <div className="Contenido">
          {body}

      </div>
    );
  }
}

export default Contenido;
