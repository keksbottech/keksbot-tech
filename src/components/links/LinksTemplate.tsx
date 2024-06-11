'use client'
import Link from 'next/link';
import React, { RefObject } from 'react'


type LinksTemplateTypes = {
    link: string;
    name: string;
    css: string;
    onClick: () => void

}
function LinksTemplate({ link, name, css, onClick }: LinksTemplateTypes) {

    return (
        <li onClick={onClick} className={`${css}`}><Link href={link} className={`w-full inline-block capitalize `} id={name}>{name}</Link></li>
    )
}

export default LinksTemplate