import React, { useEffect, useState } from "react";
import ColorFullCards from "../styleComponets/ColorFullCards";
import LoginPopUpPage from "../login/LoginPopUpPage";



const DashBoard = () => {
  const color = [
    "bg-orange-300",
    "bg-blue-400",
    "bg-green-300",
    "bg-yellow-300",
    "bg-pink-300",
    "bg-red-400",
  ];

  const date = [
    "23/09/2024",
    "10/11/2024",
    "20/12/2024",
    "01/01/2025",
    "14/01/2025",
    "17/01/2025",
  ];

  const text = "my meeting is scheduled on 23/09/2024 in hyderabad";

  const [loginPopUp, setLoginPopUp] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoginPopUp(true);
    }, 3000);
  }, []);

 

  return (
    <div>
      {loginPopUp ? (
        <div>
         <LoginPopUpPage setLoginPopUp={setLoginPopUp}/>
        </div>
      ) : (
        <>
          <div className="flex justify-center items-center  h-[80vh] w-screen">
            <div className=" h-[80vh] w-[80%]  shadow-2xl shadow-gray-600 mt-20">
              <h1 className="text-purple-800 text-4xl px-40">Notes</h1>
              <div className=" mt-8 flex flex-wrap justify-center items-center gap-20 w-2/3 mx-48  ">
                <ColorFullCards color={color[0]} text={text} date={date[0]} />
                <ColorFullCards color={color[1]} text={text} date={date[1]} />
                <ColorFullCards color={color[2]} text={text} date={date[2]} />
                <ColorFullCards color={color[3]} text={text} date={date[3]} />
                <ColorFullCards color={color[4]} text={text} date={date[4]} />
                <ColorFullCards color={color[5]} text={text} date={date[5]} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DashBoard;
