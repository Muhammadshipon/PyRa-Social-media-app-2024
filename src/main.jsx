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
import PrivateRoute from './PrivateRoutes/PrivateRoute.jsx';
import RightSideNavItemProvider from './Provider/RightSideNavItemProvider.jsx';
import Profile from './Pages/Profile/Profile.jsx';

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
    element:<PrivateRoute><Home></Home></PrivateRoute>,
    children:[
      {
        path:"/home/profile/:email",
        element:<Profile></Profile>
      }
    ]
  },
 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RightSideNavItemProvider>
     <RouterProvider router={router} />
     </RightSideNavItemProvider>
  </StrictMode>,
)
