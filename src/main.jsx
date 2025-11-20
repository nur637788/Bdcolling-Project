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
import ApiFetch from './components/Home page/ApiFetch.jsx';
import PrivacyPolicy from './components/Footer Page/PrivacyPolicy.jsx';
import CookiePolicy from './components/Footer Page/CookiePolicy.jsx';
import Teams from './components/Footer Page/Teams.jsx';
import Register from './components/AccountPage/Register.jsx';
import ForgetPass from './components/AccountPage/ForgetPass.jsx';
import NewPassword from './components/AccountPage/NewPassword.jsx';


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
        path: "/register",
        element: <Register />,
      },
      {
        path: "/forgetpass",
        element: <ForgetPass />,
      }, {
        path: "/newpass",
        element: <NewPassword />,
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
      {
        path: "/apifetch",
        element: <ApiFetch />,
      },
      {
        path: "/privacypolicy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/cookiepolicy",
        element: <CookiePolicy />,
      },
      {
        path: "/teams",
        element: <Teams />,
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
