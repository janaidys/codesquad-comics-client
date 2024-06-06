import React from 'react';

const Login = ({user, setUser}) => {

const handleLoginSubmit = (event) => {
  event.preventDefault();
  console.log("This method ran...")
  console.log(event.email.value)
  console.log(event.password.value)
  console.log(event.email.value)
}


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