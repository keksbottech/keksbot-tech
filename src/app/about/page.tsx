import BackgroundPageImage from '@/components/background page image/BackgroundPageImage'
import About from '@/sections/about/About'
import Team from '@/sections/team/Team'
import WhyChooseUs from '@/sections/why choose us/WhyChooseUs'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "About Keksbot Tech - Your idea our priority",
    description: "We are a software company for your apps and websites"
}
function page() {
    return (
        <section>
            <BackgroundPageImage routename='about us' />
            <About />
            <WhyChooseUs />
            <Team />
        </section>
    )
}

export default page