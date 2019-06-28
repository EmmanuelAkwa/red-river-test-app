import React from 'react'
import {Link} from 'react-router-dom'
// print out of choice of drink recipe
const Drinks = (props) => {
    const drinksData = props.drinksData
    switch(drinksData.choice){
        case 'chocolate':
                return(
                    <div className='container drinks'>
                        <div className='row'>
                            <div className='col s12 l6 offset-l3'>
                                 <ul class="collection with-header">
                                    <li class="collection-header"><h4>Chocolate Drink</h4></li>
                                         {drinksData.chocolate.map((choice)=>{
                                         return <li class="collection-item">{choice}</li>
                                         })} 
                                </ul>
                            </div>
                        </div>
                        <div className='row'>
                           <div>
                           <Link to='./makeDrink' onClick={props.navBack} class="btn-floating btn-large red">
                                 <i class="material-icons">navigate_before</i>
                            </Link>
                           </div>
                       </div>
                    </div>
                   
                )
        case 'lemon':
                return(
                    <div className='container drinks'>
                        <div className='row'>
                            <div className='col s12 l6 offset-l3'>
                                <ul class="collection with-header">
                                    <li class="collection-header"><h4>Lemon Drink</h4></li>
                                     {drinksData.lemon.map((choice)=>{
                                     return <li class="collection-item">{choice}</li>
                                    })} 
                                </ul>                             
                           </div>
                       </div>
                       <div className='row'>
                           <div>
                           <Link to='./makeDrink'onClick={props.navBack} class="btn-floating btn-large red">
                                 <i class="material-icons">navigate_before</i>
                            </Link>
                           </div>
                       </div>
                   </div>      
                )
        case 'tea':
                return(
                    <div className='container drinks'>
                        <div className='row'>
                            <div className='col s12 l6 offset-l3'>
                              <ul class="collection with-header">
                                 <li class="collection-header"><h4>Tea</h4></li>
                                 {drinksData.tea.map((choice)=>{
                                 return <li class="collection-item">{choice}</li>
                                 })} 
                              </ul>                         
                           </div>
                       </div>
                       <div className='row'>
                           <div>
                           <Link to='./makeDrink' onClick={props.navBack} class="btn-floating btn-large red">
                                 <i class="material-icons">navigate_before</i>
                            </Link>
                           </div>
                       </div>
                   </div>
                    
                )
        default:
            return
    }
   
      
}

export default Drinks
