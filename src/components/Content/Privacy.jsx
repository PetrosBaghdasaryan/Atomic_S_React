import React from 'react'
import { Switch, Route } from "react-router-dom";
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap';
import Basic from './Basic'

import '../Contact us/Content.css'



const Privacy = () => (
    <header className=''>

<div>
<Link to='/'>
<Button className='primary'>Previous</Button>
</Link>
</div>

        <nav className="home p-1 mr-5">
            <ul className=" home1 mt-2  p-0">
                <li  className='mt-3 mr-3'><Link to='/Basic'><Button outline color='secondary'>BASIC</Button></Link></li>
                <li  className='mt-3 mr-3'><Link to='/Data'><Button outline color='secondary'>DATA</Button></Link></li>
                <li  className='mt-3 mr-3'><Link to='/Analytics'><Button outline color='secondary'>ANALYTICS</Button></Link></li>
            </ul>
        </nav>
    </header>


);


export default Privacy
