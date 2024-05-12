import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
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
        <div className="bg-purple-900">
          <div className=" mx-auto max-w-7xl py-12 ">
            <div className="relative isolate overflow-hidden border-2 border-myDarkPurple px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-4 md:pt-24 lg:flex lg:gap-x-8 lg:px-24 lg:pt-0">
              <svg
                viewBox="0 0 1024 1024"
                className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                aria-hidden="true"
              >
                <circle
                  cx={512}
                  cy={512}
                  r={512}
                  fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                  fillOpacity="0.7"
                />
                <defs>
                  <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                    <stop stopColor="#7775D6" />
                    <stop offset={1} stopColor="#E935C1" />
                  </radialGradient>
                </defs>
              </svg>
              <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-12 lg:text-left">
                <h2 className="text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
                  Keen to Explore What Melbourne Has To Offer?
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Take our custom quiz and let us help you explore the diverse
                  and rich suburbs of Melbourne! No two suburbs are the same and
                  we're here to guide you.
                </p>
                <div className="mt-4 flex items-center justify-center gap-x-6 lg:justify-start">
                  <div className="mt-8 flex flex-wrap gap-4 text-center">
                    <Link
                      to={"link"}
                      onClick={() => window.scrollTo(0, 0)}
                      className="group relative px-6 py-3 font-bold text-black"
                    >
                      <span className="absolute inset-0 h-full w-full -translate-x-2 -translate-y-2 transform bg-myPurple transition duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"></span>
                      <span className="absolute inset-0 h-full w-full border-4 border-black"></span>
                      <span className="relative">Take Me There!</span>
                    </Link>
                    <Link
                      to="/"
                      className="group relative inline-block px-4 py-2 font-medium"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <span className="absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform bg-myPurple transition duration-200 ease-out group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                      <span className="absolute inset-0 h-full w-full border-2 border-black bg-white group-hover:bg-myPurple"></span>
                      <span className="relative font-bold text-black group-hover:text-black">
                        Home
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
