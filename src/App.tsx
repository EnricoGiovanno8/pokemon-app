import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import appRoutes from './appRoutes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const router = createBrowserRouter(appRoutes);
const client = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={client}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
