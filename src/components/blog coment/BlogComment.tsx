'use client'
import React from 'react'
import Button from '../button/Button'
import Image from 'next/image'

function BlogComment() {
    return (
        <div className='flex justify-end p-4 py-7'>
            <div className='flex flex-col justify-center items-end'>
                <header className='flex items-center '>
                    <div className='flex items-center mr-3'>
                        <i className="fa fa-clock-o text-red-500 mr-1" aria-hidden="true"></i>
                        <p className="text-gray-400 text-sm font-light">17 mar, 2024</p>
                    </div>
                    <span>Joe Doe</span>
                </header>

                <main className='font-light mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus vero nemo blanditiis, vitae animi quia deleniti. Ipsum, consequatur. Nulla sequi voluptatum veritatis dicta eos est, deleniti quam at accusantium voluptates!</main>

                <Button onClick={() => null} css='mt-3 border-2 p-1 px-5 rounded-[20px]' component={<span className='font-light text-black text-sm'>Reply</span>} />
            </div>
            <div className='ml-4'>
                <div className='relative w-[100px] h-[100px]'>
                    <Image className='rounded-full' src="/team/team-4.png" alt='profile' fill />
                </div>
            </div>
        </div>
    )
}

export default BlogComment