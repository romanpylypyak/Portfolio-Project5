import React from 'react';
import './PreFooter.css';


class PreFooter extends React.Component {
  render(){
  return (
    <div className="get-in-touch" id="contact">
      <div className="container">
        <div className="in-touch text-center wow bounceInDown animated" data-wow-delay="0.1s">
          <h1>GET IN TOUCH</h1>
          <i className="fas fa-angle-down fa-2x"></i>
          <hr className="in-touch-hr"/>
        </div>
        <div className="contacts">
          <div className="form">
              <div className="form-inputs">
                    <p>Name</p>
                    <input type="text"/>
                    <div className="email">
                    <p>Email adress</p>
                    <div className="email-intro">
                    <i className="fas fa-envelope"></i>
                    <input type="email"/>
                   </div>
                    </div>
                    <p>Subject</p>
                <select placeholder="test">
                    <option value="" className="select-placeholder" >Choose One:</option>
                    <option value="tea">Tea</option>
                    <option value="coffee">Coffee</option>
                    <option value="soda">Soda</option>
                </select>
              </div>
              <div className="textarea">
                    <p>Message</p>
                    <textarea/>
                    <button className="send=message">Send Message</button>
              </div>
          </div>   
            <div className="contact">
                <h6>Main Office</h6>
                <p>Squas Design,inc</p>
                <p> Tower 795 Folsom Ave, Beautiful Suite 600</p>
                <p>San Francisco, CA 94107<br/>P: (123) 456-7890</p>  
                <p>Email</p> 
                <a href="mailto:#">email.name@example.com</a>
                <p>We're on social networks</p>
                <ul className="company-social">
                            <li className="social-facebook"><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                            <li className="social-twitter"><a href="https://twitter.com/?lang=uk" target="_blank"  rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
                            <li className="social-dribble"><a href="https://dribbble.com/" target="_blank"  rel="noopener noreferrer"><i className="fab fa-dribbble"></i></a></li>
                            <li className="social-google"><a href="https://aboutme.google.com/u/0/?referer=gplus" target="_blank"  rel="noopener noreferrer"><i className="fab fa-google-plus"></i></a></li>
                </ul>
            </div>
          </div>
       </div>
    </div>    
    );
  }
}

export default PreFooter;