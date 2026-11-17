import React from 'react'
import Style from './navbar.module.css'

const Navbar2 = () => {
  return (
    <nav id={Style.navbarContainer}>
         <aside className={Style.logo}>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/060/687/101/small/impressive-victorian-abstract-logo-formed-by-two-intersecting-lines-crisp-edges-minimal-flat-color-with-scalable-design-4k-png.png" alt="" />
        </aside>
        <aside className={Style.menu}>
            <a href="#">Home Page</a>
            <a href="#">Mens</a>
            <a href="#">Womens</a>
            <a href="#">Kids</a>
            <a href="#">Login</a>
            <a href="#">Register</a>


        </aside>
    </nav>
  )
}

export default Navbar2
