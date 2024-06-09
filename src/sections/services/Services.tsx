'use client'
import SectionMargin from '@/components/section margin/SectionMargin'
import SwiperContainer from '@/components/swiper/SwiperContainer'
import Image from 'next/image'
import React from 'react'
import { SwiperSlide } from 'swiper/react'
import services from '@/company data/services.json'

function Services() {


    return (
        <section className='mt-20 flex justify-center items-end flex-col lg:flex-row'>


            <SectionMargin>
                <div className='text-right font-medium flex lg:flex-row-reverse lg:items-center items-end lg:px-10 px-0 flex-col'>
                    <div className='lg:w-1/2 flex flex-col items-end max-w-[4a00px]'>
                        <p className="text-red-500 uppercase">our services</p>
                        <h1 className="font-semibold text-3xl w-full lg:w-[600px]text-wrap">Take business services from our experienced stuff</h1>
                    </div>
                    <p className='font-light text-gray-500 lg:w-1/2 w-full text-wrap'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At et ab vitae atque molestias beatae aliquid odio minima tenetur fugiat pariatur accusantium, animi perferendis, mollitia, dignissimos ipsa quis! Sunt, natus.</p>
                </div>

                <div className='w-full mt-20'>
                    <SwiperContainer>
                        {services?.map(service => (
                            <SwiperSlide key={service.id} className=' w-[500px] duration-1000 group mx-1 rounded-lg p-7 '>
                                <div className='relative w-[100%] h-[300px] rounded-lg shadow-sm'>
                                    <Image fill objectFit="cover" sizes=""
                                        className='rounded-2xl'
                                        alt="keksbot service" src='/dummy/dummy2.jpeg' />
                                </div>
                                <div className='text-right group-hover:bg-gradient-to-r from-[#FF7C5D] to-[#FD4C4E] bg-white p-4 z-10 relative bottom-[80px] rounded-[2rem] pb-5'>
                                    <div className='absolute top-[-30px] w-[65px]  h-[65px] bg-gradient-to-r from-[#FF7C5D] to-[#FD4C4E] rounded-full flex justify-center items-center right-20 group-hover:bg-white'>
                                        <i className="fas fa-mountain text-white group-hover:text-black"></i>
                                    </div>
                                    <h1 className='font-semibold text-xl mt-9 group-hover:text-white'>Web Development</h1>
                                    <p className='text-gray-500 py-3 font-light group-hover:text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat doloremque rem in tenetur eius dolorem laudantium, sit cum quibusdam temporibus voluptas facilis corporis maxime perferendis. Velit magnam debitis eveniet minus?</p>
                                    <a href="" className="text-red-500 group-hover:text-white">Read More</a>
                                </div>
                            </SwiperSlide>
                        ))}

                    </SwiperContainer>
                </div>
            </SectionMargin>
        </section >
    )
}

export default Services