//dependencias
import React from 'react';
import { Route , Switch} from 'react-router-dom';

//componentes
import App from './Componentes/App';
import About from './Componentes/About';
import Contactos from './Componentes/Contactos';
import Home from './Componentes/Home';
import Page404 from './Componentes/Page404';

const  AppRoutes = () =>
    <App>
        <Switch>
            <Route path="/about" component={About}/>
            <Route path="/contacto" component={Contactos}/>
            <Route path="/" component={Home}/>
            <Route  component={Page404}/>
        </Switch>
    </App>;

            export default AppRoutes;


