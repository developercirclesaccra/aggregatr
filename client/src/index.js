import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import logging from './reduxes/reducers/loggingInOut.js'

import 'semantic-ui-css/semantic.min.css';

let store = createStore(logging)

ReactDOM.render(
    <App />,
document.getElementById('root'));



registerServiceWorker();
