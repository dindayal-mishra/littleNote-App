import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";

const Cards = ({ notes }) => {
  console.log(notes);
  const { title, content, subject } = notes;


  const handleDeleteNotes = async (notes) => {
    console.log(notes);
    const token = localStorage.getItem("access-token");
    if (!token) {
      console.log("there is no token");
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
      //   navigate("/dashboardNotePage")
    }
  };

  
  return (
    <div>
      <div>
        <h1>Title : {title}</h1>
        <h1>Content : {content}</h1>
        <h1>Subject : {subject}</h1>
      </div>

      <div className="flex justify-center items-center gap-6 mt-8">
        <button className="text-white bg-gradient-to-r from-green-400 to-blue-400 text-sm rounded-xl h-[30px] w-30">
          <NavLink to="/update-notes" state={notes}>
            Update
          </NavLink>
        </button>
        <button
          onClick={() => {
            handleDeleteNotes(notes);
          }}
          className="text-white bg-gradient-to-r from-green-400 to-blue-400 text-sm rounded-xl  h-[30px] w-30">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Cards;
