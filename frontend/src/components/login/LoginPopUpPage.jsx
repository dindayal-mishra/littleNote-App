import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import axios from "axios";
import { toast } from "react-toastify";

const LoginPopUpPage = ({ setLoginPopUp }) => {

  const navigate = useNavigate()  

  const [userData, setUserData] = useState({ email: "", password: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("access-token");
    setIsLoggedIn(token); //! Check if the user is already logged in
    if (token) {
      setLoginPopUp(false); //! Hide the popup if logged in
    }
  }, [setLoginPopUp]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    const {data} = await axios.post("http://localhost:3070/login",userData)
    // console.log(data);
    const {message,token,userName}=data
    // console.log(message,token,userName);
    

    if(token){
      localStorage.setItem("access-token",token)
      toast.success("Login Successfully");
      navigate("/dashboardNotePage")
    }
    else{
      // console.log("you have not registered yet and you dont have any token");
      toast.error('login failed you are not recognize plese sign in first');
    }
    localStorage.setItem("access-token",token)
    setIsLoggedIn(true);
    setLoginPopUp(false); //! Hide the popup after login
  };

  const handleClosePopUp = () => {
    setLoginPopUp(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="w-full max-w-xs bg-white rounded-lg shadow-lg relative p-6">
        <button
          onClick={handleClosePopUp}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <IoClose className="text-2xl" />
        </button>
        <h2 className="text-2xl font-bold text-gray-800 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={userData.email}
              onChange={handleInputChange}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={userData.password}
              onChange={handleInputChange}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-400 to-blue-400 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <NavLink
              to="/register"
              className="text-blue-500 hover:underline hover:text-blue-600"
            >
              Sign up
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPopUpPage;
