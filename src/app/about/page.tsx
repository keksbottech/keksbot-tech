import About from '@/sections/about/About'
import Team from '@/sections/team/Team'
import WhyChooseUs from '@/sections/why choose us/WhyChooseUs'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "About Keksbot Tech",
    description: "We are a software company for your apps and websites"
}
function page() {
    return (
        <section>
            <About />
            <WhyChooseUs />
            <Team />
        </section>
    )
}

export default page