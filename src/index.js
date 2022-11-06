import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Contact from './pages/contact';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter basename='/HNGi9-LinkTree-clone'>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
);


