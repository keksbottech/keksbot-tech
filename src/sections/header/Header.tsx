'use client'
import React, { useEffect, useRef, useState } from 'react'
import LinksTemplate from '../../components/links/LinksTemplate'
import Image from 'next/image';
import MenuIcon from '../../components/menu icon/MenuIcon';
import Button from '../../components/button/Button';
import { usePathname } from 'next/navigation';
import navlinks from '@/company data/navlinks.json'
import MobileNav from './mobile nav/MobileNav';


function Header() {
    const [isLinkActive, setIsLinkActive] = useState(false)
    const pathname = usePathname()
    const [windowScrollY, setWindowScrollY] = useState(0)
    const [isNavbarDrawerActive, setIsNavbarDrawerActive] = useState(false)


    useEffect(() => {
        const getWindowVerticalScrollDigit = (e: any) => {
            setWindowScrollY(e.target.scrollingElement.scrollTop)

            console.log(windowScrollY > 200)
        }

        window.addEventListener("scroll", getWindowVerticalScrollDigit)

        return () => window.removeEventListener("scroll", getWindowVerticalScrollDigit)

    }, [windowScrollY])



    const toggleNavbarDrawerInMobile = () => {
        setIsNavbarDrawerActive(!isNavbarDrawerActive)
    }


    return (
        <nav className={`flex  p-3 justify-between items-center ${windowScrollY > 200 ? "fixed top-0 left-0 right-0 z-30 duration-600 backdrop-blur-16 backdrop-saturate-180 bg-custom-bg  " : 'relative'}`}>
            < MenuIcon onClick={toggleNavbarDrawerInMobile} css={'block md:hidden'} />
            < Image src={'/logo/logo.png'} className='hidden md:block bg-white rounded-full' width={60} height={60} alt="company logo" />


            <MobileNav toggleIsDrawerEnabled={setIsNavbarDrawerActive} isNavbarDrawerActive={isNavbarDrawerActive} />

            <div className=' md:flex hidden z-[1000]bg-white relative lg:bg-transparent shadow-md md:shadow-none p-0'>

                <ul className='block md:flex '>
                    {navlinks?.map(links => {

                        const isActive = links.link === pathname ? true : false

                        const css = `py-4 md:py-2 rounded-md px-3 hover:bg-gradient-to-r from-red-400 to-red-600 hover:text-white   text-sm md:text-center mx-2  w-fit md:w-100 ${isActive ? "bg-gradient-to-r from-red-400 to-red-600 text-white" : "bg-transparent"}`

                        return (

                            <LinksTemplate css={css} key={links.id} name={links.name} link={links.link} />)
                    })}
                </ul>
                <Button
                    onClick={() => null}
                    css='block md:hidden p-3 px-5 rounded-lg mt-0 mx-0 bottom-10  text-black'
                    component={<span>Partner with us</span>} />

                <div className="flex md:hidden absolute bottom-5 ">
                    <div className='bg-gradient-to-r from-red-400 to-red-500 text-white w-10 h-10 rounded-full flex justify-center items-center mr-5'>
                        <i className="fa fa-instagram  text-xl" aria-hidden="true"></i>
                    </div>
                    <div className='bg-gradient-to-r from-red-400 to-red-500 text-white w-10 h-10 rounded-full flex justify-center items-center mr-5'>
                        <i className="fa fa-twitter  text-xl" aria-hidden="true"></i>
                    </div>
                    <div className='bg-gradient-to-r from-red-400 to-red-500 text-white w-10 h-10 rounded-full flex justify-center items-center mr-5'>
                        <i className="fa fa-facebook  text-xl" aria-hidden="true"></i>
                    </div>
                    <div className='bg-gradient-to-r from-red-400 to-red-500 text-white w-10 h-10 rounded-full flex justify-center items-center mr-5'>
                        <i className="fa fa-whatsapp text-xl" aria-hidden="true"></i>
                    </div>
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