'use client'
import Image from 'next/image'
import React from 'react'
import Button from '../button/Button'
import Card from '../card/Card'

function LandingSection() {
    return (
        <section>
            <div className='block md:flex mt-32 justify-between pr-20'>
                <div className='w-1/2 relative'>
                    <Card css={"absolute left-10"} header={<Image src={'/dummy/dummy.jpeg'} alt='keksbot tech testimonial profile' width={50} height={50} className='rounded-full' />} main={"Keksbot tech is one of the best software companies you can rely on"} footer={<b>Joe Doe</b>} />
                    <Card
                        css={"absolute right-10"}
                        footer={null}
                        header={"Business Growth"}
                        main={<Image src="/svg/chart-2 (1).svg" alt='keksbot tech business growth' width={100} height={10} />}
                    />
                    <Image src={'https://templates.hibootstrap.com/misa/rtl/assets/img/hero/particle-2.png'} height={10} width={60} alt='keksbot tech particle 2' className='absolute bottom-12 animate-spin duration-1000' />


                    <div className='w-full h-[560px] relative bottom-10'>
                        <Image src={"/landing/landing.png"} fill alt='keksbot tech landing image' />
                    </div>
                </div>
                <div className='w-1/2 flex flex-col items-end  '>
                    <h3 className="text-red-500 uppercase text-right font-semibold">Your vision our priority</h3>
                    <h1 className='uppercase text-4xl text-right font-bold my-5'>Software Company for your perfect app and website</h1>
                    <p className='text-right text-gray-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolorum enim ipsam ullam veritatis minima placeat sint at quas eum animi, nisi voluptatum praesentium debitis quam fuga ad quia rerum?</p>
                    <Button css={'bg-gradient-to-r from-red-400 to-red-600 p-4 rounded-lg mt-6 px-10'} onClick={() => null} component={<span>Learn more</span>} />
                    <Image src={"https://templates.hibootstrap.com/misa/rtl/assets/img/hero/particle-1.png"} height={10} width={60} alt='keksbot tech particle 1' className='absolute right-0 top-42 animate-bounce' />
                </div>
            </div>
        </section >
    )
}

export default LandingSection