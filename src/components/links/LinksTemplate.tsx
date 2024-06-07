import React, { RefObject } from 'react'


type LinksTemplateTypes = {
    link: string;
    name: string;
    css: string;

}
function LinksTemplate({ link, name, css, reff }: LinksTemplateTypes) {

    return (
        <li ref={reff} className={`${css}`}><a href={link} className='capitalize py-5 text-center' id={name}>{name}</a></li>
    )
}

export default LinksTemplate