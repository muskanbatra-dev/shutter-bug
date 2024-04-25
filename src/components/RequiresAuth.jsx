import React from 'react'
import { Navigate, useLocation } from "react-router"
import {  useSelector } from "react-redux"



const RequiresAuth = ({children}) => {
    const location = useLocation()
    const auth = useSelector(state => state.auth)
    const isLoggedIn = auth.isLoggedIn
  return isLoggedIn ? (children) : (<Navigate to={"/login"} state={{from : location}}/>) 
}

export default RequiresAuth