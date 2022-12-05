import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import Contact from './pages/contact'
import {
    createHashRouter,
    RouterProvider,
} from "react-router-dom";

const router = createHashRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/contact",
        element: <Contact />
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

