import React from 'react';
import './Footer.css';
import smoothScroll from "../../smoothScroll.js";

class Footer extends React.Component {
  constructor(props) {
    super();
    this.scrollUp = this.scrollUp.bind(this);
  }
  scrollUp() {
    smoothScroll.scrollTo("header");
  }
  
  render(){
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-intro text-center">
          <div className="footer-btn">
            <a href="#home" className = "btn btn-circle move-top" onClick={this.scrollUp}>
            <i className="fas fa-angle-double-up pulse"></i></a>
          </div>
          <p>©Copyright 2014 - Squad. All rights reserved. Layout made by Roman Pylypyak</p>
        </div>
       </div>
    </div>    
    );
  }
}

export default Footer;