import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Offers from "./pages/Offers";
import OfferDetails from "./pages/OfferDetails";
import Register from "./pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:
    [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/a-propos",
        element: <About />,
      },
      {
        path: "/offres",
        element: <Offers />,
      },
      {
        path: "/offre/:id",
        element: <OfferDetails />,
      },
      {
        path: "/inscription",
        element: <Register />
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
