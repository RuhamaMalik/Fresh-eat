import React from 'react';
import Logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>

      <header className=" grid grid-cols-[minmax(100px,200px),1fr] items-center bg-[var(--light)] pl-[40px] w-full h-[110px] xl:h-[140px]">
        {/* LOgo */}
        <div className="  w-full">
          <NavLink>
            <img src={Logo} alt="Logo" className="" />
          </NavLink>
        </div>
        {/* Navbar*/}
        <nav className="bg-blue-300 h-full  ">
          {/* Red */}

          <div className={`bg-[var(--contrast)] h-[35%] w-full hidden xl:!flex justify-between items-center text-gray-100 px-[50px] pe-24`}>
            <div className={``}>
              <i class="fa-regular fa-clock text-white"></i>  09:00 am - 06:00 pm
            </div>
            <div className={`flex gap-6 justify-between items-center `}>
              <p>Follow Us:</p> <div className={`flex gap-4 justify-between items-center`}>
                <NavLink><i class="fa-brands fa-facebook-f"></i></NavLink>
                <NavLink><i class="fa-brands fa-twitter"></i></NavLink>
                <NavLink> <i class="fa-brands fa-youtube"></i></NavLink>
                <NavLink> <i class="fa-brands fa-linkedin-in"></i></NavLink>
              </div>
            </div>
          </div>

          {/* Black */}
          <div className={`bg-[var(--light)] xl:bg-[var(--dark)] h-full xl:h-[65%] w-full p-4 text-[var(--light)] px-[30px] sm:px-[50px] flex items-center justify-end xl:justify-between sm:pe-24 `}>

            {/* Tabs */}

            <div className={`hidden xl:!flex items-center h-full gap-6 `}>
              <NavLink to={`/`} className='flex items-center gap-4'>Home <i class="fa-solid fa-plus"></i></NavLink>
              <NavLink className='flex gap-4'>About Us <i class="fa-solid fa-plus"></i></NavLink>
              <NavLink className='flex gap-4'>Shop <i class="fa-solid fa-plus"></i></NavLink>
              <NavLink className='flex gap-4'>Pages <i class="fa-solid fa-plus"></i></NavLink>
              <NavLink className='flex gap-4'>Contact Us <i class="fa-solid fa-plus"></i></NavLink>
            </div>

            {/* Links */}
            <div className={`flex gap-3 sm:gap-6 justify-between items-center text-xl text-[var(--text)] font-light`}>
              <NavLink><i class="fa-solid fa-magnifying-glass "></i></NavLink>
              <div className="relative">
                <NavLink>
                  <i className="fa-solid fa-cart-shopping text-2xl"></i>
                </NavLink>
                <div className="absolute top-[-10px] right-[-10px] bg-[var(--contrast2)] text-white font-semibold rounded-full h-3.5 w-3.5 p-2 flex items-center justify-center text-[10px]">
                  5
                </div>
              </div>
              <NavLink> <i class="fa-solid fa-bars"></i> </NavLink>
            </div>

          </div>


        </nav>
      </header >

    </>
  )
}

export default Header
