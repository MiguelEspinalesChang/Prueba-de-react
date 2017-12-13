//dependencias
import React, {Component} from 'react';

//componentes
import Header from './Global/Header';
import Contenido from './Global/Contenido';
import Footer from './Global/Footer';

// Datos 
import items from '../data/menu';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header title="codejobs" items={items}/>
                <Contenido/>
                <Footer/>

            </div>
        );
    }
}

export default App;
