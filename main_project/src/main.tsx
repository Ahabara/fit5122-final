import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Country from "./components/countries/Country.tsx";
import Explore from "./components/explore/Explore.tsx";
import PageNotFound from "./PageNotFound.tsx";
import Super from "./components/Finance/Super/Super.tsx";
import BankPage from "./components/Finance/BankPage.tsx";
import FestivalsPage from "./components/festival/FestivalsPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
  },

  {
    path: "/country/:countryName",
    element: <Country />,
    errorElement: <App />,
  },
  {
    path: "/explore/",
    element: <Explore />,
    errorElement: <App />,
  },
  {
    path: "/finance/super",
    element: <Super />,
    errorElement: <App />,
  },
  {
    path: "/finance/rates",
    element: <BankPage />,
    errorElement: <App />,
  },
  {
    path: "/festivals",
    element: <FestivalsPage />,
    errorElement: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <>
      <RouterProvider router={router} />
    </>
  </React.StrictMode>,
);
