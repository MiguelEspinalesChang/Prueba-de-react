//dependencias
import React, {Component} from 'react';
import PropTypes from 'prop-type';

//componentes
import Header from './Global/Header';
import Contenido from './Global/Contenido';
import Footer from './Global/Footer';

// Datos 
import items from '../data/menu';

class App extends Component {
    static  PropTypes ={
        children : PropTypes.object
    };
    render() {
        const {children}= this.props;
        return (
            <div className="App">
                <Header title="codejobs" items={items}/>
                <Contenido body = {children}/>
                <Footer/>

            </div>
        );
    }
}

export default App;
