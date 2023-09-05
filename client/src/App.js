import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ROUTES } from './routes/routes';
import { AdminContextProvider } from './context/AdminContext';

function App() {
  const routes = createBrowserRouter(ROUTES)
  return (
    <>
      <AdminContextProvider>
        <RouterProvider router={routes}>

        </RouterProvider>
      </AdminContextProvider>
    </>
  );
}

export default App;
