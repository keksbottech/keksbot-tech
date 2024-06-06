import React from 'react'
import LinksTemplate from '../links/LinksTemplate'
import Image from 'next/image';


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

function Navbar() {
    return (
        <nav className='flex p-5 justify-between'>
            <div>
                <Image src={'@/public/logo/logo.png'} />
            </div>
            <ul className='flex'>
                {NavLinks?.map(links => <LinksTemplate key={links.id} name={links.name} link={links.link} />)}
            </ul>
            <button className='bg-gradient-to-r from-red-400 to-red-600 p-3 rounded-lg'>Partner with us!</button>
        </nav>
    )
}

export default Navbar