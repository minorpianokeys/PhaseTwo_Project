import App from "./App";
import Home from "./pages/Home";
import DrinkForm from "./components/DrinkForm";
import Directory from "./pages/Directory";
import ErrorPage from "./pages/ErrorPage";

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
                path: "/new",
                element: <DrinkForm />
            }
        ]
    }
];

export default routes;