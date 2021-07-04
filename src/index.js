import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import MainRoute from './routes/Main';
import NotFoundRoute from './routes/NotFound'
import configureStore from './store/configureStore'

//configure store 
const store = configureStore();

//set browser history
const history = createBrowserHistory();


ReactDOM.render( <Provider store = { store }>
    <Router history={history}>
    <Switch>
    <Route key="main" exact path="/" component={MainRoute} />
    <Route exact path="*" component={NotFoundRoute} />
    </Switch>
    </Router>
</Provider>, document.getElementById('app'));