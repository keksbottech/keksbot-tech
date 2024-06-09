'use client'
import React, { useEffect, useState } from 'react'
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import { Swiper } from 'swiper/react';

function SwiperContainer({ children }: Readonly<{ children: React.ReactNode }>) {
    const [screenLayout, setScreenLayout] = useState(false)
    const [screenWidth, setScreenWidth] = useState(0)


    useEffect(() => {
        const manageScreenResize = (e: any) => {
            const screenX = e.target.outerWidth

            setScreenWidth(screenX)
        }

        window.addEventListener("resize", manageScreenResize)

        return () => window.removeEventListener("resize", manageScreenResize)
    }, [screenWidth])


    return (
        <Swiper
            spaceBetween={60}
            autoplay={true}
            loop={true}
            navigation
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            slidesPerView={screenWidth >= 0 && screenWidth <= 768 ? 1 : screenWidth > 768 && screenWidth <= 1024 ? 2 : 3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {children}
        </Swiper>
    )
}

export default SwiperContainer