import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ROUTES } from './routes/routes';
import { AdminContextProvider } from './context/AdminContext';
import { UserContextProvider } from './context/UserContext';
import { HomeContextProvider } from './context/HomeModelContext';
import { CategoriesContextProvider } from './context/CategoriesContext';

function App() {
  const routes = createBrowserRouter(ROUTES)
  return (
    <>
      <AdminContextProvider>
        <UserContextProvider>
          <HomeContextProvider>
            <CategoriesContextProvider>
              <RouterProvider router={routes}>

              </RouterProvider>
            </CategoriesContextProvider>
          </HomeContextProvider>
        </UserContextProvider>
      </AdminContextProvider>
    </>
  );
}

export default App;
