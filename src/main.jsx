import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage.jsx';
import Design from './pages/Design.jsx';
import Three3D from './pages/Three3D.jsx';
import Development from './pages/Development.jsx';
import CaseStudies from './pages/CaseStudies.jsx';
import Home from './pages/Home.jsx';
import './index.css'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: "/design", element: <Design /> },
  { path: "3d", element: <Three3D /> },
  { path: "development", element: <Development /> },
  { path: "casestudies", element: <CaseStudies /> },
  { path: "*", element: <NotFoundPage /> },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
