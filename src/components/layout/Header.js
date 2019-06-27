import React from 'react'

const Header =(props)=> {
    return (
        <header >     
        <nav class="nav-wrapper">
          <div class="container">
            <a href="./home" class="brand-logo left ">Red River Drinks</a>
            <a href="./home" data-target="mobile-menu" class="sidenav-trigger lefft "><i class="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <li><a href="./home">Home</a></li>
              <li><a href="./makeDrink">Drinks</a></li>

              <li><a href="" class="tooltipped btn-floating btn-small indigo darken-4" data-tooltip="Twitter">
                <i class="fab fa-twitter"></i>
              </a></li>
              <li><a href="" class="tooltipped btn-floating btn-small indigo darken-4" data-tooltip="facebook">
                  <i class="fab fa-facebook"></i>
                </a></li>
                <li><a href="" class="tooltipped btn-floating btn-small indigo darken-4" data-tooltip="Instagram">
                    <i class="fab fa-instagram"></i>
                  </a></li>
            </ul>
          </div>
        </nav>

        <ul class="sidenav" id="mobile-menu">
          <li><a href="./home">Home</a></li>
          <li><a href="/makeDrink">Drinks</a></li>
        </ul>
        </header>
      );
  }


 
export default Header;
