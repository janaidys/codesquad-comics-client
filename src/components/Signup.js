import React from 'react';
import { useNavigate } from "react-router-dom";

const Signup = ({user, setUser}) => {
  const navigate = useNavigate();

const handleSignupSumbit = (event) => {
  event.preventDefault();
  console.log("This method ran...")
  const body = {
    firstName: event.target.firstName.value,
    lastName: event.target.lastName.value,
    email:event.target.email.value,
    password: event.target.password.value
  }

  fetch(`https://codesquad-comics-rzef.onrender.com/api/comics/signup`, {
    method: "POST",
    body: JSON.stringify
  })
    .then((response) => response.json())
    .then((result) => console.log(result), navigate("/admin"))
    .catch((error)=> console.log(error))

  
}
    return (
      <div className="Signup">
        <h1>SIGNUP</h1>

<form className="login-form" action="#" onSubmit={handleSignupSumbit}>
<div>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" name="firstName" id="firstName"placeholder="First Name" required/>
    </div>
    <div>
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" name="lastName" id="lastName"placeholder="Last Name" required/>
    </div>
    <div>
        <label htmlFor="email">Email address:</label>
        <input type="text" name="email" id="email"placeholder="Email" required/>
    </div>

    <div>
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" placeholder="Password"required/>

        <button className="submit-button" type="submit">Submit</button>
    </div>
</form>


      </div>
    )
  }

export default Signup;