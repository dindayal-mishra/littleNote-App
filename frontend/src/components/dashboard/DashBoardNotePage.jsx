import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import Cards from './Cards'

const DashBoardNotePage = () => {

    const navigate=useNavigate()

    const [notes,setNotes]=useState(null)

    const getUserNotes=async ()=>{
        const token = localStorage.getItem("access-token")
        // console.log(token);
        
        const {data}=await axios.get("http://localhost:3070/get-notes",{
            headers:{
                "Authorization":`Bearer ${token}`,
                "Content-Type":"application/json",
            }
        })
        // console.log(data.allnotes);
        setNotes(data.allnotes)   
    }
    // console.log(notes);
    
    useEffect(()=>{
        getUserNotes()
    },[])

  

  return (
  <>

      <div className=" h-[75vh] w-[80%] bg-slate-100 shadow-2xl flex flex-wrap justify-center  items-center gap-4 mt-6 ml-36">
      {
       notes?.map((ele,index)=>{
        return(
            
            <div key={index} className=" h-[25vh] w-[20%] bg-green-200 shadow-2xl flex flex-col justify-center items-center  ">
                
             <Cards notes={ele}/>
            </div>
        )
       })
      }

    </div>

    <button className=' text-white text-2xl bg-gradient-to-r from-green-400 to-blue-400 rounded-full  h-[50px] w-[50px] shadow-2xl ml-[1400px] mt-6'><NavLink to="/createNotePage">+</NavLink></button>

  </>
  )
}

export default DashBoardNotePage
