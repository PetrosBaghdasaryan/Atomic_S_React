import React from "react";

import './App.css';
import Header from "./Header/Header";
import Main from "./Header/Main";
import Social from './Header/SocialTop'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGhost} from '@fortawesome/free-solid-svg-icons'

library.add(faGhost);



const App = () => (
    <div>
        <Header/>
        <Social/>
        <Main/>
    </div>
);

export default App;
