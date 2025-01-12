import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const UpdateNotes = () => {
    const navigate=useNavigate()

    const perticularNotes=useLocation()
    // console.log(perticularNotes.state._id);
    // console.log(perticularNotes.state);
    const perticularNotesId=perticularNotes.state._id
    console.log(perticularNotesId);

    const [notes,setNotes]=useState({
        title:"",
        content:"",
        subject:""
      })

      const {title,content,subject}=notes

      useEffect(()=>{
        setNotes(perticularNotes.state)
      },[perticularNotes.state])

      //!vvi -->  to get previous value of the note we use one more api to get previous value,, this will be put more pressure on the website and slow down the performance to avoid that we use "uselocation" to get previous value
      // const fetchNotes=async()=>{
      //   const token = localStorage.getItem("access-token")
      //   const {data}=await axios.get(`http://localhost:3070/${id}`,{
      //     headers:{
      //       "Authorization":`Bearer ${token}`,
      //       "Content-Type":"application/json"
      //     }
      //   })
      //   console.log(data);
        
      // }

      // useEffect(()=>{
      //   fetchNotes()
      // })

      const handleFormSubmit= async (e)=>{
        e.preventDefault()
        const token = localStorage.getItem("access-token")
       
        try {
          if(!token){
            console.log("there is no token");
            
          }
          else{
            const {data}=await axios.put(`http://localhost:3070/update-notes/${perticularNotesId}`,notes,{
              headers:{
                "Authorization":`Bearer ${token}`,
                "Content-Type":"application/json",
              }
            })
          console.log(data);
            navigate("/dashboardNotePage")
          } 
        } catch (error) {
          console.log({message:"failed to update notes"});
          
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
          hey ! user Now you can Update your Notes
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

export default UpdateNotes
