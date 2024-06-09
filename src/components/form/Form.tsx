'use client'
import React from 'react'
import Button from '../button/Button'

function Form() {
    return (
        <form className='mr-5 w-full lg:w-1/2 bg-[#F9FAFC] flex flex-col justify-end items-end' >
            <div className='w-full'>
                <div className='block lg:flex items-center'>
                    <div className='w-full m-2'>
                        <input className=' w-full border-none rounded-lg p-5 bg-[#eee]' placeholder='Fullname' type="text" />
                    </div>

                    <div className='w-full m-2'>
                        <input className=' w-full border-none rounded-lg p-5 bg-[#eee]' type="text" placeholder='Email' />
                    </div>
                </div>

                <div className='block lg:flex items-center'>
                    <div className='w-full m-2'>
                        <input className=' w-full border-none rounded-lg p-5 bg-[#eee]' type="text" placeholder='Subject' />
                    </div>


                    <div className='w-full m-2'>
                        <input className=' w-full border-none rounded-lg p-5 bg-[#eee]' type="text" placeholder='Phone Number' />
                    </div>
                </div>
            </div>
            <div className='w-full h-[200px] p-2'>
                <textarea className='w-full border-none bg-[#eee] rounded-lg h-full' placeholder='Type your message'  > </textarea>
            </div>

            <Button onClick={() => null} css="bg-gradient-to-r from-red-400 to-red-500 px-8 mt-4 p-4 mr-2 rounded-lg" component={<span>Send Message</span>} />
        </form >
    )
}

export default Form