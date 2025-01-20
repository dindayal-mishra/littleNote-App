import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Navbar = () => {

  const naviagte=useNavigate()

  const currentUser=localStorage.getItem("access-token")
  const shortName=localStorage.getItem("shortName")
  // console.log(shortName);

  const FirstCharecterOfUser=shortName?.split(" ").map(word => word.charAt(0).toUpperCase()).join('');
  // console.log(FirstCharecterOfUser);
  
  const handleLogout=()=>{
    // console.log("deleted token successfully");
    localStorage.clear()
    const updatedCurrentUser = localStorage.getItem("access-token");
    if (!updatedCurrentUser) {
      // console.log("not a user");
      toast.success("Logout Successfully")
    }
    naviagte("/login")
  }

  return (
    <div>
      <nav className='bg-green-200 text-purple-800 h-14 w-screen flex justify-between item-center shadow-xl '>
        <div className='w-[30%] h-[100%] py-3 text-xl flex justify-center item-center '>
            <h2><Link to="/">Little-Notes</Link></h2>
        </div>

        {/* <div className='w-[40%] h-[100%] bg-red-400'>
            <input type="text" name="" id="" />
        </div> */}
           
        <div className='w-[30%]  h-[100%]  text-xl flex justify-end item-center gap-2 '>
         <h2 className='text-purple-800 mt-3'>Welcome</h2>
          <div className='w-[40px] h-[40px] rounded-full  text-xl bg-green-300  flex justify-center item-center pt-1 mt-2'>
           {FirstCharecterOfUser}
          </div>
            {
              currentUser? 
              <button className='text-white bg-gradient-to-r from-green-400 to-blue-400 text-sm rounded-xl  h-[30px] w-20 mt-3 mr-32 ' onClick={handleLogout}>Logout</button>
              :<button className='text-white bg-gradient-to-r from-green-400 to-blue-400 text-sm rounded-xl  h-[30px] w-20 mt-3  mr-32'><NavLink to="/login">Login</NavLink></button>
            }
            
        </div>

      </nav>
    </div>
  )
}

export default Navbar
