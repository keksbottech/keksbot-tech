import BlogTemplate from '@/components/blog template/BlogTemplate'
import React from 'react'

function SectionBlog() {
    return (
        <section>
            <div className='text-right font-medium flex lg:flex-row-reverse lg:items-center items-end lg:px-10 px-5 flex-col bg-white pb-5'>
                <div className='lg:w-1/2 flex flex-col items-end max-w-[4a00px]'>
                    <p className="text-red-500 uppercase">our latest blog</p>
                    <h1 className="font-semibold text-3xl w-full lg:w-[600px]text-wrap my-3 capitalize">our latest insights on top all times</h1>
                </div>
                <p className='font-light text-gray-500 lg:w-1/2 w-full text-wrap'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At et ab vitae atque molestias beatae aliquid odio minima tenetur fugiat pariatur accusantium, animi perferendis, mollitia, dignissimos ipsa quis! Sunt, natus.</p>
            </div>

            <div className='flex w-full'>
                <BlogTemplate descriptiveStyle=" rounded-[2rem] bg-white relative bottom-[20px]" />
                <BlogTemplate descriptiveStyle=" rounded-[2rem] bg-white relative bottom-[20px]" />
                <BlogTemplate descriptiveStyle=" rounded-[2rem] bg-white relative bottom-[20px]" />
            </div>
        </section>
    )
}

export default SectionBlog