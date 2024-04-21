import React from 'react'
import { NavLink } from "react-router-dom";
import "./Auth.css"
import FormInputText from '../../components/FormInputText/FormInputText'
const Login = () => {
  return (
    <main className='login-form'>
    <form>
      <p className='form-heading'>Login</p>

      <FormInputText
        legend={"Full Name"}
        placeholder={"John Doe"}
        // value={fullName}
      />
       <FormInputText
        legend={"Full Name"}
        placeholder={"John Doe"}
        // value={fullName}
      />

      <div>
      <input type="checkbox" /> Remember me
        <p>Forgot Password?</p>
      </div>
      <NavLink to="/login">
          <button className="removecart_btn">Remove From Cart</button>
        </NavLink>
        <NavLink to="/login">
          <button className="movewishlist_btn">Move to Wishlist</button>
        </NavLink>

    </form>
  </main>
  )
}

export default Login