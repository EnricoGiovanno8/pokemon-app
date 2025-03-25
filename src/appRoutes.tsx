import HomePage from './pages/HomePage/HomePage';
import { lazy, Suspense } from 'react';

const PokemonDetailPage = lazy(() => import('./pages/PokemonDetailPage/PokemonDetailPage'));

const appRoutes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/pokemon-detail',
    children: [
      {
        path: ':id',
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <PokemonDetailPage />
          </Suspense>
        ),
      },
    ],
  },
];

export default appRoutes;
