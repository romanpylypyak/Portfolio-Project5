import React from 'react';
import './App.css';

import Header from "../components/1.header/Header"
import AboutUs  from "../components/2.about-us/AboutUs"
import OurServices  from "../components/3.our-services/OurServices"
import PreFooter  from "../components/4.get-in-touch/PreFooter"
import Footer from "../components/5.footer/Footer"

class App extends React.Component {
  render(){
  return (
    <div className = "App">
      <Header/>
      <AboutUs/>
      <OurServices/>
      <PreFooter/>
      <Footer/>
    </div>
    );
  }
}

export default App;
