import React, { ReactNode } from 'react'


function SectionMargin({ children }: Readonly<{
    children: React.ReactNode;

}>) {
    return (
        <section className={`flex flex-col items-end p-5 max-w-[1300px]`}> {children}</ section >
    )
}

export default SectionMargin