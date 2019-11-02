import React from 'react';
import './OurServices.css';
import service1 from "./services/service1.png"
import service2 from "./services/service2.png"
import service3 from "./services/service3.png"
import service4 from "./services/service4.png"

class OurServices extends React.Component {
  render(){
  return (
    <div className="our-services" id="service">
      <div className="container">
        <div className="our-services text-center">
          <h1 className=" wow bounceInDown animated">OUR SERVICES</h1>
          <i className="fas fa-angle-down fa-2x  wow bounceInDown animated"></i>
          <hr className="our-services-hr  wow bounceInDown animated"/>
        </div>
        <div className="services">
          <div className="service service-1 text-center  wow bounceInUp animated" data-wow-delay="0.1s">
          <img src={service1} alt="service1"/>
            <h5>Print</h5>
            <p>Vestibulum tincidunt enim in pharetra malesuada. Duis semper magna metus electram accommodare.</p>
          </div>   
          <div className="service service-2 text-center  wow bounceInUp animated" data-wow-delay="0.1s">
          <img src={service2} alt="service2"/>
            <h5>Web Design</h5>
            <p>Vestibulum tincidunt enim in pharetra malesuada. Duis semper magna metus electram accommodare.</p> 
          </div>
          <div className="service service-3 text-center  wow bounceInUp animated" data-wow-delay="0.1s">
          <img src={service3} alt="service3"/>
            <h5>Photography</h5>
            <p>Vestibulum tincidunt enim in pharetra malesuada. Duis semper magna metus electram accommodare.</p>
          </div>
          <div className="service service-4 text-center  wow bounceInUp animated" data-wow-delay="0.1s">
          <img src={service4} alt="service4"/>
            <h5>Cloud System</h5>
            <p>Vestibulum tincidunt enim in pharetra malesuada. Duis semper magna metus electram accommodare.</p>
          </div> 
        </div>  
       </div>
    </div>    
    );
  }
}

export default OurServices;