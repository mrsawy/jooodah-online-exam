/* eslint-disable import/no-unresolved */
import { lazy, Suspense } from 'react';
import { Outlet,Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from './../layouts/dashboard';

export const IndexPage = lazy(() => import('./../pages/app'));
export const LevelsPage = lazy(() => import('./../pages/levels'));
export const QuestionsPage = lazy(() => import('./../pages/questions'));
export const Page404 = lazy(() => import('./../pages/page-not-found'));

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <IndexPage />, index: true },
        { path: 'dashboard/levels', element: <LevelsPage /> },
        { path: 'dashboard/questions', element: <QuestionsPage /> },
      ],
    },

    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
