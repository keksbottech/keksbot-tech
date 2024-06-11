'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Button from '../../components/button/Button'
import footerLinks from '@/company data/footerlinks.json'
import Link from 'next/link'

function Footer() {

    return (
        <footer className='bg-[#0E1C1F] mt-20'>
            <section className='grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 md:place-items-center place-items-end py-20 lg:py-32 px-5 md:px-20'>

                <ul className="flex flex-col items-end h-[200px] mb-[6rem] mr-0 lg:mr-10">
                    <li className='text-white text-[30px] border-b-[3px] border-red-500 flex flex-col items-end capitalize mb-4 w-20'>
                        <h1 className="text-nowrap">Get in touch</h1>

                    </li>
                    <li className='text-white flex  my-3 text-right capitalize'>
                        <div className='mr-3'>
                            <p>location</p>
                            <p>owerri, imo state, Nigeria</p>
                        </div>
                        <i className="fa fa-building text-red-500" aria-hidden="true"></i>
                    </li>

                    <li className='text-white flex  my-3 capitalize text-right'>
                        <div className='mr-3'>
                            <p>email</p>
                            <p>keksbottech@gmail.com</p>
                        </div>
                        <i className="fa fa-envelope text-red-500" aria-hidden="true"></i>

                    </li>

                    <li className='text-white flex  my-3 capitalize text-right'>
                        <div className='mr-3'>
                            <p>phone</p>
                            <p >+2348039914037</p>
                        </div>
                        <i className="fa fa-phone text-red-500" aria-hidden="true"></i>
                    </li>
                </ul>

                {footerLinks.map((section, idx) => (
                    <ul key={idx} className="flex flex-col items-end h-[200px] mb-[6rem] mr-0 lg:mr-10">
                        <li className='text-white text-[30px] border-b-[3px] border-red-500 flex flex-col items-end capitalize mb-4 w-20'>
                            <h1 className='text-nowrap'>{section[0].title || section[0].name || section[0]}</h1>
                        </li>

                        {section.slice(1).map((item) => (
                            <li key={item.id} className='text-white flex items-center my-3 capitalize'>
                                <h1 >
                                    <Link
                                        href={item.link || '#'}
                                        className='mr-3 font-light'>
                                        {item.title || item.name || item.subtitle || item.subname}
                                    </Link>
                                </h1>
                                <i className="text-white fa fa-angle-right" aria-hidden="true"></i>
                            </li>
                        ))}
                    </ul>
                ))}

                <div className='flex flex-col items-end h-[200px] mb-[4rem]'>
                    <div className='flex items-center'>
                        <div className='w-[50px] h-[50px] relative mr-4'>
                            <Image src={"/logo/logo.png"} fill alt='keksbot tech logo' />
                        </div>
                        <h1 className='text-white text-2xl'> Keksbot Tech</h1>
                    </div>
                    <h2 className='text-right text-white font-light mb-4 capitalize'>Subscribe our newsletter to get  our latest updated news</h2>
                    <form className='flex relative border-[.5px] rounded-md p-1 border-gray-600'>
                        <input className=' p-4 pl-[3.9rem] rounded-md w-[300px] outline-none bg-transparent ' placeholder='joedoe@gmail.com' />
                        <Button onClick={() => null} css='bg-red-500 p-4 px-5 rounded-md absolute left-1 ' component={<i className="fa fa-paper-plane-o" aria-hidden="true"></i>} />
                    </form>
                    <div className='py-3 flex items-center'>
                        <div className=' rounded-full w-10 h-10 bg-white flex flex-col items-center justify-center mr-3'>
                            <i className=" fa fa-pinterest  bg-white text-red-500" aria-hidden="true"></i>
                        </div>
                        <div className=' rounded-full w-10 h-10 bg-white flex flex-col items-center justify-center mr-3'>
                            <i className="fa fa-instagram bg-white text-red-500" aria-hidden="true"></i>
                        </div>
                        <div className=' rounded-full w-10 h-10 bg-white flex flex-col items-center justify-center mr-3'>
                            <i className=" fa fa-twitter  text-red-500 " aria-hidden="true"></i>
                        </div>
                        <div className=' rounded-full w-10 h-10 bg-white flex flex-col items-center justify-center mr-3'>
                            <i className=" fa fa-facebook text-red-500" aria-hidden="true"></i>
                        </div>
                        <p className='text-white'>Follow us</p>
                    </div>
                </div>
            </section>

            <hr />

            <section className='flex items-center justify-center flex-col md:flex-row p-5'>
                <h1 className='text-red-500'>Keksbot Tech</h1>
                <p className='text-white ml-2'> All rights reserved By <span className="text-red-500">Keksbot Tech</span> &copy </p>
            </section>
        </footer >
    )
}

export default Footer