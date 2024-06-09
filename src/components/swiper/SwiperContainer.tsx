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
    const [screenWidth, setScreenWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

    useEffect(() => {
        const manageScreenResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', manageScreenResize);

        // Clean up the event listener on component unmount
        return () => window.removeEventListener('resize', manageScreenResize);
    }, []);


    return (
        <Swiper
            spaceBetween={30}
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