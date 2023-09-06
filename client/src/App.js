import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ROUTES } from './routes/routes';
import { AdminContextProvider } from './context/AdminContext';
import { UserContextProvider } from './context/UserContext';

function App() {
  const routes = createBrowserRouter(ROUTES)
  return (
    <>
      <AdminContextProvider>
        <UserContextProvider>
          <RouterProvider router={routes}>

          </RouterProvider>
        </UserContextProvider>
      </AdminContextProvider>
    </>
  );
}

export default App;
