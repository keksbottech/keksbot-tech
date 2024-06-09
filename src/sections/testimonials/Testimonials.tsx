'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import StarRating from '../../components/star rating/StarRating'
import { SwiperSlide } from 'swiper/react';
import SwiperContainer from '@/components/swiper/SwiperContainer';

function Testimonials() {


    return (
        <section className='p-5 mt-10 flex flex-col items-center justify-center bg-white py-20'>
            <h1 className="md:text-lg text-md text-red-500 uppercase font-semibold">Testimonials</h1>
            <p className="text-2xl md:text-4xl text-center font-semibold capitalize">What people say about us</p>

            <div className='flex w-full mt-10 max-w-[1100px] justify-center  items-center'>

                <SwiperContainer>
                    <SwiperSlide className='w-[400px] duration-1000 group hover:bg-gradient-to-r from-[#FF7C5D] to-[#FD4C4E]  mx-1 rounded-lg shadow-lg p-4 bg-white'>

                        <div className="flex items-center justify-end">
                            <div className="">
                                <h1 className='text-xl mr-3 group-hover:text-white font-semibold'>Joe Doe</h1>
                            </div>
                            <div className="w-[70px] h-[70px] group-hover:border-white border-red-500 border-4 rounded-full relative">
                                <Image className='rounded-full' fill src={"/dummy/dummy2.jpeg"} alt="keksbot tech reviews by " />
                            </div>
                        </div>
                        <p className='text-wrap text-black-600 font-light text-right group-hover:text-white'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur commodi iste soluta modi perspiciatis quasi, minus dicta distinctio deserunt consectetur, rem dolor quidem veniam sint sunt minima? Hic, natus numquam.
                        </p>
                        <div className="flex justify-between items-center mt-5">
                            <i className="fa fa-quote-right text-3xl text-gray-500 group-hover:text-white" aria-hidden="true"></i>
                            <StarRating />
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className='w-[400px] duration-1000 group hover:bg-gradient-to-r from-[#FF7C5D] to-[#FD4C4E]  mx-1 rounded-lg shadow-lg p-7'>

                        <div className="flex items-center justify-end">
                            <div className="">
                                <h1 className='text-xl mr-3 group-hover:text-white font-semibold'>Joe Doe</h1>
                            </div>
                            <div className="w-[70px] h-[70px] group-hover:border-white border-red-500 border-4 rounded-full relative">
                                <Image className='rounded-full' fill src={"/dummy/dummy2.jpeg"} alt="keksbot tech reviews by " />
                            </div>
                        </div>
                        <p className='text-wrap text-black-600 font-light text-right group-hover:text-white'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur commodi iste soluta modi perspiciatis quasi, minus dicta distinctio deserunt consectetur, rem dolor quidem veniam sint sunt minima? Hic, natus numquam.
                        </p>
                        <div className="flex justify-between items-center mt-5">
                            <i className="fa fa-quote-right text-3xl text-gray-500 group-hover:text-white" aria-hidden="true"></i>
                            <StarRating />
                        </div>

                    </SwiperSlide>

                    <SwiperSlide className='w-[400px] duration-1000 group hover:bg-gradient-to-r from-[#FF7C5D] to-[#FD4C4E]  mx-1 rounded-lg shadow-lg p-7'>

                        <div className="flex items-center justify-end">
                            <div className="">
                                <h1 className='text-xl mr-3 group-hover:text-white font-semibold'>Joe Doe</h1>
                            </div>
                            <div className="w-[70px] h-[70px] group-hover:border-white border-red-500 border-4 rounded-full relative">
                                <Image className='rounded-full' fill src={"/dummy/dummy2.jpeg"} alt="keksbot tech reviews by " />
                            </div>
                        </div>
                        <p className='text-wrap text-black-600 font-light text-right group-hover:text-white'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur commodi iste soluta modi perspiciatis quasi, minus dicta distinctio deserunt consectetur, rem dolor quidem veniam sint sunt minima? Hic, natus numquam.
                        </p>
                        <div className="flex justify-between items-center mt-5">
                            <i className="fa fa-quote-right text-3xl text-gray-500 group-hover:text-white" aria-hidden="true"></i>
                            <StarRating />
                        </div>

                    </SwiperSlide>

                    <SwiperSlide className='w-[400px] duration-1000 group hover:bg-gradient-to-r from-[#FF7C5D] to-[#FD4C4E]  mx-1 rounded-lg shadow-lg p-7'>

                        <div className="flex items-center justify-end">
                            <div className="">
                                <h1 className='text-xl mr-3 group-hover:text-white font-semibold'>Joe Doe</h1>
                            </div>
                            <div className="w-[70px] h-[70px] group-hover:border-white border-red-500 border-4 rounded-full relative">
                                <Image className='rounded-full' fill src={"/dummy/dummy2.jpeg"} alt="keksbot tech reviews by " />
                            </div>
                        </div>
                        <p className='text-wrap text-black-600 font-light text-right group-hover:text-white'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur commodi iste soluta modi perspiciatis quasi, minus dicta distinctio deserunt consectetur, rem dolor quidem veniam sint sunt minima? Hic, natus numquam.
                        </p>
                        <div className="flex justify-between items-center mt-5">
                            <i className="fa fa-quote-right text-3xl text-gray-500 group-hover:text-white" aria-hidden="true"></i>
                            <StarRating />
                        </div>

                    </SwiperSlide>
                </SwiperContainer>
            </div>
        </section >
    )
}

export default Testimonials