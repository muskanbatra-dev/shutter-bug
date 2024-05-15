import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Auth.css";
import FormInputText from "../../components/FormInputText/FormInputText";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import { toast } from "react-toastify";

const EMAIL_REGEX = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const SignupHandler = async () => {
    try {
      if (password.length === 0 || fullName.length === 0) {
        toast.info("Credentials can't be blank");
        return;
      }

      if (!EMAIL_REGEX.test(email)) {
        toast.info("Please enter a valid email address");
        return;
      }

      if (confirmPassword !== password) {
        toast.info("Passwords Don't Match");
        return;
      }
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
          console.log(response);
          localStorage.setItem("token", response.data.encodedToken);
          toast.success(`Welcome, ${response.data.createdUser.fullName}`);
        });
    } catch (error) {
      toast.error("Something went wrong.");
    }
  };

  return (
    <div>
      <Navigation />
      <main className="login-form">
        <form>
          <p className="form-heading">SignUp</p>
          <FormInputText
            label={"fullName"}
            placeholder={"John"}
            type={"text"}
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value.trim());
            }}
          />

          <FormInputText
            label={"Email"}
            placeholder={"Johndoe@gmail.com"}
            type={"email"}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value.trim());
            }}
          />
          <FormInputText
            label={"password"}
            placeholder={"*******"}
            type={"password"}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value.trim());
            }}
          />
          <FormInputText
            label={"confirmpassword"}
            placeholder={"*******"}
            type={"password"}
            value={confirmPassword}
            onChange={(e) => {
              setconfirmPassword(e.target.value.trim());
            }}
          />
          <div className="check-input">
            <label htmlFor="">
              <input type="checkbox" /> I accept all terms and conditions
            </label>
          </div>
          <div className="btn">
            <NavLink>
              <button
                className="primary_btn"
                onClick={() => {
                  SignupHandler();
                }}
              >
                SignUp
              </button>
            </NavLink>

            <NavLink to="/login" className="create__new__btn">
              <p>Already have an Account? ❯ </p>
            </NavLink>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default SignUp;
