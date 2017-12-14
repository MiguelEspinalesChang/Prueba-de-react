//dependencias
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

//Rotes
import AppRoutes from './routes';

//assents
import './index.css';
//import App from './Componentes/App';


render(
<Router>
    <AppRoutes/>
</Router>,
document.getElementById('root')
);
// registerServiceWorker();
