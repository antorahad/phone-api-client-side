import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main.jsx';
import Phone from './components/Phone.jsx';
import Mobiledetails from './components/Mobiledetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/mobiles",
        element: <Phone />,
        loader: () => fetch('http://localhost:3000/mobiles')
      },
      {
        path: "/mobiles/:id",
        element: <Mobiledetails/>,
        loader: ({params}) => fetch(`http://localhost:3000/mobiles/${params.id}`)
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
