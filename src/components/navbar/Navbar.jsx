import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../images/navimage.png';

const Menu = () => (
    <>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#blender">Blenders</a>
        <a href="#blender">Suppliers</a>
    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu]  = useState(false);
  return (
    <div className='navbar'>
        <div className="navbar_logo">
            <img src={logo} alt="Nirsal" />
        </div>
        <div className="navbar_links">
            <Menu />
        </div>
        <div className="navbar_login">
            <button><Link to="/login" style={{textDecoration:"none", color:"inherit"}}>Login</Link></button>
        </div>
        <div className="navbar_menu">
            {toggleMenu
                ? <RiCloseLine color='#00000' size='27' onClick={() => setToggleMenu(false)} />
                : <RiMenu3Line color='#00000' size='27' onClick={() => setToggleMenu(true)} />
            }
            {toggleMenu && (
                <div className="navbar_menu-container scale-up-center">
                    <div className="navbar_menu-container_links">
                        <Menu />
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default Navbar