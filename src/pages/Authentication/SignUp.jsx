import React ,{useState}from "react";
import { NavLink } from "react-router-dom";
import "./Auth.css";
import FormInputText from "../../components/FormInputText/FormInputText";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import axios from 'axios'
import {  toast } from 'react-toastify';
const SignUp = () => {

  const [fullName, setFullName] = useState("") 
  const [email, setEmail] = useState("") 
  const [password, setPassword] = useState("") 
  const [confirmPassword, setconfirmPassword] = useState("") 
 
  const SignupHandler = async () => {
    try {
      axios
      .post(
        "/api/auth/signup",
        {
          email,
          password,
          fullName,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response)
        localStorage.setItem("token", response.data.encodedToken);
        toast.success('🦄 Wow so easy!', {
          position: "bottom-left",
          autoClose: 10,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: "Bounce",
          });
      });
    } catch (error) {
      
    }
    
  };
  
  
  return (
    <div>
      <Navigation />
      <main className="login-form">
        <form>
          <p className="form-heading">SignUp</p>
          <FormInputText
            label={"fulltName"}
            placeholder={"John"}
            type={"text"}
            value={fullName}
            onChange={(e)=>{
              setFullName(e.target.value.trim())
            }}
          />

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
          <FormInputText
            label={"confirmpassword"}
            placeholder={"*******"}
            type={"password"}
            value={confirmPassword}
            onChange={(e)=>{
              setconfirmPassword(e.target.value.trim())
            }}
          />
         <label htmlFor="">
        <input type="checkbox" /> I accept all terms and conditions
        </label>
          <div className="btn">
            <NavLink >
              <button className="primary_btn" onClick={()=>{
                SignupHandler()
              }}>SignUp</button>
            </NavLink>
          </div>
         
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default SignUp;
