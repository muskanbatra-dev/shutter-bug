import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import "./Auth.css"
import FormInputText from '../../components/FormInputText/FormInputText'
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import axios from "axios"
import {SET_TOKEN , SET_LOGIN, SET_USER} from "../../Redux/reducers/auth"
import { useDispatch } from 'react-redux';
import { toast } from "react-toastify";
const EMAIL_REGEX = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

const Login = () => {
  const [email,setEmail]= useState("")
  const [password,setPassword]= useState("")
  
  const dispatch = useDispatch()
  const testLogin = () => {
    try {
      
      axios
      .post(
        "/api/auth/login",
        {  email: "muskanBatr123@gmail.com",
    password: "muskanbatra"},
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
        dispatch(SET_USER({  email: "muskanBatr123@gmail.com",
    password: "muskanbatra"}))
    toast.success(`Welcome,Guest User`);
      });
    } catch (error) {
      console.log(error)
    }
    
  }
  const loginHandler = async () => {
    try {
      if (!EMAIL_REGEX.test(email)) {
        toast.info("Please enter a valid email address");
        return;
      }
      if (password.length === 0) {
        toast.info("Password can't be blank");
        return;
      }
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
      console.log(error)
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
        <NavLink >
          <button className="primary_btn" onClick={()=>{
            loginHandler()
          }}>Login</button>
        </NavLink>
        <NavLink >
          <button  onClick={()=>{
            testLogin()
          }}className="secondary_btn">Guest Login</button>
        </NavLink>
        </div>
        <NavLink to="/sign-up" className="create__new__btn">
        <p>Create New Account ❯</p>
        </NavLink>
       
    </form>
  </main>
  <Footer/>
  </div>
  )
}

export default Login