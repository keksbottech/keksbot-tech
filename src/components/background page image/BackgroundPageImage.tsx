'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type BackgroundPageImageTypes = {
    routename: string;
}
function BackgroundPageImage({ routename }: BackgroundPageImageTypes) {
    const pathname = usePathname()

    return (
        <section className='w-full flex flex-col justify-center items-center h-[350px] relative'>
            <Image fill src="/team/team-4.png" sizes='2048w' objectPosition='top' objectFit='cover' alt="bg image" className='brightness-[.3]' />

            <div className='text-white absolute flex flex-col justify-center items-center '>
                <p className='text-3xl font-semibold uppercase'>{routename}</p>
                <p className='capitalize mt-5'><Link href={pathname} className='text-red-500'>{routename} </Link> / <Link href={'/'}>home</Link> </p>
            </div>
        </section>
    )
}

export default BackgroundPageImage