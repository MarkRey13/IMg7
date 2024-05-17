import React from 'react'
import './LoginPage.css';
import { FaUser, FaLock } from "react-icons/fa";


const LoginPage = () => {
  return (
    <div className="container">
        <div className="formBoxLogin">
            <form action="">
                <h1>Login</h1>
                <div className="inputBox">
                    <input type ="text" placeholder='Username' required /> 
                    <FaUser className="icon"/>            
                </div>
                <div className="inputBox">
                    <input type ="password" placeholder='Password' required />
                    <FaLock className="icon2"/>            
                </div>
                <div className="rememberForgot">
                    <label><input type ="checkbox"/> Remember Me</label>
                    <a href="#">Forgot Password?</a>

                </div>
                    <button type="submit">Login</button>
                <div className="registerLink">
                    <p>Don't have an account?
                    <a href="#"> Register</a></p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default LoginPage;