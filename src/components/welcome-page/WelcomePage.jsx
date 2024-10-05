import { useState, useEffect, useRef } from "react";
import './welcomePage.css';
import Header from "../header/Header";
// import MouseCursor from "../ui/cursor/Cursor";

const WelcomeScreen = ({ children }) => {
    const [animated, setAnimated] = useState(false);
    const [hideAnim, setHideAnim] = useState(false);
    const scrollContainerRef = useRef(null);  // Reference for scrollable div

    const text = "FRESHEAT";


    // Play Hide Animation
    useEffect(() => {
        const timer = setTimeout(() => {
            setHideAnim(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    // Text Animation Repeat Duration
    useEffect(() => {
        const toggleAnimation = () => {
            setAnimated((prevState) => !prevState);
        };

        const interval = setInterval(toggleAnimation, 17000);

        return () => clearInterval(interval);
    }, []);

    // //////////////// scroll window on div

    const [showFixedNavbar, setShowFixedNavbar] = useState(false);

    
    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const scrollTop = scrollContainerRef.current.scrollTop;

            if (scrollTop > 140) {
                setShowFixedNavbar(true);
            } else {
                setShowFixedNavbar(false);
            }
        }
    };

    useEffect(() => {
        const scrollDiv = scrollContainerRef.current;

        if (scrollDiv) {
            scrollDiv.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (scrollDiv) {
                scrollDiv.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);



    return (
        <div className="relative h-screen max-h-[100vh] w-full overflow-hidden bg-transparent">

            {/* Div 1 */}
            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col gap-8  items-center justify-center h-screen max-h-[100vh] w-full">
                {/* Spinner Component */}
                <div className="flex items-center justify-center z-10 hideCol mx-auto">
                    <div className="w-40 h-40 border-[3px] border-black border-t-[var(--contrast)] border-solid rounded-full animate-spin"></div>
                </div>

                {/* Animated Text */}
                <div className={`flex gap-x-2 sm:gap-x-4  items-center mt-12`}>
                    {text.split("").map((letter, index) => (
                        <div key={index} className={`${animated ? "bg-[var(--contrast-dark)]" : "bg-[var(--contrast)]"} relative w-fit h-fit text-transparent bg-contain bg-center bg-clip-text mx-auto leading-none z-10 text-[3em] sm:text-[5.5em] font-semibold p-0  hideCol mx-auto`}>
                            {letter}
                            <div className={`${animated ? "animate-red" : "animate-black"} letter-${index} p-0`}>
                                {letter}
                            </div>
                        </div>
                    ))}
                </div>
                {/* Loading Text */}
                <div className="text-[20px] text-[var(--contrast)] font-medium -mt-4 z-10 hideCol mx-auto text-center" style={{ letterSpacing: "6px" }}>Loading</div>
            </div>

            {/* Div 2 (Hide Animation)*/}
            <div className={`flex absolute top-0 left-0 right-0 bottom-0 bg-transparent  h-screen max-h-[100vh] w-full  ${hideAnim ? 'hidden' : ''}`}>
                <div className="h-[100vh] w-[25vw]"><div className="h-full column bg-[var(--dark)]"></div></div>
                <div className="h-[100vh] w-[25vw]"><div className="h-full column bg-[var(--dark)]"></div></div>
                <div className="h-[100vh] w-[25vw]"><div className="h-full column bg-[var(--dark)]"></div></div>
                <div className="h-[100vh] w-[25vw]"><div className="h-full column bg-[var(--dark)]"></div></div>
            </div>

            {/* Div 3 (Content) */}
            <div className={`absolute top-0 left-0 right-0 h-full overflow-hidden ${hideAnim ? 'z-20 ' : '-z-10'}`}>
                <div ref={scrollContainerRef} className="max-w-[1600px] h-full overflow-y-auto mx-auto bg-[var(--bg2)]">
                  {/* <MouseCursor/> */}
                    {/* 
                    <MouseCursor/> */}
                    <Header showFixedNavbar={showFixedNavbar} />
                    {children}
                </div>
            </div>
        </div>
    );
};

export default WelcomeScreen;





