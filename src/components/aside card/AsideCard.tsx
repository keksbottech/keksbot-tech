import React, { ReactNode } from 'react'

type AsideCardType = {
    component: ReactNode;
    cardTitle: string;
    wrapLeftStyles: string;

}
function AsideCard({ component, cardTitle, wrapLeftStyles }: AsideCardType) {
    return (
        <div className='rounded-lg shadow-lg border-t-2 my-5
        flex flex-col justify-end
        p-5  border-t-red-500 bg-white'>
            <div className='font-semibold text-lg text-right capitalize  border-b-2 border-b-red-500  flex flex-col justify-end w-[45px] pb-2'>
                <p className='text-nowrap text-right'>{cardTitle}
                </p>
            </div >

            <div className="">
                <div className={`${wrapLeftStyles}`}>
                    {component}</div>

            </div>
        </div >
    )
}

export default AsideCard