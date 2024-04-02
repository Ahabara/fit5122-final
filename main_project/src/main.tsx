import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Country from "./components/countries/Country.tsx";

const router = createBrowserRouter([
    {
        path: "/*",
        element: <App/>,
        errorElement: <App/>,
    },

    {
        path: "/country/:countryName",
        element: <Country/>,
        errorElement: <App/>,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
