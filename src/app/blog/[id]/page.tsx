'use client'
import BackgroundPageImage from '@/components/background page image/BackgroundPageImage'
import BlogComment from '@/components/blog coment/BlogComment'
import Form from '@/components/form/Form'
import ShareTemplate from '@/components/share template/ShareTemplate'
import Aside from '@/sections/aside/Aside'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React from 'react'

function BlogPage() {
    const params = useParams()




    return (
        <section className='flex items-end'>
            <div className='flex flex-col lg:flex-row justify-center p-5 px-[3rem] bg-white'>
                <div className='w-[70%] flex flex-col justify-end items-end mr-10 text-right'>
                    <p className='font-semibold text-4xl capitalize max-w-[700px]'>how we find out our clients  products marketing problem</p>


                    <div className='flex items-center my-4'>
                        <div>
                            <span className='capitalize text-lg font-medium'>joe doe</span>
                            <div className='flex items-center'>
                                <div className='capitalize font-light'>
                                    <span>comments 4</span>
                                    <i className="ml-3 text-red-500 fa fa-comments" aria-hidden="true"></i>
                                </div>
                                <span className='mx-3'>|</span>

                                <div className='capitalize font-light'>
                                    <span className="">mar, 2024 28</span>
                                    <i className="ml-3 text-red-500 fa fa-clock-o" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                        <div className='w-[40px] h-[40px] relative ml-5
                        '>
                            <Image className='rounded-full' src
                                ="/team/team-4.png" fill alt='image' />
                        </div>

                    </div>
                    <div className=''>
                        <div className='relative w-full h-[400px]'>
                            <Image className='rounded-lg' src
                                ="/team/team-4.png" fill alt='image' />
                        </div>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur at impedit ullam a repudiandae eos et, sit nemo quasi exercitationem eaque. Pariatur debitis at, quibusdam non ipsam provident ea aliquid!
                            Dolor tenetur amet atque culpa, illum vitae illo ratione perferendis doloribus quisquam repudiandae iure fugit sapiente ut ullam tempore expedita cupiditate ipsum rerum repellat, sequi, numquam in. Minima, iure eveniet!
                            Dolore iste veritatis, illo tempore omnis ut aut exercitationem incidunt sit molestiae temporibus aspernatur repellendus maiores, nam debitis eius officiis maxime in quas quos error impedit hic ipsa magnam? Eveniet.</p>
                    </div>
                    <div className='w-full flex justify-between items-center capitalize mt-10'>
                        <div className=''>
                            <span>next post</span>
                            <i className="ml-3  fa fa-angle-right" aria-hidden="true"></i>
                        </div>
                        <div className=''>
                            <i className="mr-3  fa fa-angle-left" aria-hidden="true"></i>
                            <span>prev post</span>

                        </div>
                    </div>

                    <div className='flex justify-between items-center bg-[#F9FAFC] w-full p-5 rounded-md my-10'>
                        <div className='flex items-center'>
                            <ShareTemplate />
                            <span>:Share</span>
                        </div>
                        <div className='capitalize'>
                            <span className='mr-3  font-light capitalize'>music</span>
                            <span className='mr-3  font-light capitalize'>travel</span>
                            <span className='mr-3  font-light capitalize'>sports</span>
                            <i className="ml-3 text-red-500 fa fa-tag" aria-hidden="true"></i>
                        </div>
                    </div>

                    <div className='bg-[#F9FAFC] flex items-center p-4 rounded-lg'>
                        <div className=' flex flex-col justify-end text-right items-end'>
                            <span className='text-xl font-semibold'>Andrews Simons</span>
                            <p className='font-light mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima obcaecati nam aliquid quos quam soluta commodi velit numquam dolor. In vero porro, expedita similique inventore assumenda quibusdam quos laboriosam perferendis!</p>
                            <ShareTemplate />
                        </div>
                        <div className="w-[30%] flex justify-end ">
                            <div className='w-[150px] h-[150px] relative ml-5'>
                                <Image className='rounded-full' src="/team/team-4.png" fill alt='image' />
                            </div>
                        </div>
                    </div>

                    <div className=''>
                        <span className='text-2xl font-semibold px-7 inline-block my-10'>Comments (100)</span>
                        <div className='bg-[#F9FAFC] p-5'>
                            <BlogComment />
                            <hr />
                            <BlogComment />
                            <hr />
                            <BlogComment />
                        </div>
                        <div className='w-full'>
                            <p className='font-semibold text-lg my-5'>Leave a comment</p>
                            <Form buttonText='Post a comment' css='' />
                            <div className='flex items-center'>
                                <p className='mr-3'>
                                    <span>I agree to your </span>
                                    <span className='text-red-500'>terms & conditions</span>
                                </p>
                                <input title='terms' placeholder='' type="radio" />
                            </div>
                        </div>
                    </div>
                </div>
                <Aside />

            </div >
        </section >
    )
}

export default BlogPage