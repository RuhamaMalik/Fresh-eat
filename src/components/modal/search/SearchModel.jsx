// import React from 'react'

// const SearchModel = ({closeModal, isModalOpen}) => {
//     return (
//         <>
//             <div onClick={()=> closeModal(false)} className={`h-[100vh] w-[100vw] fixed top-0 left-0 z-20 bg-[var(--light2)]  animate__animated ${isModalOpen? "animate__fadeIn" : "animate__fadeOut"} `} >
//                 <i onClick={()=> closeModal(false)} className="fas fa-times absolute top-12 right-12 text-3xl cursor-pointer text-[var(--contrast)] open" ></i>

//                 <div class="absolute top-[50%] w-full translate-y-[-50%] ">
//                     <div class=" w-[50%] m-auto  relative">
//                     <input onClick={()=> closeModal(true)} type="search" class="main-search-input w-full h-16 border-0 px-12 bg-transparent font-medium border-b-2 border-b-[var(--contrast)] text-[var(--contrast)] !text-[var(--contrast)] z-30 text-center text-2xl capitalize focus:ring-0 focus:border-b-[var(--contrast)] focus:outline-none" placeholder="Search..." />
//                     </div>
//             </div>
//             </div>
//         </>
//     )
// }

// export default SearchModel


import React, { useEffect, useState } from 'react';

const SearchModel = ({ closeModal, isModalOpen }) => {
    const [animationClass, setAnimationClass] = useState(isModalOpen && 'animate__fadeIn');

    useEffect(() => {

        if (animationClass === 'animate__fadeIn') {
            setAnimationClass('animate__fadeIn');
        }
        else {
            setAnimationClass('animate__fadeOut');
            setTimeout(() => {
                closeModal(false);
            }, 300); 

        }
    }, [animationClass]);

    // const handleFadeOut = (e) => {
    //     e.stopPropagation(); // Stops the click from bubbling up to the parent
    //     setAnimationClass('animate__fadeOut');
    // };


    return (
        <>
            {isModalOpen && (
                <div onClick={() => setAnimationClass("animate__fadeOut")}
                    className={`h-[100vh] w-[100vw] fixed top-0 left-0 z-20 bg-[var(--light2)] animate__animated ${animationClass}`}
                >
                    <i
                        onClick={() => setAnimationClass("animate__fadeOut")}
                        className="fas fa-times absolute top-12 right-12 text-3xl cursor-pointer text-[var(--contrast)] open"
                    ></i>

                    <div  className="absolute top-[50%] w-full translate-y-[-50%] ">
                        <div className="w-[50%] m-auto relative">
                            <input
                            onClick={(e) => e.stopPropagation()}
                                type="search"
                                className="main-search-input w-full h-16 border-0 px-12 bg-transparent font-medium border-b-2 border-b-[var(--contrast)] text-[var(--contrast)] z-30 text-center text-2xl capitalize focus:ring-0 focus:border-b-[var(--contrast)] focus:outline-none"
                                placeholder="Search..."
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default SearchModel;