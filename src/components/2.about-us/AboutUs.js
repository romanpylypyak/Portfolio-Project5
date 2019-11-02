import React from 'react';
import './AboutUs.css';
import anna from "./team/anna.jpg"
import maura from "./team/maura.jpg"
import jack from "./team/jack.jpg"
import tom from "./team/tom.jpg"

class AboutUs extends React.Component {
  render(){
  return (
    <div className="about-us" id="about-us" >
      <div className="container">
        <div className="about text-center wow bounceInDown animated" data-wow-delay="0.1s" data-wow-offset="150">
          <h1>ABOUT US</h1>
          <i className="fas fa-angle-down fa-2x"></i>
          <hr className="about-us-hr"/>
        </div>
        <div className="team">
          <div className="member member-anna wow bounceInUp animated" data-wow-delay="0.1s">
            <h5>ANNA HANACECK</h5>
            <p>Pixel Crafter</p>
            <img src={anna} alt="anna"/>
          </div>   
          <div className="member member-maura wow bounceInUp animated" data-wow-delay="0.1s">
            <h5>MAURA DANIELS</h5>
            <p>Ruby on Rails</p>
            <img src={maura} alt="maura"/>
          </div>
          <div className="member member-jack wow bounceInUp animated" data-wow-delay="0.1s">
            <h5>JACK BRIANE</h5>
            <p>jQuery Ninja</p>
            <img src={jack} alt="jack"/>
          </div>
          <div className="member member-tom wow bounceInUp animated" data-wow-delay="0.1s">
            <h5>TOM PETTERSON</h5>
            <p>Typographer</p>
            <img src={tom} alt="tom"/>
          </div> 
        </div>
      </div>
    </div>
    );
  }
}

export default AboutUs;