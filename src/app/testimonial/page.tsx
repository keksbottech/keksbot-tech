import BackgroundPageImage from '@/components/background page image/BackgroundPageImage'
import Testimonials from '@/sections/testimonials/Testimonials'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Reviews on Keksbot Tech",
    description: "We are a software company for your apps and websites"
}

function TestimonialPage() {
    return (
        <section>
            <BackgroundPageImage routename='Testimonial' />
            <Testimonials />
        </section>
    )
}

export default TestimonialPage