import SectionMargin from '@/components/section margin/SectionMargin'
import Image from 'next/image'
import React from 'react'

function Partners() {
    return (
        <section className='p-5 flex flex-col items-center justify-center'>
            <span className='text-center uppercase text-red-500 font-medium text-xl'>Our partners</span>
            <h2 className='font-semibold text-4xl capitalize mt-3 text-center'>Trusted by biggest brands</h2>
            <div className='flex items-center mt-10 w-full'>
                <div className="w-[180px] h-[50px] relative">
                    <Image fill className='' src={"/partners/partner-1.png"} alt='brand' />
                </div>
                <div className="w-[180px] h-[50px] relative mx-10">
                    <Image fill className='' src={"/partners/partner-2.png"} alt='brand' />
                </div>
                <div className="w-[180px] h-[50px] relative">
                    <Image fill className='' src={'/partners/partner-4.png'} alt='brand' />
                </div>
            </div>
        </section>
    )
}

export default Partners