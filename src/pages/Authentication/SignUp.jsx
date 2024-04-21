import React from 'react'
import { NavLink } from "react-router-dom";
import "./Auth.css"
import FormInputText from '../../components/FormInputText/FormInputText'
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
const SignUp = () => {
  return (
    <div>
      <Navigation/>
    <main className='login-form'>
    <form>
      <p className='form-heading'>SignUp</p>
      <FormInputText
        label={"fullName"}
        placeholder={"John doe"}
        type={"text"}
        // value={fullName}
      />

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
 <FormInputText
        label={"password"}
        placeholder={"*******"}
        type={"password"}
        // value={fullName}
      />
      <div className='forgotpwd__div'>
      <input type="checkbox" /> Remember me
        <p>Forgot Password?</p>
      </div>
      <div className='btn'>
        <NavLink to="/login">
          <button className="primary_btn">SignUp</button>
        </NavLink>
       
        </div>
        <NavLink to="/login">
        <p>Forgot Password?</p>
        </NavLink>
       
    </form>
  </main>
  <Footer/>
  </div>
  )
}

export default SignUp
