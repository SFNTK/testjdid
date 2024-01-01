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
import Dash from './pages/dashboard/contenu/dash';
import Stats from './pages/dashboard/contenu/stats';

import { persistor, store } from './redux/store';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import Cartpage from './pages/pagecart/cartpage';
import Login from './pages/login/login';
import Addjersey from './pages/dashboard/contenu/addjersey';
import Updatejersey from './pages/dashboard/contenu/updatejersey';
import Checkout from './pages/checkout/checkout';


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
/*const router = createBrowserRouter([
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
*/

/*const routes1 = createRoutesFromElements(
  <Route path="/admin" element={<Dashboard />}>
    <Route index element={<Dash />} />
    <Route path="stats" element={<Stats />} />
  </Route>
);

const routes2 = [
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
];
const routesFromElements = routes1.props.children.props.children;
const allRoutes = [
  ...routesFromElements,
  ...routes2,
];*/
const routes = [
  /*{
    path: "/admin",
    element: <Dashboard>
      <Route index element={<Dash />} />
      <Route path="stats" element={<Stats />} />
    </Dashboard>,
  },
  {
    path: "/admin",
    element: (
      <Dashboard>
        <Route index element={<Dash />} />
        <Route path="/stats" element={<Stats />} />
      </Dashboard>
    ),
  },*/
  {
    path: "/admin",
    element: <Dashboard />,
    children: [
      {
        path: "",
        element: <Dash />,
      },
      {
        path: "stats",
        element: <Stats />,
      }, {
        path: "addjersey",
        element: <Addjersey />,
      },{
        path: "updatejersey",
        element: <Updatejersey />,
      },
    ],
  },
  {
    path: "/",
    element: <App />,
  }, {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/products/:name",
    element: <Page2 />,
  },
  {
    path: "/product/:id",
    element: <Page3 />,
  }, {
    path: "/cart",
    element: <Cartpage />,
  },{
    path: "/login",
    element: <Login />,
  },

];


const router = createBrowserRouter(routes);

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
   
  </React.StrictMode>
);*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>



    {/* Your app components */}
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
