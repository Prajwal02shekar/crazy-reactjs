import React from 'react'
import Navbar from './Navbar'
import './global.css'
import ProfileCards from './ProfileCards'
import Navbar2 from './Navbar2'
import ProductCards from './ProductCards'

const App = () => {
    return (
        // <div style={{ height: "100px", width: "100%", backgroundColor: "red", display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
        //     <span style={{ height: "50px", backgroundColor: "aqua" }}>App JSX</span>
        //     <span style={{ height: "50px", backgroundColor: "blue" }}>App JSX</span>

        // </div>

        <div>
            <Navbar/>
            <ProfileCards/>
            <Navbar2/>
            <ProductCards/>
        </div>
    )
}

export default App
