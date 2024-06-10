import ReactDOM from 'react-dom/client';

import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import About from "./views/About/About";
import Contact from "./views/Contact/Contact";
import Home from "./views/Home/Home";
import "./component/Navbar/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
const path = window.location.pathname

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/contact",
        element: <Contact />
    },

]);

root.render(<RouterProvider router={router} />);
export default index