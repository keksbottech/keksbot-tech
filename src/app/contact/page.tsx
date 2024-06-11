import BackgroundPageImage from '@/components/background page image/BackgroundPageImage'
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
        <section className="flex flex-col  bg-white">
            <BackgroundPageImage routename={"contact us"} />
            <div className='flex flex-col p-5 md:p-10 items-end w-ful justify-end text-right ' >
                <p className="font-semibold text-lg uppercase text-red-500">send us a message</p>
                <span className=' text-3xl font-bold md:text-5xl'>We are here to help you</span>
            </div>
            <div className="flex flex-col lg:flex-row items-center w-full px-5 mt-5">

                <div className='flex shadow-xl max-w-[1200px] w-full mx-3 justify-end py-7 items-center rounded-2xl bg-[#eee] hover:bg-gradient-to-r from-red-400 to-red-500 my-3 lg:my-0 duration-1000 group px-10'>
                    <div className=''>
                        <p className='text-right group-hover:text-white duration-500 text-2xl font-medium'>Phone</p>
                        <span className='group-hover:text-white '>+2348039914037</span>
                    </div>
                    <div className='w-[80px] h-[80px] rounded-full flex justify-center items-center  ml-5 bg-gradient-to-r from-red-300 to-red-600'>
                        <i className="fa fa-phone" aria-hidden="true"></i>
                    </div>
                </div>

                <div className='flex shadow-xl max-w-[1200px] w-full mx-3 justify-end py-7 items-center rounded-2xl bg-[#eee] hover:bg-gradient-to-r from-red-400 to-red-600 duration-500 group px-10 my-2 lg:my-0'>
                    <div>
                        <p className='text-right group-hover:text-white duration-500 text-2xl font-medium'>Email</p>
                        <span className='group-hover:text-white '>+keksbottech@gmail.com</span>
                    </div>
                    <div className='w-[80px] h-[80px] rounded-full flex justify-center items-center  ml-5 bg-gradient-to-r from-red-300 to-red-600'>
                        <i className="fa fa-phone" aria-hidden="true"></i>
                    </div>
                </div>

                <div className='flex shadow-xl max-w-[1200px] w-full mx-3 justify-end py-7 items-center rounded-2xl bg-[#eee] hover:bg-gradient-to-r from-red-400 to-red-500 duration-500 group px-10 my-2 lg:my-0  '>
                    <div>
                        <p className='text-right group-hover:text-white duration-500 text-2xl font-medium'>Phone</p>
                        <span className='group-hover:text-white '>+2348039914037</span>
                    </div>
                    <div className='w-[80px] h-[80px] rounded-full flex justify-center items-center  ml-5 bg-gradient-to-r from-red-300 to-red-600'>
                        <i className="fa fa-phone" aria-hidden="true"></i>
                    </div>
                </div>
            </div>

            <div className='block lg:flex flex-row-reverse items-center justify-between w-full p-5'>
                {/* <GeoLocation /> */}
                <Form />

            </div>
        </section>
    )
}

export default ContactPage