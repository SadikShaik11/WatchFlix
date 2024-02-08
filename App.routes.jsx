import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import Home from "./src/modules/pages/Home";
import MovieDetails from "./src/modules/pages/MovieDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movie/:id",
        element: <MovieDetails />,
      },
    ],
  },
]);

module.exports = routes;
