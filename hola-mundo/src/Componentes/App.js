import React, { Component } from 'react';
// import './App.css';


//componentes
import Header from './Global/Header';
import Contenido from'./Global/Contenido';
import Footer from './Global/Footer';



class App extends Component {
  render() {
    return (
      <div className="App">
    
        
          
        <Header/>
       <Contenido/>
        <Footer/> 

      </div>
    );
  }
}

export default App;
