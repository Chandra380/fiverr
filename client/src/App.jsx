import React from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import Add from "./pages/add/Add"
import Gig from "./pages/gig/Gig"
import Gigs from './pages/gigs/Gigs'
import Message from './pages/message/Message'
import Messages from './pages/messages/Messages'
import MyGigs from './pages/myGigs/MyGigs'
import Orders from './pages/orders/Orders'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

const App = () => {
  const Layout = ()=>{
    return(
      <div className='app'>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
    )
  }
 
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/gigs',
          element:<Gigs/>
        },
        {
          path:'/gig/:id',
          element:<Gig/>
        },
        {
          path:'/mygigs',
          element:<MyGigs/>
        },
        {
          path:'/orders',
          element:<Orders/>
        },
        {
          path:'/add',
          element:<Add/>
        },
        {
          path:'/messages',
          element:<Messages/>
        },
        {
          path:'/message/:id',
          element:<Message />
        },
      ]
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    }
  ])
  return (
    <div>
        <RouterProvider router={router}/>
    </div>
  )
}

export default App