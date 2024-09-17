import { useState, useEffect } from "react";
import './welcomePage.css';

const WelcomeScreen = ({ children }) => {
    const [animated, setAnimated] = useState(false);
    const [hideAnim, setHideAnim] = useState(false);

    const text = "FRESHEAT";


    // Play Hide Animation
    useEffect(() => {
        const timer = setTimeout(() => {
            setHideAnim(true);
        }, 8000);

        return () => clearTimeout(timer);
    }, []);





    // Text Animation Repeat Duration
    useEffect(() => {
        const toggleAnimation = () => {
            setAnimated((prevState) => !prevState);
        };

        // Set interval to toggle state every 17 seconds
        const interval = setInterval(toggleAnimation, 17000);

        return () => clearInterval(interval);
    }, []);



    return (
        < div className="relative h-screen  max-h-[100vh] w-full  overflow-hidden">

            {/* Div 1 */}
            
            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col gap-8  items-center justify-center h-screen  max-h-[100vh] w-full   ">

                {/* <!-- Spinner Component --> */}
                <div className="flex items-center justify-center z-10 hideCol mx-auto">
                    <div className="w-40 h-40 border-[3px] border-black border-t-[#EB0029]  border-solid rounded-full animate-spin"></div>
                </div>

                {/* Animated Text */}
                <div className={` flex gap-x-2 sm:gap-x-4  items-center mt-12  `}>
                    {text.split("").map((letter, index) => (
                        <div key={index} className={`${animated ? "bg-[#373737]" : "bg-[#eb0029] "} relative w-fit h-fit text-transparent bg-contain bg-center bg-clip-text mx-auto leading-none z-10 text-[3em] sm:text-[5.5em] font-semibold p-0  hideCol mx-auto`}>
                            {letter}
                            <div className={` ${animated ? "animate-red" : "animate-black"} letter-${index}   p-0`}>
                                {letter}
                            </div>
                        </div>
                    ))}
                </div>
                {/* Loading Text */}
                <div className="text-[20px] text-[#EB0029] font-medium -mt-4 z-10 hideCol mx-auto text-center " style={{ letterSpacing: "6px" }}>Loading</div>
            </div>


            {/* Div 2 */}

            <div className={`flex absolute top-0 left-0 right-0 bottom-0 bg-transparent  h-screen max-h-[100vh] w-full  ${hideAnim ? 'hidden' : ''}`}>
                {/* Each column */}
                <div className={` h-[100vh] w-[25vw] `}>
                    <div className={` h-full column bg-[#010F1C]`}>

                    </div>
                </div>
                <div className={`  h-[100vh] w-[25vw]`}>
                    <div className={` h-full column  bg-[#010F1C] `}>

                    </div>
                </div>
                <div className={` h-[100vh] w-[25vw]`}>
                    <div className={` h-full column bg-[#010F1C] `}>

                    </div>
                </div>
                <div className={`h-[100vh] w-[25vw]`}>
                    <div className={`h-full column bg-[#010F1C]`}></div>
                </div>
            </div>



            {/* Div 3  ( Content ) */}


            <div className={`absolute top-0 left-0 right-0   h-full   bg-blue-400  overflow-hidden    ${hideAnim ? ' z-20' : '-z-10 '}  `}>
                <div className="max-w-[1600px] h-full bg-green-400 overflow-y-auto mx-auto">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default WelcomeScreen;
