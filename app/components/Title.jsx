import React from 'react'

export default function Title({title}) {
    return (
        <h2 className="bg-black h-14 md:h-20 flex items-center px-2 md:px-28">
            <span className="text-base md:text-2xl text-white font-medium">{title}</span>
        </h2>
    )
}
