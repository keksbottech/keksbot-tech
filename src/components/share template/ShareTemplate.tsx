import React from 'react'

function ShareTemplate() {
    return (
        <div className='flex'>
            <div className="shadow-md  flex items-center justify-center bg-white w-[40px] h-[40px] mr-4 rounded-full">
                <i className="fa fa-facebook text-red-500" aria-hidden="true"></i>
            </div>
            <div className='shadow-md  flex items-center justify-center bg-white w-[40px] h-[40px] mr-4 rounded-full'>
                <i className="fa fa-twitter text-red-500" aria-hidden="true"></i>
            </div>
            <div className='shadow-md  flex items-center justify-center bg-white w-[40px] h-[40px] mr-4 rounded-full'>
                <i className="fa fa-instagram text-red-500" aria-hidden="true"></i>
            </div>
        </div>
    )
}

export default ShareTemplate