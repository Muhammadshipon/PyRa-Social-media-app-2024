import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Pages/Login.jsx';
import CreateAccount from './Pages/CreateAccount.jsx';
import Home from './Pages/MainLayout/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>,
  },
  {
    path:"/create-account",
    element:<CreateAccount></CreateAccount>
  },
  {
    path:"/home",
    element:<Home></Home>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
