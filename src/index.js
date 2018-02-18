import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './index.css';
//import App from './App';
import Home from './modules/Home';
import Post from './modules/Post';
import registerServiceWorker from './registerServiceWorker';
import store from './utils/store';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/post/:id" component={Post}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
