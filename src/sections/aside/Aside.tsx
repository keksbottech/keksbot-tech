'use client'
import AsideCard from '@/components/aside card/AsideCard'
import Button from '@/components/button/Button'
import Image from 'next/image'
import React from 'react'

function Aside() {
    return (
        <aside className='w-[30%]'>

            <form action=" relative flex justify-between flex-row">
                <input className="bg-[#eee] mt-5 p-4 outline-red-100 w-[80%] rounded-lg" placeholder="joedoe@gmail.com" />
                <Button css=" p-4 px-5 ml-4 rounded-lg bg-gradient-to-r from-red-300 to-red-600" onClick={() => null} component={<i className="fa fa-search" aria-hidden="true"></i>} />

            </form>


            <div className=''>
                <AsideCard cardTitle='News category' component={
                    <>
                        <div className='flex items-center my-5   lg:cursor-pointer justify-between w-full'>
                            <p>Business</p>
                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                        </div>
                        <div className='flex items-center my-5   lg:cursor-pointer justify-between'>
                            <p>Research</p>
                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                        </div>
                        <div className='flex items-center my-5   lg:cursor-pointer justify-between'>
                            <p>Development</p>
                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                        </div>
                        <div className='flex items-center my-5   lg:cursor-pointer justify-between'>
                            <p>Marketing</p>
                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                        </div>

                        <div className='flex items-center my-5   lg:cursor-pointer justify-between'>
                            <p>Support</p>
                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                        </div>

                    </>
                }

                    wrapLeftStyles="w-full"
                />
                <AsideCard
                    wrapLeftStyles=''
                    cardTitle='Popular posts' component={
                        <div className=''>
                            <div className='flex items-center justify-end'>
                                <div>
                                    <div className='flex justify-end items-center'>
                                        <span className='mr-3 capitalize font-light text-gray-500 text-sm'>june 2024 01</span>
                                        <i className="fa fa-calendar text-sm text-red-500" aria-hidden="true"></i>
                                    </div>

                                    <div className='text-right'>
                                        <p className='font-medium'>How to be rich in forex in 2024</p>
                                    </div>
                                </div>
                                <div className="relative w-[100px] ml-3 h-[100px]">
                                    <Image fill src="/team/team-4.png" className='rounded-sm' alt="post 1" />
                                </div>
                            </div>

                            <div className='flex items-center justify-end my-5'>
                                <div>
                                    <div className='flex justify-end items-center'>
                                        <span className='mr-3 capitalize font-light text-gray-500 text-sm'>june 2024 01</span>
                                        <i className="fa fa-calendar text-sm text-red-500" aria-hidden="true"></i>
                                    </div>

                                    <div className='text-right'>
                                        <p className='font-medium'>How to be rich in forex in 2024</p>
                                    </div>
                                </div>
                                <div className="relative w-[100px] ml-3 h-[100px]">
                                    <Image fill src="/team/team-4.png" className='rounded-sm' alt="post 1" />
                                </div>
                            </div>


                        </div>}

                />
                <AsideCard cardTitle='popular tags'
                    wrapLeftStyles=''
                    component={<div className="flex flex-wrap mt-3 justify-end">
                        <span className="rounded-lg font-[10px]
                        border-[1px] my-1 mr-2
                        bg-[#eee] p-2 px-6 ">forex</span>
                        <span className="rounded-lg font-[10px]
                        border-[1px] my-1 mr-2
                        bg-[#eee] p-2 px-6 mx-3 ">development</span>
                        <span className="rounded-lg font-[10px]
                        border-[1px] my-1 mr-2
                        bg-[#eee] p-2 px-6 ">software</span>
                        <span className="rounded-lg font-[10px]
                        border-[1px] my-1 mr-2
                        bg-[#eee] p-2 px-6 ">content creating</span>
                        <span className="font-[10px]
                        border-[1px] my-1 mr-2
                        bg-[#eee] p-2 px-6 rounded-lg">minerals</span>
                    </div>}

                />
            </div>
        </aside>
    )
}

export default Aside