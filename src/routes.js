import App from "./App";
import Home from "./components/Home";
import About from "./components/About";
import Directory from "./components/Directory";
import ErrorPage from "./components/ErrorPage";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/directory",
                element: <Directory />
            },
            {
                path: "/about",
                element: <About />
            }
        ]
    }
];

export default routes;