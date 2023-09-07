import AdminLogin from "../pages/Admin/AdminLogin";
import AdminRoot from "../pages/Admin/AdminRoot";
import Dashboard from "../pages/Admin/Dashboard/Dashboard";
import AdminHomeTitle from "../pages/Admin/HomeTitle/AdminHomeTitle";
import EditHomeTitle from "../pages/Admin/HomeTitle/EditHomeTitle";
import Home from "../pages/Main/Home/Home";
import MainRoot from "../pages/Main/MainRoot";
import UserLogin from "../pages/Main/UserLogin";
import UserRegister from "../pages/Main/UserRegister";

export const ROUTES = [
    {
        path:'/',
        element:<MainRoot/>,
        children:[
            {
                path:'/login',
                element:<UserLogin/>
            },
            {
                path:'/register',
                element:<UserRegister/>
            },
            {
                path:'',
                element:<Home/>
            }
        ]
    },

    {
        path:'/admin',
        element:<AdminRoot/>,
        children:[
            {
                path:'login',
                element:<AdminLogin/>
            },
            {
                path:'',
                element:<Dashboard/>
            },
            {
                path:'home-models',
                element:<AdminHomeTitle/>
            },
            {
                path:'home-models/edit/:id',
                element:<EditHomeTitle/>
            }
        ]
    }
]