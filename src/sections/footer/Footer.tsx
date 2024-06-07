import Image from 'next/image'
import React from 'react'
import Button from '../../components/button/Button'

function Footer() {
    return (
        <footer className='bg-[#0E1C1F] mt-20'>
            <section className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center py-32 px-20'>
                <ul className="flex flex-col items-end h-[200px]">

                    <li className='text-white text-[30px] border-b-[3px] border-red-500 w-20 flex flex-col items-end'><h1 className='text-nowrap'>Get in touch</h1></li>
                    <li className='text-white flex items-center my-3'>
                        <div className='mr-3'>
                            <p className="text-right font-light">Location</p>
                            <p className="text-right font-light">Owerri, Imo State, Nigeria</p>
                        </div>
                        <i className="text-red-500 fas fa-location    "></i>
                    </li>
                    <li className='text-white flex items-center my-3'>
                        <div className='mr-3'>
                            <p className="text-right font-light">Email</p>
                            <p className="text-right font-light">keksbottech@gmail.com</p>
                        </div>
                        <i className="text-red-500 fa fa-envelope" aria-hidden="true"></i>
                    </li>
                    <li className='text-white flex items-center my-3'>
                        <div className='mr-3'>
                            <p className="text-right font-light">Phone</p>
                            <p className="text-right font-light">+234 8039914037</p>
                        </div>
                        <i className="text-red-500 fa fa-phone" aria-hidden="true"></i>
                    </li>
                </ul>
                <ul className="flex flex-col items-end h-[200px]">
                    <li className='text-white text-[30px] border-b-[3px] border-red-500 w-20 flex flex-col items-end'><h1 className='text-nowrap'>Quick Links</h1></li>
                    <li className='text-white flex items-center my-3'>

                        <a href="" className='mr-3 font-light' >About us</a>
                        <i className="text-white fa fa-angle-right" aria-hidden="true"></i>

                    </li>
                    <li className='text-white flex items-center my-3'>
                        <a href="" className='mr-3 font-light' >Blog</a>
                        <i className="text-white fa fa-angle-right" aria-hidden="true"></i>
                    </li>
                    <li className='text-white flex items-center my-3'>
                        <a href="" className='mr-3 font-light' >Services</a>
                        <i className="text-white fa fa-angle-right" aria-hidden="true"></i>
                    </li>
                    <li className='text-white flex items-center my-3'>
                        <a href="" className='mr-3 font-light' >Contact us</a>
                        <i className="text-white fa fa-angle-right" aria-hidden="true"></i>
                    </li>
                </ul>

                <ul className="flex flex-col items-end h-[200px]">
                    <li className='text-white text-[30px] border-b-[3px] border-red-500 w-20 flex flex-col items-end'><h1 className='text-nowrap'>Services</h1></li>
                    <li className='text-white flex items-center my-3'>
                        <a href="" className='mr-3 font-light' >Web Development</a>
                        <i className="text-white fa fa-angle-right" aria-hidden="true"></i>
                    </li>
                    <li className='text-white flex items-center my-3'>
                        <a href="" className='mr-3 font-light' >Mobile Development</a>
                        <i className="text-white fa fa-angle-right" aria-hidden="true"></i>
                    </li>
                    <li className='text-white flex items-center my-3'>
                        <a href="" className='mr-3 font-light' >UX & UI Design</a>
                        <i className="text-white fa fa-angle-right" aria-hidden="true"></i>
                    </li>
                    <li className='text-white flex items-center my-3'>
                        <a href="" className='mr-3 font-light' >Marketing</a>
                        <i className="text-white fa fa-angle-right" aria-hidden="true"></i>
                    </li>
                </ul>

                <div className='flex flex-col items-end h-[200px]'>
                    <div className='flex items-center'>
                        <div className='w-[50px] h-[50px] relative mr-4'>
                            <Image src={"/logo/logo.png"} fill alt='keksbot tech logo' />
                        </div>
                        <h1 className='text-white text-2xl'> Keksbot Tech</h1>
                    </div>
                    <h2 className='text-right text-white font-light mb-4 capitalize'>Subscribe our newsletter to get  our latest updated news</h2>
                    <form className='flex relative border-[.5px] rounded-md p-1 border-gray-600'>
                        <input className=' p-4 pl-[3.9rem] rounded-md w-[300px] outline-none bg-transparent ' placeholder='joedoe@gmail.com' />
                        <Button css='bg-red-500 p-4 px-5 rounded-md absolute left-1 ' component={<i className="fa fa-paper-plane-o" aria-hidden="true"></i>} />
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

            <section className='flex items-center justify-center p-5'>
                <h1 className='text-red-500'>Keksbot Tech</h1>
                <p className='text-white ml-2'> All rights reserved By <span className="text-red-500">Keksbot Tech</span> &copy </p>
            </section>
        </footer >
    )
}

export default Footer