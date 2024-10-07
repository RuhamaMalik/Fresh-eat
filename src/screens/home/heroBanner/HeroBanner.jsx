import React from 'react';
import './style.css';
import bannerBG1_1 from '../../../assets/images/bg/bannerBG1_1.jpg';
import banner1 from '../../../assets/images/banner/bannerThumb1_1.png';
import banner2 from '../../../assets/images/banner/bannerThumb1_2.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import ButtonIn from '../../../components/ui/buttons/ButtonIn';

const HeroBanner = () => {

    const resetAnimation = (slideIndex) => {
        const currentSlide = document.querySelectorAll('.swiper-slide')[slideIndex];
        if (currentSlide) {
            const animatedElements = currentSlide.querySelectorAll('.animate__animated');
            animatedElements.forEach((element) => {
                element.classList.remove('animate__slideInRight');
                void element.offsetWidth; // Reflow to restart animation
                element.classList.add('animate__slideInRight');
            });
        }
    };

    return (
        <div
            className="h-full w-full bg-red-500"
            style={{
                backgroundImage: `url(${bannerBG1_1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                }}
                loop={true} 
                onSlideChange={(swiper) => {
                    resetAnimation(swiper.activeIndex); // Reset animation on slide change
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='flex items-center justify-center gap-8 py-32 px-8 sm:px-20 md:p-32'>
                        <div className="xl:w-1/2 text-left">
                            <h3 className="text-[var(--contrast2)] text-xl font-extrabold my-4 animate__animated animate__slideInRight ">WELCOME FRESHEAT</h3>
                            <h1 className="text-[var(--light)] text-5xl md:text-7xl 2xl:text-8xl font-extrabold animate__animated animate__slideInRight ">SPICY FRIED CHICKEN</h1>
                            <div className='w-36 h-[52px] animate__animated animate__slideInRight '>
                                <ButtonIn title="Order Now" icon='fa-solid fa-arrow-right' />  
                            </div>
                        </div>
                        <div className="hidden xl:!inline-block w-1/2 animate__animated animate__slideInRight animate__slow">
                            <img src={banner1} alt="Banner Image" />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='flex items-center justify-center gap-8 py-32 px-8 sm:px-20 md:p-32'>
                        <div className="xl:w-1/2 text-left">
                            <h3 className="text-[var(--contrast2)] text-xl font-extrabold my-4 animate__animated animate__slideInRight ">WELCOME FRESHEAT</h3>
                            <h1 className="text-[var(--light)] text-5xl md:text-7xl 2xl:text-8xl font-extrabold animate__animated animate__slideInRight ">CHICAGO DEEP KING PIZZA</h1>
                            <div className='w-36 h-[52px] animate__animated animate__slideInRight '>
                                <ButtonIn title="Order Now" icon='fa-solid fa-arrow-right' />  
                            </div>
                        </div>
                        <div className="hidden xl:!inline-block w-1/2 animate__animated animate__slideInRight animate__slow">
                            <img src={banner2} alt="Banner Image" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default HeroBanner;
