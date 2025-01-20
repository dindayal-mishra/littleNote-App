import axios from 'axios';
import React, { useState} from 'react'
import { toast } from 'react-toastify';

const ForgotPassword = () => {

    const [user, setUser] = useState({
        email:"",
        newPassword:"",
        confirmPassword: "",
      });
    
      const {email,newPassword,confirmPassword } = user;

      
    
      const handleFormSubmit = async(e) => {
        e.preventDefault();
        console.log(user);
        
        const {data} = await axios.put("http://localhost:3070/resetpassword",user)
        console.log(data);
        toast.success("password reset successfully")
        
      };
    
      const handleInputChange = (e) => {
        const { value, name } = e.target;
        setUser({ ...user, [name]: value });
      };
  return (
    <div className="flex justify-center items-center  h-[80vh] w-screen">
      <div className="flex justify-center items-center h-[60vh] w-[60%] shadow-2xl">
        <div className=" h-[100%] w-[40%]  flex justify-center items-center">
          <div className="text-green-600 text-3xl h-60 w-80 flex justify-center items-center">
            Dont Worry<br />
            We are here to help you
          </div>
        </div>

        <div className=" h-[100%] w-[60%]  flex  justify-center items-center ">
          <form className="flex-col flex justify-center items-center gap-6" onSubmit={handleFormSubmit}>
            <h1 className="text-2xl px-8 text-green-600">Sign Up</h1>
           
            
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
              placeholder="New password"
              name="newPassword"
              value={newPassword}
              onChange={handleInputChange}
            />

            
            <input
              className="border-2 h-10 rounded"
              type="password"
              placeholder="Confirm password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleInputChange}
            />
            
            
            <button className="bg-gradient-to-r from-green-400 to-blue-400 h-10 w-[185px] rounded text-white">
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
