import BackgroundPageImage from '@/components/background page image/BackgroundPageImage'
import Services from '@/sections/services/Services'
import { Metadata } from 'next'
import React from 'react'


export const metadata: Metadata = {
    title: "Services offered by Keksbot Tech",
    description: "We are a software company for your apps and websites"
}

function ServicesPage() {
    return (
        <section>
            <BackgroundPageImage routename='services' />
            <Services />
        </section>
    )
}

export default ServicesPage