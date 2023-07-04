import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home } from './routes/Home.jsx'
import { Menu } from './routes/Menu.jsx'
import { Events } from './routes/Events.jsx'
import { Gallery } from './routes/Gallery.jsx'
import { About } from './routes/About.jsx'
import { Contact } from './routes/Contact.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/menu",
    element: <Menu />
  },
  {
    path: "/events",
    element: <Events />
  },
  {
    path: "/gallery",
    element: <Gallery />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/contact",
    element: <Contact />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
