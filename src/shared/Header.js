import React from 'react';

const Header = () => {
    return (
      <div className="Header">
      <header>
      <nav>
            <div className="logo-nav-bar">
            <a  href="#"><img src="images/CodeSquad-Comics-logo.png" className="codesquad-comics-logo"
        alt="CodeSquad-Comics-logo"/></a>

            <ul className="nav-bar">
                {/* Clicking this link will take you to the "home" page */}
                <li className= "navigation-list"><a href="#">HOME </a></li>
                {/* // Clicking this link will take you to the "about" page */}
                <li className= "navigation-list"><a href="#">ABOUT</a></li>
                {/* // Clicking this link will take you to the "admin" page */}
                <li className= "navigation-list"><a href="#">LOGIN</a></li>
            </ul>
        </div>

        </nav>
        <i className="fa-solid fa-bars"></i>
      </header>
      </div>
    )
  }

export default Header;