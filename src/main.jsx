import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage.jsx'
import AboutPage from './Pages/AboutPage/AboutPage.jsx'
import Works from './Pages/WorksPage/Works.jsx'
import Contact from './Pages/ContactPage/Contact.jsx'
import ServiceOfferings from './Pages/ServicePage/ServiceOfferings.jsx'
import Credential from './Pages/CredentialPage/Credential.jsx'
import Blogs from './Pages/BlogsPage/Blogs.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <div>404 page found</div>,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },

      {
        path: '/about',
        element: <AboutPage />
      },

      {
        path: '/works',
        element: <Works />
      },

      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: "/service",
        element: <ServiceOfferings />
      },

      {
        path: "/credential",
        element: <Credential />
      },

      {
        path: "/blogs",
        element: <Blogs />
      }
    ]
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
