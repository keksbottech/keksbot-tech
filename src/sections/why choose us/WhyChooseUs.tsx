import Image from 'next/image'
import React from 'react'
import serviceQuality from '@/company data/serviceQuality.json'

function WhyChooseUs() {
    return (
        <section className="flex bg-white py-20 flex-col justify-center items-center lg:mt-[100px] mt-[100px]">
            <div className='max-w-[1200px] block lg:flex justify-between'>
                <div className="hidden lg:block relative w-1/2 h-full ">
                    <div className='p-5 text-center rounded-2xl w-[200px]  bg-white shadow-lg absolute z-10 top-[20px] left-0 '>
                        <p className='text-red-500  text-2xl font-medium '>Expert +65</p>
                    </div>
                    <div className=" w-[70%] h-[450px] absolute right-[-10px] top-[0px]">
                        <Image objectFit='cover' fill alt="keksbot tech about image(1)" src="/dummy/dummy2.jpeg" className='rounded-2xl' />
                    </div>
                    <div className="
                    w-[70%] h-[450px] relative top-[130px]
                   ">
                        <Image objectFit='cover' fill alt="keksbot tech about image(2)" src="/dummy/dummy2.jpeg" className='rounded-2xl' />
                    </div>
                    <div className='p-5 text-center rounded-2xl w-[200px] bg-white shadow-lg absolute bottom-[-100px] right-0 '>
                        <p className='text-red-500  text-2xl font-medium'>+150 Clients</p>
                    </div>
                </div>


                <div className="flex flex-col items-end lg:w-1/2 ml-0 lg:m-10 w-full p-4 lg:p-0">
                    <h3 className="text-red-500 font-semibold uppercase">why choose us</h3>
                    <h1 className="text-right text-3xl font-bold uppercase my-4">we offer best professional services to you and your business </h1>
                    <p className="text-right text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro veniam voluptates quisquam, exercitationem non dicta quam inventore laudantium maiores consequuntur culpa expedita architecto alias a sed dolores aliquid laboriosam quas!</p>

                    <div className='flex flex-col w-[100%] items-end'>

                        {serviceQuality?.map(service => (
                            <div key={service.id} className="flex p-5 mt-4 group bg-white  rounded-lg shadow-lg min-h-[130px] items-center    lg:max-w-[100%] sm:max-w-[100%] justify-end md:max-w-[70%]  hover:bg-gradient-to-r from-[#FF7C5D] to-[#FD4C4E]">
                                <div className='mr-4 text-right group-hover:text-white'>
                                    <h1 className="font-medium text-[26px] mb-2">Top Performance</h1>
                                    <p className='font-light text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet at sunt, consequatu
                                    </p>
                                </div>
                                <div className='bg-gradient-to-r from-[#FF7C5D] to-[rgb(253,76,78)] w-[120px] md:w-[90px] h-[60px] md:h-[70px] flex justify-center items-center rounded-xl '>
                                    <i className="fas fa-chart-area   text-white text-xl lg:text-2xl"></i>
                                </div>
                            </div>
                        ))}



                    </div>
                </div>


            </div>
        </section >
    )
}

export default WhyChooseUs