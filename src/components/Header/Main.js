import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Content/Home";
import About from "../About us/About";
import ContactUs from "../Contact us/ContactUs";
import NotFoundPage from "../404";
import Basic from '../Content/Basic';
import Privacy from '../Content/Privacy'



const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Privacy" component={Privacy} />
            <Route path="/About" component={About} />
            <Route path="/ContactUs" component={ContactUs} />

            <Route path="/Basic" component={Basic} />


            <Route path="*" exact={true} component={NotFoundPage} />
        </Switch>
    </main>
);

export default Main;
