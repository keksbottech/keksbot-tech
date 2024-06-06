import React, { ReactNode } from 'react'

type ButtonProp = {
    component: ReactNode;
    onClick: () => void;
    css: string
}

function Button({ component, onClick, css }: ButtonProp) {
    return (
        <button className={`${css}`} type='button' onClick={onClick} > {component}</button >
    )
}

export default Button