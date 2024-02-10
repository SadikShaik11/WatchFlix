import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import Home from "./src/modules/pages/Home";
import MovieDetails from "./src/modules/pages/MovieDetails";
import SearchPage from "./src/modules/pages/SearchedIItems";

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
      {
        path: "/search",
        element: <SearchPage />,
      },
    ],
  },
]);

module.exports = routes;
