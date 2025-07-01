import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from '../components/Layout/Layout';
import NotFoundPage from '../pages/NotFoundPage.jsx';
import Design from '../pages/Design.jsx';
import Three3D from '../pages/Three3D.jsx';
import Development from '../pages/Development.jsx';
import CaseStudies from '../pages/CaseStudies.jsx';
import FrontPage from '../components/FrontPage/FrontPage.jsx';
import DescriptionPage from '../components/DescriptionPage/DescriptionPage.jsx';

function AppRouter() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <FrontPage />
    },
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: 'design', element: <Design /> },
        { path: '3d', element: <Three3D /> },
        { path: 'development', element: <Development /> },
        { path: 'casestudies', element: <CaseStudies /> },
      ],
    },
    // DescriptionPage outside Layout so it doesn't show navbar
    {
      path: '/description',
      element: <DescriptionPage />
    },
    {
      path: '*',
      element: <NotFoundPage />
    },
  ]);

  return <RouterProvider router={router} />;
}

export default AppRouter;
