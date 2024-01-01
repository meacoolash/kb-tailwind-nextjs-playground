import React from 'react'

const Responsive = () => {
    return (
        <>
            <div className="w-80 aspect-video 
        bg-purple-400 2xs:bg-black sm:bg-blue-300 md:bg-green-300 lg:bg-red-300 xl:bg-yellow-300">
           </div>
            

            <div className="grid grid-cols-2 md:grid-cols-6 gap-10 p-5">
                <div className="w-full aspect-video bg-purple-400"></div>
                <div className="w-full aspect-video bg-purple-400"></div>
                <div className="w-full aspect-video bg-purple-400"></div>
                <div className="w-full aspect-video bg-purple-400"></div>
                <div className="w-full aspect-video bg-purple-400"></div>
                <div className="w-full aspect-video bg-purple-400"></div>
            </div>
        </>
    )

}

export default Responsive