import React from 'react'

function HeaderLink({title}) {
    return (
        <div className="flex flex-col items-center cursor-pointer w-12 sm:w-20 group">
           <p className="tracking-widest hover:text-red-500">{title}</p>
        </div>
    )
}

export default HeaderLink;
