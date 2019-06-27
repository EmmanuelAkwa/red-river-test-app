import React , {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './components/DinkMachine/Home'
import MakeDrink from './components/DinkMachine/MakeDrink';

class  App extends Component {

  render(){
    return (
      <BrowserRouter>
          <div className="App">
              <Header />
              <Switch>
                  <Route exact path='/' component={Home}/>
                  <Route  path='/home' component={Home}/> 
                  <Route  path='/makeDrink' component={MakeDrink}/>  
              </Switch>
              <Footer />
         </div>
      </BrowserRouter>
      
    );
  }
  
}

export default App;
