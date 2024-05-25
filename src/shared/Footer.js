import React from 'react';

const Footer = () => {
    return (
      <div className="Footer">
      <footer>
    
        <h3> VISIT US</h3>
        <p>CodeSquad Comics
        <br/>
        123 Dorchester Avenue 
        <br/>
        Boston, MA 02124</p>
    
    
   
    <h3>LINKS</h3>
    {/* <!--Clicking this link will take you to the "home" page --> */}
    <a href="#">Home </a>
    <br/>
    {/* <!--Clicking this link will take you to the "about" page --> */}
    <a href="#">About</a>
    <br/>
    {/* <!--Clicking this link will take you to the "admin" page --> */}
    <a href="#">Login</a>
    
    
   
        <h3>FOLLOW US</h3>
        <span className="icons">
        {/* <!--Clicking this link will take you to Facebook page --> */}
        <a href="#"> <i className="fa-brands fa-square-facebook"></i></a>
       
        {/* <!--Clicking this link will take you to Twitter page --> */}
        <a href="#"><i className="fa-brands fa-square-twitter"></i></a>
        
        {/* <!--Clicking this link will take you to Instagram page --> */}
        <a href="#"><i className="fa-brands fa-square-instagram"></i></a>
       </span>
        
    
    
    <h3>A PRODUCT OF</h3>
    <a target="_blank" rel="noopener noreferrer" href="http://codesquad.org/"><img src={`./images/CodeSquad-logo.png`}
    alt="codesquad logo" className="codesquad-logo"/></a>
   
    
        </footer>
      </div>
    )
  }

export default Footer;