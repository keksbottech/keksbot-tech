import Link from 'next/link';
import React, { RefObject } from 'react'


type LinksTemplateTypes = {
    link: string;
    name: string;
    css: string;

}
function LinksTemplate({ link, name, css }: LinksTemplateTypes) {

    return (
        <li className={`${css}`}><Link href={link} className='capitalize py-5 text-center' id={name}>{name}</Link></li>
    )
}

export default LinksTemplate