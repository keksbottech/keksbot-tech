import BackgroundPageImage from '@/components/background page image/BackgroundPageImage'
import PageBlog from '@/sections/page blog/Blog'
import Blog from '@/sections/page blog/Blog'
import { Metadata } from 'next'
import { usePathname } from 'next/navigation'
import React from 'react'

export const metadata: Metadata = {
    title: "Blog of Keksbot Tech",
    description: "We are a software company for your apps and websites"
}

function BlogPage() {

    return (
        <section className='flex flex-col justify-center items-center bg-white w-full'>
            <BackgroundPageImage
                routename='our blog' />

            <PageBlog />
            <div className='flex items-center mt-5'>
                <div className='border-2 border-red-300 rounded-full w-[40px] mx-1 h-[40px] flex justify-center items-center'>
                    <i className="fa fa-angle-left" aria-hidden="true"></i>
                </div>
                <div className='flex items-center'>
                    <div className="border-2 border-red-300 rounded-full w-[40px] mx-1 h-[40px] flex justify-center items-center">1</div>
                    <div className="border-2 border-red-300 rounded-full w-[40px] mx-1 h-[40px] flex justify-center items-center">2</div>
                    <div className="border-2 border-red-300 rounded-full w-[40px] mx-1 h-[40px] flex justify-center items-center">3</div>
                </div>
                <div className='border-2 border-red-300 rounded-full w-[40px] mx-1 h-[40px] flex justify-center items-center'>
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                </div>
            </div>
        </section >
    )
}

export default BlogPage