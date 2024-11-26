import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Views/Home/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Detail from './Views/Detail/Detail';
import Add from './Views/Adddetail/Add';


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/detail/:roomNo",
    element: <Detail />
  },
  {
    path: "/add",
    element:<Add/>
  }

])

root.render(

  <RouterProvider router={router} />

);
