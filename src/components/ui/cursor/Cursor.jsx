import React, { useEffect } from 'react';
import './cursor.css'; // Custom CSS

const MouseCursor = () => {
    useEffect(() => {
        const cursorInner = document.querySelector(".cursor-inner");
        const cursorOuter = document.querySelector(".cursor-outer");

        let mouseX = 0, mouseY = 0;
        let isHovering = false;

        const updateCursor = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            // Move the inner cursor exactly at the mouse position
            // cursorInner.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
            cursorInner.style.transform = `translate(${mouseX - 30}px, ${mouseY - 16}px)`;

            // Move the outer cursor slightly offset so it's centered around the inner cursor
            if (!isHovering) {
                cursorOuter.style.transform = `translate(${mouseX - 16}px, ${mouseY - 16}px)`; // 16px offset for center alignment
                cursorInner.style.transform = `translate(${mouseX}px, ${mouseY}px)`; // 16px offset for center alignment
            }
        };

        const addHoverClass = () => {
            cursorInner.classList.add("cursor-hover");
            cursorOuter.classList.add("cursor-hover");
            isHovering = true;
        };

        const removeHoverClass = () => {
            cursorInner.classList.remove("cursor-hover");
            cursorOuter.classList.remove("cursor-hover");
            isHovering = false;
        };

        window.addEventListener('mousemove', updateCursor);
        document.querySelectorAll("a, .nav-link, .cursor-pointer").forEach(el => {
            el.addEventListener('mouseenter', addHoverClass);
            el.addEventListener('mouseleave', removeHoverClass);
        });

        return () => {
            window.removeEventListener('mousemove', updateCursor);
        };
    }, []);

    return (
        <>
            <div className="mouse-cursor cursor-outer" />
            <div className="mouse-cursor cursor-inner" />
        </>
    );
};

export default MouseCursor;