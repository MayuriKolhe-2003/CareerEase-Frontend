import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import PageNotFound from './pages/PageNotFound';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Careergpt from './pages/Careergpt';
import Profile from './pages/Profile';
import LearnSkills from './pages/LearnSkills';
import Opportunities from './pages/Opportunities';
import Discussions from './pages/Discussions';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ✅ Correct way to create the router
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "signin", element: <Signin /> },
      { path: "signup", element: <Signup /> },
      { path: "profile", element: <Profile /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "careergpt", element: <Careergpt /> },
      { path: "learnskills", element: <LearnSkills /> },
      { path: "opportunities", element: <Opportunities /> },
      { path: "discussions", element: <Discussions /> },
      { path: "*", element: <PageNotFound /> }, // Catch-all for 404
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer position="top-right" autoClose={3000} hideProgressBar closeOnClick pauseOnHover draggable /> 
  </React.StrictMode>
);

// Start performance monitoring (optional)
reportWebVitals();
