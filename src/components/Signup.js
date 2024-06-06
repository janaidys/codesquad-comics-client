import React from 'react';

const Signup = ({user, setUser}) => {

const handleSignupSumbit = (event) => {
  event.preventDefault();
  console.log("This method ran...")
  console.log(event.firstName.value)
  console.log(event.lastName.value)
  console.log(event.email.value)
  console.log(event.password.value)
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