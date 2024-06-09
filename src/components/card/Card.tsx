import React, { ReactNode } from 'react'

type CardTypes = {
    css: string | null;
    header: ReactNode;
    main: ReactNode;
    footer: ReactNode;
}

function Card({ css = null, header, main, footer }: CardTypes) {
    return (
        <div className={`p-3  flex flex-col justify-center items-center h-[180px] bg-white z-10 rounded-lg shadow-md ${css}`}>
            {header}
            {main}
            {footer}
        </div>
    )
}

export default Card