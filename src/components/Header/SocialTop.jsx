import React from 'react'
import { Button } from 'reactstrap';


import './SocialTop.css'



const Social = () => (
    <div className="social">
        <nav className="social d-flex p-0 m-0">
            <div className="social d-flex p-0 m-0">
                <ul className="social1 m-0">
                    <li><a href="https://www.facebook.com/Bestnet-284900675448293" target="_blank"  rel="noopener noreferrer"><i className="fab fa-lg fa-facebook"> </i></a></li>
                    <li><a href="https://www.instagram.com/bestnet_/" target="_blank"  rel="noopener noreferrer"><i className="fab fa-instagram"> </i></a></li>
                    <li><a href="https://itunes.apple.com/app/id1423678788?ls=1&mt=8" target="_blank"  rel="noopener noreferrer"><i className="fab fa-app-store-ios"> </i></a></li>
                    <li><a href="https://play.google.com/store" target="_blank"  rel="noopener noreferrer"><i className="fab fa-google-play"> </i></a></li>
                </ul>
            </div>
            <Button id="to-top" type="button">
                <i className="fa fa-chevron-up"> </i>
            </Button>
        </nav>
    </div>



);


export default Social








