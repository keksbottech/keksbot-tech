import Image from 'next/image'
import React from 'react'

function About() {
    return (
        <section className="flex flex-col justify-center items-center mt-10">
            <div className='max-w-[1200px] block lg:flex flex-row-reverse justify-between'>

                <div className="relative lg:w-1/2 lg:ml-10 ml-0 h-full w-full p-4 lg:p-4">
                    <div className='p-5 text-center rounded-2xl w-[200px]  bg-white shadow-lg absolute z-10 top-[-30px] left-0 '>
                        <p className='text-red-500  text-2xl font-medium '>Expert +65</p>
                    </div>

                    <div className=" max-w-[80%]  h-[400px] relative top-[50px]">
                        <Image objectFit='cover' fill alt="keksbot tech about image(1)" src="/dummy/dummy2.jpeg" className='rounded-2xl' />
                    </div>
                    <div className="absolute w-[70%] h-[380px] lg:right-0 right-[5px] top-[-30px]">
                        <Image objectFit='cover' fill alt="keksbot tech about image(2)" src="/dummy/dummy2.jpeg" className='rounded-2xl' />
                    </div>
                    <div className='p-5 text-center rounded-2xl w-[200px] bg-white shadow-lg z-10 absolute bottom-[0px] right-0 '>
                        <p className='text-red-500  text-2xl font-medium'>+150 Clients</p>
                    </div>

                </div>


                <div className="flex flex-col items-end w-full p-4 lg:p-0 mt-20 lg:mt-0  lg:w-1/2">
                    <h3 className="text-red-500 font-semibold uppercase">About us</h3>
                    <h1 className="text-right text-3xl font-bold uppercase my-4">we are here to help you build your business</h1>
                    <p className="text-right text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro veniam voluptates quisquam, exercitationem non dicta quam inventore laudantium maiores consequuntur culpa expedita architecto alias a sed dolores aliquid laboriosam quas!</p>
                    <div className='flex flex-col w-[100%]'>
                        <div className="mt-5 flex flex-col items-end ">
                            <div className='flex  justify-between w-[90%]'>
                                <p className="">90%</p>
                                <p className="uppercase">skilled employee</p>
                            </div>
                            <div className="w-[100%] h-[5px] bg-[#EEEEEE] flex items-end flex-col-reverse">

                                <div className="w-[90%] bg-red-500 h-[5px] ">

                                </div>
                            </div>
                        </div>

                        <div className="mt-5 flex flex-col items-end">
                            <div className='flex justify-between w-[85%]'>
                                <p className="">85%</p>
                                <p className="uppercase">quality services</p>
                            </div>
                            <div className="w-[100%] h-[5px] bg-[#EEEEEE] flex items-end flex-col ">
                                <div className="w-[85%] bg-red-500 h-[5px]">

                                </div>
                            </div>
                        </div>

                        <div className="mt-5  flex flex-col items-end">
                            <div className='flex justify-between w-[95%]'>
                                <p className="">95%</p>
                                <p className="uppercase font-medium">project completed</p>
                            </div>
                            <div className="w-[100%] h-[5px] bg-[#EEEEEE] flex items-end flex-col ">
                                <div className="w-[95%] bg-red-500 h-[5px]">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center mt-5">

                        <div className='mr-3 flex flex-col items-end'>
                            <h3 className="font-semibold">Onyechere Favour</h3>
                            <p className="text-red-500 text-sm font-semibold">CEO & Founder</p>
                        </div>

                        <div className="w-[60px] h-[60px] relative ">
                            <Image fill src="/profile/profile.jpg" className="rounded-full" alt="onyechere favour ceo of keksbot tech" />
                        </div>
                    </div>
                </div>

            </div>
        </section >
    )
}

export default About