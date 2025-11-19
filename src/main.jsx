import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './Redux/store.js';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import Login from './Pages/Login.jsx';
import Details from './components/Home page/Details.jsx';
import Cart from './components/Home page/CartPage.jsx';
import FavoritePage from './components/Home page/FavoritePage.jsx';
import Checkout from './components/Home page/TotalCheckout.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import SingleCheckout from './components/Home page/SingleCheckout.jsx';
import Profile from './components/Profile/Profile.jsx';
import Admin from './components/Dasboard/Admin.jsx';
import EditProfile from './components/Profile/EditProfile.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/details/:id",
        element: <Details />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/favorite",
        element: <FavoritePage />,
      },
      {
        path: "/totalcheckout",
        element:
          <ProtectedRoute><Checkout /></ProtectedRoute>,
      },
      {
        path: "/singlecheckout",
        element:
          <ProtectedRoute><SingleCheckout /></ProtectedRoute>,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/editprofile",
        element: <EditProfile />,
      },



    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
