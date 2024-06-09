import Testimonials from '@/sections/testimonials/Testimonials'
import React from 'react'

export const metadata: Metadata = {
    title: "Reviews on Keksbot Tech",
    description: "We are a software company for your apps and websites"
}

function TestimonialPage() {
    return (
        <section>
            <Testimonials />
        </section>
    )
}

export default TestimonialPage