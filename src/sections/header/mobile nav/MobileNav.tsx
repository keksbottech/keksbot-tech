import Button from '@/components/button/Button'
import LinksTemplate from '@/components/links/LinksTemplate'
import React from 'react'
import { usePathname } from 'next/navigation';
import navlinks from '@/company data/navlinks.json'

type MobileNavType = {
    toggleIsDrawerEnabled: (arg1: boolean) => void;
    isNavbarDrawerActive: boolean;
}
function MobileNav({ toggleIsDrawerEnabled, isNavbarDrawerActive }: MobileNavType) {
    const pathname = usePathname()
    console.log(isNavbarDrawerActive);

    const toggleNavbarDrawerInMobile = () => {

        toggleIsDrawerEnabled(!isNavbarDrawerActive)
    }


    return (
        <div className={`md:flex  ${isNavbarDrawerActive ? "left-[0] h-[100vh]" : "left-[-5000px] "} duration-500 fixed  z-[1000] overflow-hidden  
        left-0
         bg-white md:relative
          top-0 bottom-0 
        w-3/4 
        md:hidden
        p-5
        `}>
            <div className='flex md:hidden items-center justify-between'>
                <h1 className='text-2xl font-bold text-black'>Keksbot Tech</h1>
                <i onClick={toggleNavbarDrawerInMobile} className="fa fa-times text-xl text-black" aria-hidden="true"></i>
            </div>
            <ul className='block md:flex mt-10 '>
                {navlinks?.map(links => {

                    const isActive = links.link === pathname ? true : false

                    const css = `py-4 md:py-2 rounded-md px-3 hover:bg-gradient-to-r from-red-400 to-red-600 
                    my-2
                    hover:text-white   text-sm md:text-center mx-2  w-full md:w-100 ${isActive ? "bg-gradient-to-r from-red-400 to-red-600 text-white " : "bg-transparent text-black "}`

                    return (

                        <LinksTemplate css={css} key={links.id} name={links.name} link={links.link} />)
                })}
            </ul>
            <Button
                onClick={() => null}
                css='block md:hidden p-3 px-4 rounded-lg mt-0 mx-2 bottom-10  text-black hover:bg-gradient-to-r from-red-400 to-red-600 hover:text-white w-full text-left'
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
    )
}

export default MobileNav