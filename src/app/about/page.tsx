import About from '@/sections/about/About'
import Team from '@/sections/team/Team'
import WhyChooseUs from '@/sections/why choose us/WhyChooseUs'
import React from 'react'

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