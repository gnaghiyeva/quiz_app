import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ROUTES } from './routes/routes';
import { AdminContextProvider } from './context/AdminContext';
import { UserContextProvider } from './context/UserContext';
import { HomeContextProvider } from './context/HomeModelContext';

function App() {
  const routes = createBrowserRouter(ROUTES)
  return (
    <>
      <AdminContextProvider>
        <UserContextProvider>
          <HomeContextProvider>
            <RouterProvider router={routes}>

            </RouterProvider>
          </HomeContextProvider>
        </UserContextProvider>
      </AdminContextProvider>
    </>
  );
}

export default App;
