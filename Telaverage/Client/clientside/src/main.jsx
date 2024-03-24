import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements ,Route,Navigate} from 'react-router-dom'
import Home from './assets/Components/Home/Home.jsx'
import Login from './assets/Pages/Login/Login.jsx'
import Acess from './assets/Pages/Acess/Acess.jsx'
const user=true

const router=createBrowserRouter(



  createRoutesFromElements(
      <Route path="/"  >
         <Route  path=''  element={<Home />} />
   <Route  path='Login'  element={<Login />} />
   <Route  path ="Acess" element={user?<Acess />:< Navigate to="/" /> } / >
</Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
   <RouterProvider router={router}  />
  </React.StrictMode>,
)
