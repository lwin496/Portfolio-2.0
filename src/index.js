import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Gallery from './Pages/Gallery';
import About from './Pages/About';
import Contact from './Pages/Contact';


const router = createBrowserRouter([
  {
    path:'/',
    element: <Home />, 
  },
  {
    path:'/about',
    element: <About />, 
  },
  {
    path:'/gallery',
    element: <Gallery />, 
  },
  {
    path:'/contact',
    element: <Contact />, 
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} /> 
  </React.StrictMode>
);
