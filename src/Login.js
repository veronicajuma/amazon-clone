import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css';
function Login() {
    return (
        <div className = "login">
           <Link to = "/">
               <img className = "login__logo" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt = ""/>
           </Link>
           <div className ='login__container'>
               <h1>Sign-in</h1>
               <form>
                   <h5>E-mail</h5>
                   <input type = "text"/>
                   <h5>Password</h5>
                   <input type = "password"/><br/>
                   <button className = "login__signinbutton">Sign In</button>
               </form>

               <p>By Signing-in you agree to the AMAZON CLONE conditions of use & sale.Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice </p>
               <button className = "login__signupbutton">Create your Amazon Account</button>
           </div>
        </div>
    )
}

export default Login
