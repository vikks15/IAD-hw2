import React from 'react';
import ReactDOM from 'react-dom';
//import { AppContainer } from 'react-hot-loader';
import App from './App/App.js';
import { BrowserRouter } from 'react-router-dom'

import { Provider } from "react-redux";
import store from '../store';

ReactDOM.render(
    <Provider store={ store }>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept();
}