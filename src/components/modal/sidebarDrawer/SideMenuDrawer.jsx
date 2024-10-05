import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../../assets/logo.svg';
import { images } from '../../../settings/gallery';
import ButtonIn from '../../ui/buttons/ButtonIn';
import { headerSettings } from '../../../settings/site-header';
import ImageModal from '../../image-gallery/ImageModal';

const SideMenuDrawer = ({ toggleDrawer, isDrawerOpen }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);



    // Open modal with selected image
    const openModal = (index) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };

    // Close modal
    const closeModal = () => {
        setIsOpen(false);
    };

    // Go to the previous image
    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    // Go to the next image
    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };


    return (
        <>
        {/* Image Gallery Slider */}
            {isOpen && (
                <ImageModal
                    images={images}
                    currentIndex={currentIndex}
                    closeModal={closeModal}
                    prevImage={prevImage}
                    nextImage={nextImage}
                />
            )}

          
            {/* Background Overlay */}
            {isDrawerOpen && <div onClick={toggleDrawer} className="w-[100vw] h-[100vh] opacity-[0.8] bg-[#151515] customIndex2 fixed  top-0"></div>}

            {/* Drawer Content */}
            <div
                className={`h-full max-h-[100vh] overflow-y-auto w-[350px] sm:w-[400px] bg-white fixed top-0 right-0 p-[30px] border-l-2 border-[var(--contrast)] customIndex2 animate__animated ${isDrawerOpen ? 'animate__slideInRight' : 'animate__slideOutRight'
                    }`}
            >
                {/* Head */}
                <div className="mb-5 flex justify-between items-center">
                    <NavLink to="/">
                        <img src={Logo} alt="Logo" className="" />
                    </NavLink>

                    {/* Close Button */}
                    <div
                        onClick={toggleDrawer}
                        className="w-[45px] h-[45px] text-center leading-[45px] rounded-full pointer text-white bg-[var(--contrast)] "
                    >
                        <i className="fas fa-times"></i>
                    </div>
                </div>

                {/* Drawer Text */}
                <p className="text-[var(--text)] mt-14 leading-7">
                    This involves interactions between a business and its customers. It's about meeting customers'
                    needs and resolving their problems. Effective customer service is crucial.
                </p>

                {/* Gallery */}

                {/* <ImageGallery images={images} isOpen={isOpen} setIsOpen={setIsOpen} /> */}
                <div className="grid grid-cols-3 items-center gap-2 sm:gap-4 ">
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Gallery Image ${index + 1}`}
                            className="cursor-pointer w-[100px] h-[100px] object-cover"
                            onClick={() => openModal(index)}
                        />
                    ))}
                </div>



                {/* Contact */}
                <div className="mt-[26px]">
                    <h4 className='font-extrabold text-xl'>Contact Info</h4>
                    <ul>
                        {headerSettings.contactInfo.map((info, index) => (
                            <li key={info.id + info.title} className="flex gap-2 items-center my-[15px] ">
                                <i className={`${info.icon} text-[var(--contrast)] text-xl `}></i>
                                <NavLink target="_blank" to={info.path} className={`font-semibold text-[var(--text)] nav-link`}>{info.title}</NavLink>
                            </li>))}
                    </ul>

                    <div className="h-[55px] mb-[20px]"> <ButtonIn title="Order Now" /></div>

                    <div className="flex  gap-2 items-center mt-16">
                        {headerSettings.socials.map((social, index) => (
                            <NavLink key={social.id + social.icon} to={social.path} className="w-[45px] h-[45px] text-center leading-[45px] rounded-full  text-[var(--text)] hover:text-white border border-[var(--text)]  transition-colors duration-700 ease-in-out  hover:bg-[var(--contrast)] "><i className={social.icon} ></i></NavLink>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SideMenuDrawer;
