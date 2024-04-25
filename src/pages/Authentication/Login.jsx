import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import "./Auth.css"
import FormInputText from '../../components/FormInputText/FormInputText'
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import axios from "axios"
import {SET_TOKEN , SET_LOGIN, SET_USER} from "../../Redux/reducers/auth"
import { useDispatch } from 'react-redux';
const Login = () => {
  const [email,setEmail]= useState("")
  const [password,setPassword]= useState("")
  const dispatch = useDispatch()
  const loginHandler = async () => {
    try {
      axios
      .post(
        "/api/auth/login",
        {
          email,
          password,
          
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response)
        dispatch(SET_TOKEN(response.data.encodedToken))
        dispatch(SET_LOGIN(true))
        dispatch(SET_USER(response.data.foundUser))
      });
    } catch (error) {
      
    }
    
  };
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
        value={email}
        onChange={(e)=>{
          setEmail(e.target.value.trim())
        }}
      />
       <FormInputText
        label={"password"}
        placeholder={"*******"}
        type={"password"}
        value={password}
        onChange={(e)=>{
          setPassword(e.target.value.trim())
        }}
      />

      <div className='forgotpwd__div'>
        <label htmlFor="">
        <input type="checkbox" /> Remember me
        </label>
      
        <p>Forgot Password?</p>
      </div>
      <div className='btn'>
        <NavLink to="/login">
          <button className="primary_btn" onClick={()=>{
            loginHandler()
          }}>Login</button>
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