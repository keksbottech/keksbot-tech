import React, { ReactNode } from 'react'

type CardTypes = {
    css: string | null;
    header: ReactNode;
    main: ReactNode;
    footer: ReactNode;
}

function Card({ css = null, header, main, footer }: CardTypes) {
    return (
        <div className={`w-[200px] flex flex-col justify-middle items-center h-[200px] bg-white z-10 rounded-lg shadow-md ${css}`}>
            {header}
            {main}
            {footer}
        </div>
    )
}

export default Card