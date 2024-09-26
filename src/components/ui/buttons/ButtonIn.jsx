// import React, { useState } from 'react'

// const ButtonIn = () => {
//     const [hover, setHover] = useState(false)

//     return (
//         <>
//             <button
//                 onMouseEnter={() => setHover(true)}
//                 onMouseLeave={() => setHover(false)}
//                 className="w-full  relative mt-3 py-2 bg-orange-400 text-white hover:text-white  overflow-hidden ">
//                 Checkout
//                 {hover ? <>
//                     <div className=" absolute top-0 h-[50%]  bg-orange-600 w-full animate__animated animate__slideInRight"></div>
//                     <div className="absolute bottom-0 h-[50%]  bg-red-600 w-full animate__animated animate__slideInLeft"></div>
//                 </> :
//                     <>
//                         <div className="absolute top-0 h-[50%]  bg-orange-600 w-full animate__animated animate__slideOutRight"></div>
//                         <div className="absolute bottom-0 h-[50%]  bg-red-600 w-full animate__animated animate__slideOutLeft"></div>
//                     </>
//                 }
//                 {/* <div className="absolute top-0 h-[50%]  bg-red-600 w-full animate__animated animate__slideInRight"></div> */}
//             </button>
//         </>
//     )
// }

// export default ButtonIn



import React, { useState } from 'react'

const ButtonIn = ({title}) => {
    const [hover, setHover] = useState(false)

    return (
        <>
            <button
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className="w-full relative mt-3 py-2 bg-[var(--contrast)] text-white hover:text-white overflow-hidden z-10">
                <span className="relative z-20">{title}</span> {/* Text ko z-index diya */}
                
                {hover ? (
                    <>
                        <div className="absolute top-0 h-[50%] bg-[var(--contrast2)] w-full animate__animated animate__slideInRight  z-10" style={{animationDuration: ".3s"}}></div>
                        <div className="absolute bottom-0 h-[50%] bg-[var(--contrast2)] w-full animate__animated animate__slideInLeft  z-10" style={{animationDuration: ".3s"}}></div>
                    </>
                ) : (
                    <>
                        <div className="absolute top-0 h-[50%] bg-[var(--contrast2)] w-full animate__animated animate__slideOutRight  z-10" style={{animationDuration: ".3s"}}></div>
                        <div className="absolute bottom-0 h-[50%] bg-[var(--contrast2)] w-full animate__animated animate__slideOutLeft  z-10" style={{animationDuration: ".3s"}}></div>
                    </>
                )}
            </button>
        </>
    )
}

export default ButtonIn
