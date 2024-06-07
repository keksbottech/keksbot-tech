'use client'
import Image from 'next/image'
import React from 'react'
import Button from '../button/Button'
import Card from '../card/Card'

function LandingSection() {
    return (
        <section>
            <div className='block lg:flex flex-row-reverse lg:mt-0 justify-center items-center pr-0 lg:pr-20 mt-10'>

                <div className='lg:w-1/2 w-full flex flex-col lg:items-end justify-center lg:justify-start items-center'>
                    <h3 className="text-red-500 uppercase text-center lg:text-right font-semibold">Your vision our priority</h3>
                    <h1 className='uppercase text-4xl lg:text-right text-center font-bold my-5'>Software Company for your perfect app and website</h1>
                    <p className='lg:text-right text-center text-gray-500 w-3/4 lg:w-[550px] z-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolorum enim ipsam ullam veritatis minima placeat sint at quas eum animi, nisi voluptatum praesentium debitis quam fuga ad quia rerum?</p>
                    <Button css={'bg-gradient-to-r from-red-400 to-red-600 p-4 rounded-lg mt-6 px-10'} onClick={() => null} component={<span>Learn more</span>} />
                    <Image src={"https://templates.hibootstrap.com/misa/rtl/assets/img/hero/particle-1.png"} height={10} width={60} alt='keksbot tech particle 1' className='absolute right-0 top-42 animate-bounce' />
                </div>


                <div className='lg:w-1/2 w-full flex flex-col items-center  relative mt-20 lg:mt-0'>

                    <Image src={'https://templates.hibootstrap.com/misa/rtl/assets/img/hero/particle-2.png'} height={10} width={60} alt='keksbot tech particle 2' className='absolute bottom-[500px] md:bottom-[150px]left-0 animate-spin duration-1000' />


                    <div className='w-full md:w-3/4 lg:w-full md:h-[550px] lg:h-[600px] h-[400px] relative top-0 lg:top-20'>
                        <Image src={"/landing/landing.png"} fill alt='keksbot tech landing image' />
                    </div>
                    <div className='block md:flex flex-row-reverse justify-between w-full px-2'>
                        <Card
                            css={"relative md:absolute md:right-5 lg:right-[0px] w-full top-0 md:top-[170px] flex-col"}
                            footer={null}
                            header={<p className="font-bold md:font-medium text-lg">Business Growth</p>}
                            main={<Image src="/svg/chart-2 (1).svg" alt='keksbot tech business growth' width={160} height={10} className="mt-5" />}
                        />
                        <Card css={"relative  md:absolute left-0 md:left-5 top-0 md:top-20 top-5 flex-col"} header={<Image src={'/dummy/dummy.jpeg'} alt='keksbot tech testimonial profile' width={50} height={50} className='rounded-full' />} main={<p className='text-center text-[12px] font-light my-3'>Keksbot tech is one of the best software companies you can rely on</p>} footer={<b className="text-sm">Joe Doe</b>} />
                        <Card
                            css={"relative md:absolute md:right-5 lg:right-[-200px] md:w-[240px] md:h-[100px] top-10 md:top-[390px] justify-center items-center flex-row"}
                            footer={null}
                            header={
                                <div className='mr-5 flex flex-col justify-center items-center'>
                                    <h1 className='font-bold text-3xl'>1.3M</h1>
                                    <p className="font-bold md:font-medium text-sm ">Users

                                        Engagement

                                    </p>

                                </div>
                            }
                            main={<Image src="/svg/chart-1 (1).svg" alt='keksbot tech business growth' width={50} height={10} className="mt-5" />}
                        />

                    </div>
                </div>
            </div>
        </section >
    )
}

export default LandingSection