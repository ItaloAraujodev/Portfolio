import React from 'react'
import { NavLink } from 'react-router-dom';
import './nav.css';

const Nav = () => {
  return (
    <div className='container-fuid mx-0 d-flex justify-content-between py-3 bg-light shadow sticky-top'>
        <div>
            <NavLink to='/' className='nav-link links'> 
                <span className='highlight m-3'>
                    Ítalo Araújo
                </span>
            </NavLink>
        </div>
        <div className='d-flex'>
            <NavLink to='/about' className='nav-link mx-3 links'>Sobre mim</NavLink>
            <NavLink to='/contact' className='nav-link mx-3 links'>Contato</NavLink>
        </div>
    </div>
  )
}

export default Nav