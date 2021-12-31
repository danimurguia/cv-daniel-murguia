import React, { useEffect, useState } from 'react'
import logo from '../assets/logoHome.png'
import { NavLink } from "react-router-dom";
import { debounce } from '../helpers/debounce';
import '../styles/navbar.css'




export const Navbar = () => {

  // The next code allows the navbar to hide if user  scroll down the page and re-appear if user scroll up
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  

  const handleScroll = debounce(() => {
 
    const currentScrollPos = window.pageYOffset;
    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 10) || currentScrollPos < 10);

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, [prevScrollPos, visible, handleScroll]);

  
  

  return (
    // First div (nav) allows to hide the navBar (visible) in certain position (px) of the screen according to the past code
    <div> 
      <nav style={{ top: visible ? '0' : '-60px' }} className='navbar navbar-expand-lg navbar-light bg-light '> 
  <div className="container-fluid">
    <img src={logo} alt='Daniel Murguia' className="navbar-brand" />
    <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink  className="nav-link" aria-current="page" to='/'>Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" aria-current="page" to='/acerca'>Acerca de mí</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/portafolio'>Portafolio</NavLink>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

