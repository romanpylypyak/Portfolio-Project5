import React from 'react';
import './Header.css';
import smoothScroll from "../../smoothScroll.js";

class Header extends React.Component {
  constructor(props) {
    super();
    this.scrollDown = this.scrollDown.bind(this);
    this.state = {
    classTest : "",
    };

  }
  scrollDown(e) {
    if(e.target.className === "btn btn-circle" || e.target.className === "fas fa-angle-double-down pulse" || e.target.hash === "#service"){
      smoothScroll.scrollTo("service");
    }
    else if(e.target.hash === "#header" || e.target.outerText === "SQUAD FREE"){        
      smoothScroll.scrollTo("header");
    }
    else if(e.target.hash === "#about-us"){        
      smoothScroll.scrollTo("about-us");
    }
    else if(e.target.hash === "#contact"){        
      smoothScroll.scrollTo("contact");
    }
  }
  componentDidMount = () => {
    window.addEventListener('scroll', () => {
      if(window.pageYOffset>0){
        this.setState({ classTest: "top-nav-collapse"})
      } else {
        this.setState({ classTest: ""})
      }
    });
  };

  render(){
  return (
    <div className="header" id="header">
        <div className="head container">
          <div className={this.state.classTest}>
                    <nav className=" navbar navbar-expand-lg bg-000" id="fixed-nav"> 
            <a className="navbar-brand" href="#header" onClick={this.scrollDown}><p>SQUAD FREE</p></a>
            <button className="navbar-toggler navbar-light" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon navbar-light"></span>
            </button>
            <div className="collapse navbar-collapse navbar-light" id="navbarNavDropdown">
            <div className="mr-auto"></div>
                <div className = "sm-screen-nav">
                    <ul className="navbar-nav" id="nav">
                        <li className="nav-item active">
                        <a className="nav-link" href="#header" onClick={this.scrollDown}>Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item ">
                        <a className="nav-link" href="#about-us" onClick={this.scrollDown}>About</a>
                        </li>
                        <li className="nav-item ">
                        <a className="nav-link" href="#service" onClick={this.scrollDown}>Service</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#contact" onClick={this.scrollDown}>Contact</a>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="test" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown link
                        </a>
                
                        <div className="dropdown-menu" id="dropdown" aria-labelledby="navbarDropdownMenuLink">
                          <ul>
                            <li><a className="dropdown-item" href="test">EXAMPLE MENU</a></li>
                            <li><a className="dropdown-item" href="test">EXAMPLE MENU</a></li>
                            <li><a className="dropdown-item" href="test">EXAMPLE MENU</a></li>
                          </ul>
                        </div>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
            </div>
        </div>
        <div className="header-main-text text-center">
                <h1>WELCOME TO SQUAD</h1>
                 <p>WE ARE GROUP OF GENTLEMEN MAKING AWESOME WEB WITH BOOTSTRAP</p>
                <a href="#service" className = "btn btn-circle"  onClick={this.scrollDown}>
                
            <i className="fas fa-angle-double-down pulse"></i></a>
        </div>
       
    </div>
     
    );
  }
}

export default Header;