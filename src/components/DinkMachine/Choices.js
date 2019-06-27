import React from 'react'
import coffee from '../../img/coffee.jpg'
import lemon from '../../img/lemon.jpg'
import chocolate from '../../img/chocolate.jpg'

//Choice: user makes his/her choice of drink

const Choices = (props) => {
  return (
    <div className='container choices'>
        <h3 className='center'>Choose what you want</h3>
        <div className='row'>
            <div className='col s12 l3 center'>
            <img src={chocolate} alt="" class="responsive-img materialboxed"></img>
            <div> <button className='btn center materialize-red lighten-1'id='chocolate' onClick={props.clicked}>Chocolate</button></div>
            </div>
            <div className='col s12 l3 offset-l1 center'>
            <img src={lemon} alt="" class=" responsive-img materialboxed"></img>
            <div> <button className='btn center materialize-red lighten-1 ' id='lemon' onClick={props.clicked}>Lemon Drink</button></div>
            </div>
            <div className='col s12 l3 offset-l1 center'>
            <img src={coffee} alt="" class="responsive-img materialboxed"></img>
            <div> <button className='btn center materialize-red lighten-1'id='tea' onClick={props.clicked}>Tea </button></div>
            </div>
        </div>  
</div>
  )
}

export default Choices
