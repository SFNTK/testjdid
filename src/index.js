import React, { useMemo, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Page1 from './pages/page1/page1';
import Page2 from './pages/page2/page2';
import Test2 from './components/test2';
import Page3 from './pages/page3/page3';
import Dashboard from './pages/dashboard/dashboard';



/*
const router = createBrowserRouter(
  createRoutesFromElements(
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<Page1/>}/>
     

    </Route>,
    <Route path="test" element={<Test2/>}>
       <Route path='products' element={<Page2/>}/>
    </Route>
    </Routes>
    </BrowserRouter>
  
    
  )
);*/
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  }, {
    path: "/products/:name",
    element: <Page2/>,
  }, {
    path: "/product/:id",
    element: <Page3/>,
  }, {
    path: "/admin",
    element: <Dashboard/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
