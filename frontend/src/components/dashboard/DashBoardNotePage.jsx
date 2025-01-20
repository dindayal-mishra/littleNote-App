import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Cards from './Cards'
import { IoAddCircle } from "react-icons/io5";

const DashBoardNotePage = () => {

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

    <div className=' w-[74rem] ml-40 h-14 flex justify-between items-center'>


        <h1 className='text-purple-800 text-4xl'>Notes</h1>

        <button className=' bg-gradient-to-r from-green-600 to-blue-400 rounded-full '><NavLink to="/createNotePage"><IoAddCircle className='text-5xl text-gray-800'/></NavLink></button>
    
    </div>
       

      <div className=" h-[75vh] w-[80%] bg-slate-100 shadow-2xl flex flex-wrap justify-center  items-center gap-4 mt-2 ml-36">
      {
       notes?.map((ele,index)=>{
        return(
            
            <div key={index} className=" h-[25vh] w-[20%] bg-orange-300 shadow-2xl flex flex-col justify-center items-center rounded-xl ">
               
             <Cards notes={ele} setNotes={setNotes}/>
            </div>
        )
    })
      }

    </div>

    

  </>
  )
}

export default DashBoardNotePage
