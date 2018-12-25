import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FullRoster from '../FullRoster'
import Player from '../Player'
import './About.css'

import  team1 from '../images/team-1.jpg'
import  team2 from '../images/team-2.jpg'
import  team3 from '../images/team-3.jpg'
import  team4 from '../images/team-4.jpg'



class AboutUs extends React.Component {

    render (){

        return (


<div>


<div className='team d-flex justify-content-around mt-5'>

    <div className='Petros'>
        <div className='team1'>
      <img src={team1} alt="Petros"  className=''/>
        </div>
        <div className='text-center'>
        <h2>Petros</h2>
        <h3>Developer</h3>
        <p>Armenian</p>
        </div>
    </div>

    <div className='Suren '>
        <div className='team1'>
      <img src={team2} alt="Suren"  className=''/>
        </div>
    <div className='text-center'>
        <h2>Suren</h2>
        <h3>Developer</h3>
        <p>Armenian</p>
    </div>
    </div>


    <div className='Artur '>
        <div className='team1'>
      <img src={team3} alt="Artur" className=''/>
        </div>
        <div className='text-center'>
            <h2>Artur</h2>
            <h3>Developer</h3>
            <p>Armenian</p>
        </div>
    </div>

    <div className='Alex '>
        <div className='team1'>
      <img src={team4} alt="Alex"  className=''/>
        </div>
        <div className='text-center'>
            <h2>Alex</h2>
            <h3>Developer</h3>
            <p>Armenian</p>
        </div>
    </div>

</div>

</div>
        );
    }
}

const About = () => (
    <Switch>
        <Route exact path='/About' component={FullRoster}/>
        <Route path='/About/:number' component={Player}/>
    </Switch>
);

export default AboutUs
