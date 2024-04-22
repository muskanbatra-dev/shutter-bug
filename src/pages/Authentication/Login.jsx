import React from 'react'
import { NavLink } from "react-router-dom";
import "./Auth.css"
import FormInputText from '../../components/FormInputText/FormInputText'
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
const Login = () => {
  return (
    <div>
      <Navigation/>
    <main className='login-form'>
    <form>
      <p className='form-heading'>Login</p>

      <FormInputText
        label={"Email"}
        placeholder={"Johndoe@gmail.com"}
        type={"email"}
        // value={fullName}
      />
       <FormInputText
        label={"password"}
        placeholder={"*******"}
        type={"password"}
        // value={fullName}
      />

      <div className='forgotpwd__div'>
        <label htmlFor="">
        <input type="checkbox" /> Remember me
        </label>
      
        <p>Forgot Password?</p>
      </div>
      <div className='btn'>
        <NavLink to="/login">
          <button className="primary_btn">Login</button>
        </NavLink>
        <NavLink to="/login">
          <button className="secondary_btn">Guest Login</button>
        </NavLink>
        </div>
        <NavLink to="/sign-up">
        <p>Create New Account?</p>
        </NavLink>
       
    </form>
  </main>
  <Footer/>
  </div>
  )
}

export default Login