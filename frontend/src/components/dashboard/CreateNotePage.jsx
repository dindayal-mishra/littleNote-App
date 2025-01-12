import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateNotePage = () => {
  const navigate=useNavigate()

    const [notes,setNotes]=useState({
        title:"",
        content:"",
        subject:""
      })

      const {title,content,subject}=notes
      
       //! whenever you access direct send the value from frontend to backend you need to use token if there is token then only send or access all these value otherwise it will throw error
      const handleFormSubmit= async (e)=>{
        e.preventDefault()
        console.log(notes);
        const token = localStorage.getItem("access-token")
       
          if(!token){
            console.log("there is no token");
            
          }
          else{
            const {data}=await axios.post("http://localhost:3070/create-notes",notes,{
              headers:{
                "Authorization":`Bearer ${token}`,
                "Content-Type":"application/json",
              }
            })
          console.log(data);
            navigate("/dashboardNotePage")
          } 
    }
  
    const handleInputChange=(e)=>{
      const {value,name}=e.target
      setNotes({...notes,[name]:value})
    }

  return (
    <div className="flex justify-center items-center  h-[80vh] w-screen   ">
    <div className="flex justify-center items-center h-[60vh] w-[60%] shadow-2xl ">
      <div className=" h-[100%] w-[40%]  flex justify-center items-center">
        <div className=" text-blue-600 text-4xl h-60 w-80 flex justify-center items-center">
          hey ! user Create your Notes
        </div>
      </div>

      <div className=" h-[100%] w-[60%]  flex flex-col justify-center items-center ">
        <form className=" flex-col flex justify-center items-center gap-6 h-[70%] w-[60%]" onSubmit={handleFormSubmit}>
          <h1 className="text-2xl px-8 text-blue-600">Create Notes</h1>
          
          <input
            className="border-2 h-10 rounded"
            type="text"
            placeholder="title"
            name="title"
            value={title}
            onChange={handleInputChange}
          />
          
          <input
            className="border-2 h-10 rounded"
            type="text"
            placeholder="content"
            name="content"
            value={content}
            onChange={handleInputChange}
          />
          
          <input
            className="border-2 h-10 rounded"
            type="text"
            placeholder="subject"
            name="subject"
            value={subject}
            onChange={handleInputChange}
          />
          <button className="bg-gradient-to-r from-green-400 to-blue-400 h-10 w-[185px] rounded text-white">
            submit
          </button>
        </form>
      </div>
    </div>
    {/* <ToastContainer /> */}
  </div>
  )
}

export default CreateNotePage
