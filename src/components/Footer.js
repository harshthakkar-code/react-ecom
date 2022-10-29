import React from 'react';
import css from './css/Nav.css';

const Footer = () => {

  return (
    <div className="bg-light footer">
     <br/>
    <div className="container" >
    <div className="row" style={{ color: "white"}}>
      <div className="col">
      <h3 style={{color:"white"}}>Information</h3>
      <a href="/" style={{color:"white"}}>Contact us</a><br/>
      <a href="/" style={{color:"white"}}>About Us</a><br/>
      
      </div>
      <div className="col">
      <h3 style={{color:"white"}}>Terms & Conditions</h3>
     
      <a href="/" style={{color:"white"}}>Privacy & Terms</a><br/>
      <a href="/" style={{color:"white"}}>Product Return Terms</a><br/>
     
      </div>
      <div className="col">
      <h3 style={{color:"white"}}>Contact</h3>
      
      <a href="/" style={{color:"white"}}>Email : onlinesp@gmail.com</a><br/>
      <a href="/" style={{color:"white"}}>Send Your Feedback</a><br/>
      </div>
    </div>
    <br/>
      <div className="row">
      <div className="col">
      <p className="text-center" style={{color:"white"}}> Copyright &copy; All Right Reserved</p> 
      </div>
      </div>
    </div>
    
    </div>
    
  );
};

export default Footer;