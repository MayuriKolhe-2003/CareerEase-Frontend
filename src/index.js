import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter as Router, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import PageNotFound from './pages/PageNotFound';
import Layout from './layout/Layout';
import Home from './pages/Home';


const router = new Router(
  createRoutesFromElements(
    <Route path='/' exact element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/*" element={<PageNotFound />} />
    </Route>
  )
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
