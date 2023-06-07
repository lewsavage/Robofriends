import React from 'react';
import * as ReactDomClient from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk'
import './index.css';
import App from './containers/App';
import { searchRobots, requestRobots } from './reducers';
import 'tachyons';

const logger = createLogger();
const rootReducers = combineReducers ({searchRobots, requestRobots})
const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger))
const container = document.getElementById('root');
const root = ReactDomClient.createRoot(container);


root.render
    (
        <div>
            <Provider store={store}> 
                <App />
            </Provider>
        </div>
    );