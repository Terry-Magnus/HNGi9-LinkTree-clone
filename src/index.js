import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Contact from './pages/contact';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "HNGi9-LinkTree-clone",
        element: <App />
    },
    {
        path: "HNGi9-LinkTree-clone/contact",
        element: <Contact />
    }
]);

ReactDOM.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
    document.getElementById('root')
);


