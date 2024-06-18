import React from 'react';
import { useNavigate } from "react-router-dom"

const Login = ({user, setUser}) => {
  const navigate = useNavigate();

const handleLoginSubmit = (event) => {
  event.preventDefault();
  console.log("This method ran...")
  const body = {
    email:event.target.email.value,
    password: event.target.password.value
  }
}
fetch(`https://codesquad-comics-rzef.onrender.com/api/comics/login/local`, {
      method: "POST",
      body: JSON.stringify
    })
      .then((response) => response.json())
      .then((result) => console.log(result), navigate("/admin"))
      .catch((error)=> console.log(error))


    return (
      <div className="Login">
        <h1>LOGIN</h1>

<form className="login-form" action="#" onSubmit= {handleLoginSubmit}>
    <div>
        <label htmlFor="email">Email address:</label>
        <input type="text" name="email" id="email"placeholder="Email" required/>
    </div>

    <div>
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" placeholder="Password" required/>

        <button className="submit-button" type="submit">Submit</button>
    </div>
</form>


      </div>
    )
  }

export default Login;