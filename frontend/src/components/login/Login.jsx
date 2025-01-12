import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

  const [user,setUser]=useState({
    email:"",
    password:""
  })

  const {password,email}=user

  const navigate=useNavigate()

  const handleFormSubmit= async (e)=>{
      e.preventDefault()
      const {data} = await axios.post("http://localhost:3070/login",user)
      console.log(data);
      const {message,token,userName}=data
      // console.log(message,token,userName);
      // console.log(userExist.userName);
      const shortName=userName
      

      if(token){
        localStorage.setItem("access-token",token)
        localStorage.setItem("shortName",shortName)
        toast.success(message);
        navigate("/dashboardNotePage")
      }
      else{
        console.log("you have not registered yet and you dont have any token");
        toast.error('login failed');
      }
  }

  

  const handleInputChange=(e)=>{
    const {value,name}=e.target
    setUser({...user,[name]:value})
  }
  return (
    <div className="flex justify-center items-center  h-[80vh] w-screen   ">
      <div className="flex justify-center items-center h-[60vh] w-[60%] shadow-2xl ">
        <div className=" h-[100%] w-[40%]  flex justify-center items-center">
          <div className=" text-blue-600 text-4xl h-60 w-80 flex justify-center items-center">
            hey ! user please Login First
          </div>
        </div>

        <div className=" h-[100%] w-[60%]  flex flex-col justify-center items-center ">
          <form className=" flex-col flex justify-center items-center gap-6 h-[70%] w-[60%]" onSubmit={handleFormSubmit}>
            <h1 className="text-2xl px-8 text-blue-600">Login</h1>

            <input
              className="border-2 h-10 rounded"
              type="email"
              placeholder="email"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
            
            <input
              className="border-2 h-10 rounded"
              type="password"
              placeholder="password"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
             <h5 className='text-blue-800 text-xs'><NavLink to="/register">Do you have an account? Register</NavLink></h5>

            <button className="bg-gradient-to-r from-green-400 to-blue-400 h-10 w-[185px] rounded text-white">
              submit
            </button>
          
            <h5 className="text-blue-800  text-[10px] "><NavLink to="/forgotpassword">forgot password</NavLink></h5>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
