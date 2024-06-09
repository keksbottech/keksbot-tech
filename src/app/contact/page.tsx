import Form from '@/components/form/Form'
import GeoLocation from '@/components/geo location/GeoLocation'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Contact Keksbot Tech",
    description: "We are a software company for your apps and websites"
}

function ContactPage() {
    return (
        <section className="flex flex-col items-center justify-center bg-white">
            <div className="p-5 block lg:flex items-center w-full ">
                <div className='flex shadow-xl max-w-[1200px] w-full mx-3 justify-end py-10 items-center rounded-2xl bg-white hover:bg-gradient-to-r from-red-400 to-red-500 my-3 lg:my-0 duration-1000 group px-10'>
                    <div className=''>
                        <p className='text-right group-hover:text-white duration-500 text-2xl font-medium'>Phone</p>
                        <span className='group-hover:text-white '>+2348039914037</span>
                    </div>
                    <div className='w-[80px] h-[80px] rounded-full flex justify-center items-center  ml-5 bg-gradient-to-r from-red-400 to-red-500'>
                        <i className="fa fa-phone" aria-hidden="true"></i>
                    </div>
                </div>

                <div className='flex shadow-xl max-w-[1200px] w-full mx-3 justify-end py-10 items-center rounded-2xl bg-white hover:bg-gradient-to-r from-red-400 to-red-500 duration-500 group px-10 my-2 lg:my-0'>
                    <div>
                        <p className='text-right group-hover:text-white duration-500 text-2xl font-medium'>Phone</p>
                        <span className='group-hover:text-white '>+2348039914037</span>
                    </div>
                    <div className='w-[80px] h-[80px] rounded-full flex justify-center items-center  ml-5 bg-gradient-to-r from-red-400 to-red-500'>
                        <i className="fa fa-phone" aria-hidden="true"></i>
                    </div>
                </div>

                <div className='flex shadow-xl max-w-[1200px] w-full mx-3 justify-end py-10 items-center rounded-2xl bg-white hover:bg-gradient-to-r from-red-400 to-red-500 duration-500 group px-10 my-2 lg:my-0'>
                    <div>
                        <p className='text-right group-hover:text-white duration-500 text-2xl font-medium'>Phone</p>
                        <span className='group-hover:text-white '>+2348039914037</span>
                    </div>
                    <div className='w-[80px] h-[80px] rounded-full flex justify-center items-center  ml-5 bg-gradient-to-r from-red-400 to-red-500'>
                        <i className="fa fa-phone" aria-hidden="true"></i>
                    </div>
                </div>
            </div>

            <div className='block lg:flex items-center justify-between w-full p-5'>
                <Form />
                <GeoLocation />
            </div>
        </section>
    )
}

export default ContactPage