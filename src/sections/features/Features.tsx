import React from 'react'

function Features() {
    return (
        <section className="p-5 flex flex-col justify-center items-center mt-20 lg:mt-5">
            <h3 className='text-red-500 text-2xl font-semibold'>OUR FEATURES</h3>
            <h1 className="text-4xl font-semibold mt-4 text-center">Partner with us. Build Something great</h1>

            <section className='block lg:flex items-center bg-white shadow-sm rounded-lg mt-10'>

                <div className='a flex justify-between  border-r-[rgba()] border-r-[.5px] p-10 rounded-s-lg border-b-2 lg:border-b-0'>
                    <div className="flex flex-col items-end mr-5">
                        <h1 className="font-semibold text-xl">Mobile Applications</h1>
                        <p className="text-right text-gray-700 font-light  mt-2 lg:mt-0">Bring your mobile app idea to life. Increase engagement and growth to your business</p>
                    </div>
                    <i className="fa fa-mobile text-red-500 text-3xl"

                        aria-hidden="true"></i>
                </div>

                <div className='a flex justify-between  border-r-[rgba()] border-r-[.5px] p-10 border-b-2 lg:border-b-0'>
                    <div className="flex flex-col items-end mr-5">
                        <h1 className="font-semibold text-xl">Web Development</h1>
                        <p className="text-right text-gray-700 font-light  mt-2 lg:mt-0">Develop cutting edge websites & web apps. {"Let's"} craft your digital presence</p>
                    </div>
                    <i className="fa fa-internet-explorer text-red-500 text-3xl"

                        aria-hidden="true"></i>
                </div>

                <div className='a flex p-10 justify-between '>
                    <div className="flex flex-col items-end mr-5">
                        <h1 className="font-semibold text-xl">UI & UX Design</h1>
                        <p className="text-right text-gray-700 font-light mt-2 lg:mt-0">Seamless user interfaces that are engaging and delightful to your customers</p>
                    </div>
                    <i className="fas fa-users text-red-500 text-3xl "></i>
                </div>
            </section>
        </section>
    )
}

export default Features