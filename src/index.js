import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './assets/sass/style.scss'
import './assets/sass/plugins.scss'
import './assets/sass/style.react.scss'
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import { store } from './redux/mainstore'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

reportWebVitals();
