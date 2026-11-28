import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Products from './pages/Products'
import Users from './pages/Users'
import Github from './pages/Github'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
    let router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path:'/products',
                    element:<Products/>
                },
                 {
                    path: "/users",
                    element: <Users />,
                },
                {
                    path:'/gitusers',
                    element:<Github/>
                },
                 {
                    path: "/login",
                    element: <Login />,
                },
                {
                    path:'/register',
                    element:<Register/>
                }
            ]
        }
    ])
    return (
        <RouterProvider router={router}>

        </RouterProvider>
    )
}

export default App
