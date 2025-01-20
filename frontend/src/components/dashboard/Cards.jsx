import axios from "axios";
import React  from "react";
import { NavLink } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";
import {toast} from "react-toastify"

const Cards = ({ notes,setNotes }) => {
  // console.log(notes);
  const { title, content, subject } = notes;

  const handleDeleteNotes = async (notes) => {
    // console.log(notes);
    const token = localStorage.getItem("access-token");
    if (!token) {
      console.log("there is no token");
      toast.error("User Unauthorized First You SignIn")
    } else {
      const { data } = await axios.delete(
        `http://localhost:3070/delete-notes/${notes._id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(data);
      setNotes((prevNotes) => prevNotes.filter((ele) => ele._id !== notes._id));
      //   navigate("/dashboardNotePage")
    }
  };

  return (
    <div>
      <div className="text-xl">
        <h1>Title : {title}</h1>
        <h1>Content : {content}</h1>
        <h1>Subject : {subject}</h1>
      </div>

      <div className="flex justify-center items-center gap-6 mt-8">
        <button className=" bg-gradient-to-r from-green-400 to-blue-400 flex justify-center items-center rounded-full  h-[30px] w-[30px]">
          <NavLink to="/update-notes" state={notes}>
            <FaPencilAlt className="text-lg"/>
          </NavLink>
        </button>

        
        <button
          onClick={() => {
            handleDeleteNotes(notes);
          }}
          className=" bg-gradient-to-r from-green-400 to-blue-400 flex justify-center items-center rounded-full  h-[30px] w-[30px]">
          <MdDelete className="text-xl"/>
        </button>
      </div>
    </div>
  );
};

export default Cards;
