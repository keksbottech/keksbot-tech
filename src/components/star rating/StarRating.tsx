'use client'
import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

export default function StarRating() {
    const [rating, setRating] = useState(0)

    // Catch Rating value
    const handleRating = (rate: number) => {
        setRating(rate)

        // other logic
    }
    // Optinal callback functions
    const onPointerEnter = () => console.log('Enter')
    const onPointerLeave = () => console.log('Leave')
    const onPointerMove = (value: number, index: number) => console.log(value, index)

    return (
        <div className='flex'>
            <i className="fa fa-star text-yellow-400" aria-hidden="true"></i>
            <i className="fa fa-star text-yellow-400" aria-hidden="true"></i>
            <i className="fa fa-star text-yellow-400" aria-hidden="true"></i>
            <i className="fa fa-star text-yellow-400" aria-hidden="true"></i>
            <i className="fa fa-star text-yellow-400" aria-hidden="true"></i>
        </div>
    )
}