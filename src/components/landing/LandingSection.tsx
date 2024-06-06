import Image from 'next/image'
import React from 'react'

function LandingSection() {
    return (
        <section>
            <div className='block md:flex mt-40 justify-between items-start pr-20'>
                <div className='w-1/2 h-100 relative'>
                    <Image src={"/landing/landing.png"} fill alt='keksbot tech landing image' />
                </div>
                <div className='w-1/2'>
                    <h3 className="text-red-500 uppercase text-right font-semibold">Your vision our priority</h3>
                    <h1 className='uppercase text-3xl text-right font-bold my-5'>Software Company for your perfect app and website</h1>
                    <p className='text-right text-gray-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolorum enim ipsam ullam veritatis minima placeat sint at quas eum animi, nisi voluptatum praesentium debitis quam fuga ad quia rerum?</p>
                </div>
            </div>
        </section>
    )
}

export default LandingSection