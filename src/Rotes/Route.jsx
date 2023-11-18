
import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";

import Error from "../Pages/Error/Error";
import Weather from "../Pages/Weather/Search";



export const router = createBrowserRouter([
        {
            path: "/",
            element: <Main></Main>,
            errorElement: <Error></Error>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
              
                {
                    path: '/top-coures',
                    element: <Weather></Weather>
                },
              
             
             
             
            

           
            ]
            
        }


    ]);
