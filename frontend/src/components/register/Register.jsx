import React, { useState } from "react";
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email:"",
    password: "",
  });

  const { username, password,email } = user;

  const navigate = useNavigate()

  const handleFormSubmit = async(e) => {
    e.preventDefault();
    const {data} = await axios.post("http://localhost:3070/register",user)
    console.log(data);
    if(data.message=="user registerd successfully"){
      toast.success("user registerd successfully")
    }
    setUser( {username: "",email:"",password: "",})
    navigate("/login")
  };

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  };
  return (
    <div className="flex justify-center items-center  h-[80vh] w-screen">
       <ToastContainer />
      <div className="flex justify-center items-center h-[60vh] w-[60%] shadow-2xl">
        <div className=" h-[100%] w-[40%]  flex justify-center items-center">
          <div className="text-green-600 text-3xl h-60 w-80 flex justify-center items-center">
            Oops.. <br />You are not <br />Registered Yet
          </div>
        </div>

        <div className=" h-[100%] w-[60%]  flex  justify-center items-center ">
          <form className="flex-col flex justify-center items-center gap-6" onSubmit={handleFormSubmit}>
            <h1 className="text-2xl px-8 text-green-600">Sign Up</h1>
           
            <input
              className="border-2 h-10 rounded"
              type="text"
              placeholder="username"
              name="username"
              value={username}
              onChange={handleInputChange}
            />
            
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
            
            
            <button className="bg-gradient-to-r from-green-400 to-blue-400 h-10 w-[185px] rounded text-white">
              submit
            </button>
          </form>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Register;
