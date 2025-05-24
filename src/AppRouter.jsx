// AppRouter.jsx
import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './components/Layout';
import NotFoundPage from './pages/NotFoundPage.jsx';
import Design from './pages/Design.jsx';
import Three3D from './pages/Three3D.jsx';
import Development from './pages/Development.jsx';
import CaseStudies from './pages/CaseStudies.jsx';
import Home from './pages/Home.jsx';
import FrontPage from './components/FrontPage.jsx';

function AppRouter() {
  const [isFrontPageRevealed, setisFrontPageRevealed] = useState(false);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <FrontPage isFrontPageRevealed={isFrontPageRevealed} setisFrontPageRevealed={setisFrontPageRevealed} />
    },
    {
      path: '/',
      element: <Layout isFrontPageRevealed={isFrontPageRevealed} setisFrontPageRevealed={setisFrontPageRevealed}/>,
      children: [
        { path: 'design', element: <Design /> },
        { path: '3d', element: <Three3D /> },
        { path: 'development', element: <Development /> },
        { path: 'casestudies', element: <CaseStudies /> },
      ],
    },
    { path: '*', element: <NotFoundPage /> },
  ]);

  return <RouterProvider router={router} />;
}

export default AppRouter;
