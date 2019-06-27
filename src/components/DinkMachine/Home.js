import React from 'react'
import machine from '../../img/machine.png'
import {NavLink} from 'react-router-dom'


const Home = () => {
    return(
        <div className='container home'>
            <h3 class='text-darken-4 center'>Welcome to Red River Drink Machine</h3>
            <div className='row'>
                <div className='col s12 l4 offset-l4'>
                <img src={machine} alt="" class="responsive-img materialboxed"/>
                </div>
            </div>

            <div className='row'>
                <div className='col s12 l4 offset-l4 center'>
                    <NavLink to='/makeDrink'>
                    <div> <button className='btn materialize-red center'>Click here to make yourself a Drink</button></div>
                    </NavLink>
                   
                </div>
            </div>

        </div>
    )
}

export default Home
