import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from "/redux/index.js";
import {Provder} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
       <Provder store={store}>
    <BrowserRouter>
       <App />
    </BrowserRouter>
    </Provder>

    


);

