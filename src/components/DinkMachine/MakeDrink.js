import React, { Component } from 'react'
import Choices from './Choices'
import Drinks from './Drinks'

// component is used to manage state of application. A javascript object is used to model state
class MakeDrink extends Component {

  state = {
    lemon: ['Boil some water', 'Steep the water in the tea', 'Pour tea in the cup','Add lemon'],
    chocolate: ['Boil some water', 'Add drinking chocolate powder to the water', 'Pour chocolate in the cup'],
    tea: ['Boil some water', 'Brew the coffee grounds', 'Pour coffee in the cup', 'Add sugar and milk'],
    choice : null
  }

  clickedHandler = (e)=>{
    this.setState({
      ...this.state,
      choice: e.target.id
    })
    console.log(this.state)
  }
  
  navBackHandler = (e)=>{
    this.setState({
      ...this.state,
      choice: null
    })
  }

  render() {
    console.log(this.state)
    const showDrink =this.state.choice ? <Drinks drinksData={this.state} navBack={this.navBackHandler} />:
     <Choices data = {this.state} clicked= {this.clickedHandler}/>
  return(
    <div>
     {showDrink} 
    </div>
  )
     
  }
}

export default MakeDrink
