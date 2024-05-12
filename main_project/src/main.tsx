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
import BankRatesPage from "./components/Finance/BankRatesPage.tsx";
import DashboardPage from "./components/Finance/dashboard/DashboardPage.tsx";
import JobsPage from "./components/jobs/JobsPage.tsx";
import AboutUs from "./components/AboutUs.tsx";
import ExploreCultures from "./components/landing/ExploreCultures.tsx";
import Layout from "./components/landing/Layout.tsx";
import { GamePage } from "./components/landing/GamePage.tsx";

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
    path: "/finance/banks",
    element: <BankRatesPage />,
    errorElement: <App />,
  },
  {
    path: "/festivals",
    element: <FestivalsPage />,
    errorElement: <App />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
    errorElement: <App />,
  },
  {
    path: "/jobs",
    element: <JobsPage />,
    errorElement: <App />,
  },
  {
    path: "/about",
    element: <AboutUs />,
    errorElement: <App />,
  },
  {
    path: "/cultures",
    element: (
      <Layout styling={"bg-purple-900  text-gray-400"} navStyles={"bg-myBlack"}>
        <ExploreCultures />
        <GamePage />
      </Layout>
    ),
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
