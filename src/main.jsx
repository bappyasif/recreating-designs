import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Header } from './components/Header.jsx'
import { Root } from './routes/Root.jsx'
import { Tours } from './routes/Tours.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />
  },
  {
    path: "/tours",
    element: <Tours />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
