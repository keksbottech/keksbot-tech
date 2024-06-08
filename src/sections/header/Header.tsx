'use client'
import React, { useEffect, useRef, useState } from 'react'
import LinksTemplate from '../../components/links/LinksTemplate'
import Image from 'next/image';
import MenuIcon from '../../components/menu icon/MenuIcon';
import Button from '../../components/button/Button';
import { usePathname } from 'next/navigation';


const NavLinks: {
    id: number;
    name: string;
    link: string;
}[] = [
        {
            id: 0,
            name: "home",
            link: "/"
        },
        {
            id: 1,
            name: "about us",
            link: "/about-us"
        },
        {
            id: 2,
            name: "services",
            link: "/services"
        },
        {
            id: 3,
            name: "blog",
            link: "/blog"
        },
        {
            id: 4,
            name: "contact us",
            link: "/contact-us"
        },
    ]

function Header() {
    const [isLinkActive, setIsLinkActive] = useState(false)
    const pathname = usePathname()
    /*
    const ref = useRef<HTMLLIElement | null>()

    useEffect(() => {
        console.log(ref);

        getLinkInfo("")
    }, [pathname])

    const getLinkInfo = (link) => {
        if (pathname === link) {
            setIsLinkActive(true)
        }
        else {
            setIsLinkActive(false)
        }
    }
*/
    return (
        <nav className='flex p-3 justify-between items-center'>
            <MenuIcon onClick={() => null} css={'block md:hidden'} />
            <Image src={'/logo/logo.png'} className='hidden md:block bg-white rounded-full' width={60} height={60} alt="company logo" />

            <div className=' md:flex absolute  hidden md:relative left-0 top-0 bottom-0 w-3/4 md:w-fit  bg-transparent shadow-md md:shadow-none p-5'>
                <div className='flex md:hidden items-center justify-between'>
                    <h1 className='text-3xl font-weight:900;'>Keksbot Tech</h1>
                    <i className="fa fa-times text-xl text-red-500" aria-hidden="true"></i>
                </div>
                <ul className='block md:flex'>
                    {NavLinks?.map(links => {
                        return (

                            <LinksTemplate css={"pt-9 pb-1 md:py-1 hover:border-b-red-600 hover:border-b-2  text-sm md:text-center mx-2  w-20 md:w-100"} key={links.id} name={links.name} link={links.link} />)
                    })}
                </ul>
                <Button
                    onClick={() => null}
                    css='block md:hidden bg-gradient-to-r from-red-400 to-red-600 p-3 rounded-lg mt-6 mx-3 bottom-10'
                    component={<span>Partner with us</span>} />

                <div className="flex md:hidden absolute bottom-5 ">
                    <i className="fa fa-instagram mr-5 text-xl" aria-hidden="true"></i>
                    <i className="fa fa-twitter mr-5 text-xl" aria-hidden="true"></i>
                    <i className="fa fa-facebook mr-5 text-xl" aria-hidden="true"></i>
                    <i className="fa fa-whatsapp text-xl" aria-hidden="true"></i>
                </div>

            </div>
            <Button
                onClick={() => null}
                css='bg-gradient-to-r from-red-400 to-red-600 p-3 rounded-lg'
                component={<span>Partner with us</span>} />
        </nav >
    )
}

export default Header 