import React from 'react'

const Footer = function(props){

    return(
        <footer class="page-footer grey darken-3" id='contacts'>
            <div class="container">
              <div class="row">
                <div class="col s12 l6">
                  <h5>About Us</h5>
                  <p>We make Tea...........</p>
                </div>
                <div class="col s12 l4 offset-l2">
                  <h5>Connect</h5>
                  <ul>
                      <li><a class="grey-text text-lighten-3" href="#!">Facebook</a></li>
                      <li><a class="grey-text text-lighten-3" href="#!">Twitter</a></li>
                      <li><a class="grey-text text-lighten-3" href="#!">Linkedn</a></li>
                      <li><a class="grey-text text-lighten-3" href="#!">Instagram</a></li>
                    </ul>
                </div>
              </div>
            </div>
            <div class="footer-copyright">
                <div class="container">
                &copy; 2019 Emmanuel A
                <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
                </div>
              </div>
          </footer>
    )
}

export default Footer;
