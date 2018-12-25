import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap';

import logo from '../images/logo.png'
import './Header.css'



const Header = () => (
    <header className=''>
        <nav className="home  p-1 d-flex justify-content-around mr-5">
            <div className="home1 mt-2  p-0 d-flex justify-content-start logo ">
                <Link to='/'>
                <div className='d-flex'>
                     <h2>Best</h2>
                     <img src={logo} alt="image" className='logo1'/>
                     <h2>net</h2>
                 </div>
                </Link>
            </div>
            <ul className=" home1 mt-2  p-0 d-flex justify-content-start">
                <li  className='mr-3'><Link to='/Privacy'><Button outline color='secondary'>Privacy</Button></Link></li>
                <li  className='mr-3'><Link to='/About'><Button outline color='secondary'>ABOUT US</Button></Link></li>
                <li  className='mr-3'><Link to='/ContactUs'><Button outline color='secondary'>CONTACT US</Button></Link></li>
            </ul>
        </nav>
    </header>



);


export default Header
