import React from "react";
import { FaPencilAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const ColorFullCards = ({color,text,date}) => {
    // console.log(color,text,date);
    
   const navigate = useNavigate()
    const handleClickPen =()=>{
        navigate("/dashboardNotePage")
    }
    
  return (
    
        <div className={`h-48 w-48 rounded-2xl ${color}`}>
            <div className="h-28 w-full pl-2 rounded-2xl text-black flex justify-center items-center">
                {text}
            </div>

           <div className="flex justify-evenly items-center mt-6 ">
            <div className="text-black">
                {date}
            </div>


           <div className="h-10 w-10 bg-gray-900 rounded-full flex justify-center items-center">
                <FaPencilAlt className=" text-white" onClick={handleClickPen}/>
            </div>
           </div>
        </div>
    
  );
};

export default ColorFullCards;
