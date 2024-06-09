import React from 'react'
import styles from './menuIcon.module.css'
type MenuIconType = {
    onClick: () => void
    css: string;
}
function MenuIcon({ onClick, css }: MenuIconType) {
    return (
        <button onClick={onClick} title='menu btn' type='button' className={css}>
            <div className='bg-black w-7 h-0.5 mb-2' ></div>
            <div className='bg-black w-4 h-0.5 mb-2' ></div>
            <div className='bg-black w-7 h-0.5 ' ></div>

        </button >
    )
}

export default MenuIcon