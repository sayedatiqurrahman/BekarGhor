import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Statistics from './components/Statistics';
import Applied from './components/Applied';
import Blogs from './components/Blogs';
import Home from './components/Home';
import customLoader from './utility/customLoader';
import JobDetails from './components/JobDetails';
import toast, { Toaster } from 'react-hot-toast';
import FeatureJob from './components/subComponents/FeatureJob';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: customLoader,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('category.json')
      }, {
        path: 'statistics',
        element: <Statistics />
      }, {
        path: 'applied',
        element: <Applied />
      }, {
        path: 'blogs',
        element: <Blogs />
      }, {
        path: 'jobdetails',
        element: <JobDetails />
      }


    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
