import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Products from './pages/Products'
import GitUSers from './pages/GitUSers'
import Users from './pages/Users'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
    return (
        <section>
            <BrowserRouter>
            <Navbar/>
                <Routes>
                    <Route element={<HomePage/>} path='/' />
                    <Route element={<Products/>} path='/product' />
                    <Route element={<GitUSers/>} path='/gitusers' />
                    <Route element={<Users/>} path='/users' />
                    <Route element={<Login/>} path='/login' />
                    <Route element={<Register/>} path='/register' />
                </Routes>
            </BrowserRouter>
        </section>
    )
}

export default App
