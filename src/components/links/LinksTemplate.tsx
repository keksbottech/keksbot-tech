import React from 'react'


type LinksTemplateTypes = {
    link: string;
    name: string;
}
function LinksTemplate({ link, name }: LinksTemplateTypes) {

    return (
        <li className='mx-5'><a href={link} className='capitalize' id={name}>{name}</a></li>
    )
}

export default LinksTemplate