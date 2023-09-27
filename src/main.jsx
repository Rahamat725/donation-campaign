import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './MainLayout/MainLayout.jsx';
import Home from './pages/Home/Home.jsx';
import Donation from './pages/Donation/Donation.jsx';
import Statistics from './pages/Statistics/Statistics.jsx';
import DonationCards from './MainLayout/components/DonationCards/DonationCards';
import CardDetails from './pages/CardDetails/CardDetails';
import ErrorPage from './pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path:'/',
    element:<MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
    {
      path:'/',
      element:<Home></Home>,
      loader:()=>fetch('/donation.json')
    },
    {
      path:'/donation',
      element:<Donation></Donation>,
      loader:()=>fetch('/donation.json')
    },
    {
      path:'/statistics',
      element:<Statistics></Statistics>,
      loader:()=>fetch('/donation.json')
    },
    {
      path:'/cardDetails/:id',
      element:<CardDetails></CardDetails>,
      loader:()=>fetch('/donation.json')
    }
   
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
