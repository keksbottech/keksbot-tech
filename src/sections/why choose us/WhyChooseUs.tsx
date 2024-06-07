import Image from 'next/image'
import React from 'react'

function WhyChooseUs() {
    return (
        <section className="flex flex-col justify-center items-center mt-[250px]">
            <div className='max-w-[1200px] flex justify-between'>
                <div className="relative w-1/2 h-full">
                    <div className='p-5 text-center rounded-2xl w-[200px]  bg-white shadow-lg absolute z-10 top-[-30px] left-0 '>
                        <p className='text-red-500  text-2xl font-medium '>Expert +65</p>
                    </div>
                    <div className=" w-[60%] h-[500px] absolute right-[-10px] top-[-30px]">
                        <Image fill alt="keksbot tech about image(1)" src="/dummy/dummy2.jpeg" className='rounded-2xl' />
                    </div>
                    <div className="
                    w-[70%] h-[550px] relative top-[60px]
                   ">
                        <Image fill alt="keksbot tech about image(2)" src="/dummy/dummy2.jpeg" className='rounded-2xl' />
                    </div>
                    <div className='p-5 text-center rounded-2xl w-[200px] bg-white shadow-lg absolute bottom-[-30px] right-0 '>
                        <p className='text-red-500  text-2xl font-medium'>+150 Clients</p>
                    </div>
                </div>


                <div className="flex flex-col items-end w-1/2 ml-10">
                    <h3 className="text-red-500 font-semibold uppercase">why choose us</h3>
                    <h1 className="text-right text-3xl font-bold uppercase my-4">we offer best professional services to you and your business </h1>
                    <p className="text-right text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro veniam voluptates quisquam, exercitationem non dicta quam inventore laudantium maiores consequuntur culpa expedita architecto alias a sed dolores aliquid laboriosam quas!</p>
                    <div className='flex flex-col w-[100%]'>

                        <div className="flex p-5 mt-4 bg-white rounded-lg shadow-md">
                            <div className='mr-4 text-right'>
                                <h1 className="font-semibold text-2xl mb-2">Top Performance</h1>
                                <p className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet at sunt, consequatu
                                </p>
                            </div>
                            <div className='bg-gradient-to-r from-[#FF7C5D] to-[#FD4C4E] w-[120px] flex justify-center items-center rounded-xl '>
                                <i className="fas fa-chart-area   text-white text-3xl"></i>
                            </div>
                        </div>

                        <div className="flex p-5 mt-4 bg-white rounded-lg shadow-md">
                            <div className='text-right mr-4'>
                                <h1 className='font-semibold text-2xl mb-2'>Top Performance</h1>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet at sunt, consequatur
                                </p>
                            </div>
                            <div className='bg-gradient-to-r from-[#FF7C5D] to-[#FD4C4E] w-[120px] flex justify-center items-center rounded-xl '>
                                <i className="fas fa-chart-area  text-white text-3xl  "></i>
                            </div>
                        </div>

                        <div className="flex p-5 mt-4 bg-white rounded-lg shadow-md">
                            <div className='mr-4'>
                                <h1 className="text-right  font-semibold text-2xl mb-2">Top Performance</h1>
                                <p className='text-right'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet at sunt, consequatur
                                </p>
                            </div>
                            <div className='bg-gradient-to-r from-[#FF7C5D] to-[#FD4C4E] w-[120px] flex justify-center items-center rounded-xl '>
                                <i className="fas fa-chart-area text-white text-3xl "></i>
                            </div>
                        </div>


                    </div>
                </div>


            </div>
        </section >
    )
}

export default WhyChooseUs