import React from 'react'

const Animate = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-48 h-48 flex justify-center items-center bg-gray-300
      hover:bg-green-400 transition-colors duration-500">
        <h1 className="text-3xl">transition</h1>
      </div>

      <div className="w-48 h-48 flex justify-center items-center bg-gray-300
       hover:animate-ping">
        <h1 className="text-3xl">Ping</h1>
      </div>

      <div className="w-48 h-48 flex justify-center items-center bg-gray-300
       hover:animate-bounce">
        <h1 className="text-3xl">Bounce</h1>
      </div>

      <div className="w-48 h-48 flex justify-center items-center bg-gray-300
       animate-pulse">
        <h1 className="text-3xl">Pulse</h1>
      </div>

    </div>
  )
}





export default Animate