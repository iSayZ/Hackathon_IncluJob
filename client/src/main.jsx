import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Offers from "./pages/Offers";
import OfferDetails from "./pages/OfferDetails";
import Register from "./pages/Register";
import PageRegisterConfirmation from "./pages/PageRegisterConfirmation";
import PageRegisterForm1 from "./pages/PageRegisterForm1";
import PageRegisterForm2 from "./pages/PageRegisterForm2";
import PageRegisterForm3 from "./pages/PageRegisterForm3";
import PageRegisterForm4 from "./pages/PageRegisterForm4";
import PageCreateAnnounce from "./pages/PageCreateAnnounce";


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
      },
      {
        path: "/confirmation-inscription",
        element: <PageRegisterConfirmation />,
      },
      {
        path: "/formulaire-inscription",
        element: <PageRegisterForm1 />,
      },
      {
        path: "/formulaire-inscription2",
        element: <PageRegisterForm2 />,
      },
      {
        path: "/formulaire-inscription3",
        element: <PageRegisterForm3 />,
      },
      {
        path: "/formulaire-inscription4",
        element: <PageRegisterForm4 />,
      },
      {
        path: "/creation-annonce",
        element: <PageCreateAnnounce />,
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
