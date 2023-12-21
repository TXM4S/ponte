import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import Home from './components/home';
import Series1 from './components/series1';
import Series1Product from './components/series1product';
import Series2 from './components/series2';
import Series2Product from './components/series2product';
import Archetype from './components/archetype';
import ArchetypeProduct from './components/archetypeproduct';
import Contact from './components/contact';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './components/error';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/series1',
        element: <Series1 />,
      },
      {
        path: '/series1/:id',
        element: <Series1Product/>,
      },
      {
        path: '/series2',
        element: <Series2 />,
      },
      {
        path: '/series2/:id',
        element: <Series2Product/>,
      },
      {
        path: '/archetype',
        element: <Archetype />,
      },
      {
        path: '/archetype/:id',
        element: <ArchetypeProduct/>,
      },
      {
        path: '/contact',
        element: <Contact/>,
      }
    ],
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
