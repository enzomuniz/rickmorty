import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App';
import Infos from './Infos';

// Define as páginas (rotas) do projeto
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/Infos/:id",
    element: <Infos/>
  }
  
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)