import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Header } from './components/Header/index.jsx'
import { AboutUs } from './routes/AboutUs.jsx'
import { News } from './routes/News.jsx'
import { Contacts } from './routes/Contacts.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/about-us",
    element: <AboutUs />
  },
  {
    path: "/news",
    element: <News />
  },
  {
    path: "/contact",
    element: <Contacts />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Header /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
