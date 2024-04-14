import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css';
import App from './App';
import Pits from './components/Pits'
import About from './components/About'
import PitGenerator from './components/PitGenerator'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/pits',
    element: <Pits />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/pitgenerator',
    element: <PitGenerator />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
