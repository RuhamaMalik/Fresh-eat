import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const ButtonIn = ({ title, icon }) => {
    const [hover, setHover] = useState(false)

    return (
        <>
            <NavLink to="">
                <button
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    className="w-full flex items-center justify-evenly h-full relative mt-4 py-2 bg-[var(--contrast)] text-white hover:text-white overflow-hidden z-10  nav-link">
                    <div className="relative z-20">{title} </div> { icon && <div className='relative z-20 flex items-center justify-center  w-6 h-6 bg-white text-[var(--contrast)]'><i className={`text-sm ${icon}  `}></i></div>  } {/* Text ko z-index diya */}

                    {hover ? (
                        <>
                            <div className="absolute top-0 h-[50%] bg-[var(--contrast2)] w-full animate__animated animate__slideInRight  z-10" style={{ animationDuration: ".3s" }}></div>
                            <div className="absolute bottom-0 h-[50%] bg-[var(--contrast2)] w-full animate__animated animate__slideInLeft  z-10" style={{ animationDuration: ".3s" }}></div>
                        </>
                    ) : (
                        <>
                            <div className="absolute top-0 h-[50%] bg-[var(--contrast2)] w-full animate__animated animate__slideOutRight  z-10" style={{ animationDuration: ".3s" }}></div>
                            <div className="absolute bottom-0 h-[50%] bg-[var(--contrast2)] w-full animate__animated animate__slideOutLeft  z-10" style={{ animationDuration: ".3s" }}></div>
                        </>
                    )}
                </button>
            </NavLink>
        </>
    )
}

export default ButtonIn
