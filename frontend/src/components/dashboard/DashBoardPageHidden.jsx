import React from 'react'

const DashBoardPageHidden = () => {
  return (
    <div>
       <div className="flex justify-between items-center h-[60vh] w-[80%] mx-auto bg-gray-600 shadow-md rounded-lg p-8">
      {/* Left Side Text */}
      <div className="w-1/2 pr-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Our Platform</h1>
        <p className="text-lg text-gray-600">
          Explore amazing features and take your experience to the next level. 
          Join us today and be part of an incredible journey.
        </p>
      </div>

      {/* Right Side Image */}
      <div className="w-1/2">
        <img 
          src="https://via.placeholder.com/300" 
          alt="Placeholder" 
          className="rounded-lg shadow-lg w-full"
        />
      </div>
    </div>
    </div>
  )
}

export default DashBoardPageHidden
