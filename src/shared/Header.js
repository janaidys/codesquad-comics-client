import React from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'

const Header = ({user,setUser}) => {
  const navigate = useNavigate();

  const handleLogout = (event) => {
    fetch(`https://codesquad-comics-rzef.onrender.com/logout`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => setUser({}), localStorage.removeItem("user"), navigate("/"))
      .catch((error)=> navigate("/admin"))
  }

    return (
      <div className="Header">
      <header>
      <nav>
            <div className="logo-nav-bar">
            <Link  to="#"><img src="images/CodeSquad-Comics-logo.png" className="codesquad-comics-logo"
        alt="CodeSquad-Comics-logo"/></Link>

            <ul className="nav-bar">
                {/* Clicking this link will take you to the "home" page */}
                <li className= "navigation-list"><Link to="/">HOME </Link></li>
                {/* // Clicking this link will take you to the "about" page */}
                <li className= "navigation-list"><Link to="/about">ABOUT</Link></li>
                {/* // Clicking this link will take you to the "admin" page */}
                <li className= "navigation-list"><Link to="/admin">ADMIN</Link></li>
                <li className= "navigation-list"><Link to="/login">LOGIN</Link></li>
                <li className= "navigation-list"><a href="#" onClick={handleLogout}>LOGOUT</a></li>
            </ul>

            {user.email ? (
        navigate("/admin") && navigate("/logout")
      ) : (
        navigate("/login")
      )}
        </div>

        </nav>
        <i className="fa-solid fa-bars"></i>
      </header>
      </div>
    )
  }

export default Header;