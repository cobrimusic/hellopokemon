import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'


//Imports
import './index.scss';
import Lista from './views/Lista'
import Detalles from './views/Detalles'
import NotFound from './views/NotFound'

//ServiceWorker
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Router>
        <Switch>
            <Route exact path="/" component={Lista}/>
            <Route exact path="/lista" component={Lista}/>
            <Route exact path="/pokemon/:name" component={Detalles}/>
            <Route component={ NotFound } />
        </Switch>
    </Router>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
