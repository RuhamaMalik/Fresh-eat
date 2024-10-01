import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../../assets/logo.svg';
import ImageGallery from '../../image-gallery/ImageGallery';
import { images } from '../../../settings/gallery';
import ButtonIn from '../../ui/buttons/ButtonIn';
import { headerSettings } from '../../../settings/site-header';

const SideMenuDrawer = ({ toggleDrawer, isDrawerOpen }) => {
    return (
        <>
            {/* Background Overlay */}
            {isDrawerOpen && <div  onClick={toggleDrawer} className="w-[100vw] h-[100vh] opacity-[0.8] bg-[#151515] z-[100000000] fixed top-0"></div>}

            {/* Drawer Content */}
            <div
                className={`h-full max-h-[100vh] overflow-y-auto w-[350px] sm:w-[400px] bg-white fixed top-0 right-0 p-[30px] border-l-2 border-[var(--contrast)] z-[10000000000] animate__animated ${isDrawerOpen ? 'animate__slideInRight' : 'animate__slideOutRight'
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

                <ImageGallery images={images} />


                {/* Contact */}
                <div class="mt-[26px]">
                    <h4 className='font-extrabold text-xl'>Contact Info</h4>
                    <ul>
                        {headerSettings.contactInfo.map((info, index) => (
                            <li key={info.id + info.title} className="flex gap-2 items-center my-[15px] ">
                                <i className={`${info.icon} text-[var(--contrast)] text-xl `}></i>
                                <NavLink target="_blank" to={info.path} className={`font-semibold text-[var(--text)] nav-link`}>{info.title}</NavLink>
                            </li>))}
                    </ul>

                    <div className="h-[55px] mb-[20px]"> <ButtonIn title="Order Now" /></div>

                    <div class="flex  gap-2 items-center mt-16">
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
