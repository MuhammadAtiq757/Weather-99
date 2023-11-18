import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  
  
  RouterProvider,
} from "react-router-dom";
// import { router } from './Routes/Route.jsx';
import AuthProvider from './Providers/AuthProvider';
import { router } from './Rotes/Route';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>

   <div className='max-w-7xl mx-auto bg-slate-300'>
   <RouterProvider router={router} />
    </div>
  
    </AuthProvider>
  </React.StrictMode>,
)
