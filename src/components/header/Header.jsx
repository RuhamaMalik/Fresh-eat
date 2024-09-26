import { useState } from 'react';
import Logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom';
import ListMenu from "../ui/ListMenu";
import { tabsSettings } from '../../settings/site-header'
import CartModal from '../modal/cart/CartModal';
import SearchModel from '../modal/search/SearchModel';

const Header = ({ showFixedNavbar }) => {
  const [isCartModalOpen, setCartModalOpen] = useState(false);
  const [isSearchModalOpen, setSearchModalOpen] = useState(false);


  return (
    <>

      <header className={` ${showFixedNavbar ? `px-6 sm:px-0 slide-bottom fixed top-0  w-[100%] max-w-[1600px] flex justify-between h-[90px]` : 'grid grid-cols-[minmax(100px,200px),1fr] h-[110px] xl:h-[140px]  pl-[40px] w-full '}   items-center bg-[var(--light)]  `} style={{ boxShadow: "var(--box-shadow)" }}>
        {/* LOgo */}
        <div className={`    ${showFixedNavbar ? 'slide-right' : 'w-full'}`}>
          <NavLink>
            <img src={Logo} alt="Logo" className="" />
          </NavLink>
        </div>
        {/* Navbar*/}
        <nav className={` h-full ${showFixedNavbar ? `w-[80%]` : ""} `}>
          {/* Red */}

          <div className={`bg-[var(--contrast)] h-[35%] w-full  justify-between items-center text-gray-100 px-[50px] pe-24  ${showFixedNavbar ? `hidden` : 'hidden xl:!flex'} `}>
            <div className={``}>
              <i className="fa-regular fa-clock text-white"></i>  09:00 am - 06:00 pm
            </div>
            <div className={`flex gap-6 justify-between items-center `}>
              <p>Follow Us:</p> <div className={`flex gap-4 justify-between items-center`}>
                <NavLink><i className="fa-brands fa-facebook-f nav-link"></i></NavLink>
                <NavLink><i className="fa-brands fa-twitter nav-link"></i></NavLink>
                <NavLink> <i className="fa-brands fa-youtube nav-link"></i></NavLink>
                <NavLink> <i className="fa-brands fa-linkedin-in nav-link"></i></NavLink>
              </div>
            </div>
          </div>

          {/* Black */}
          <div className={`${showFixedNavbar ? ' h-full bg-[var(--light)]  font-bold' : 'h-full xl:h-[65%]  sm:pe-24 bg-[var(--light)] xl:bg-[var(--dark)] text-[var(--light)]'}   w-full p-4  px-[30px] sm:px-[50px] flex items-center justify-end xl:justify-between `}>
            {/* Tabs */}
            <div className={`hidden xl:!flex items-center h-full gap-6`}>
              {tabsSettings.tabs.map((tab, index) => (
                <div key={index}>
                  {tab?.menu ? (
                    <NavLink className='flex gap-4 relative nav-link' data-dropdown-offset-skidding="90" data-dropdown-offset-distance="20" id="multiLevelDropdownButton" data-dropdown-toggle={tab.label + index} data-dropdown-trigger="hover" >
                      {tab.label} <i className="fa-solid fa-plus"></i>
                      <ListMenu id={tab.label + index} menu={tab.menu} />
                    </NavLink>
                  ) : (
                    <NavLink to={tab.path} className='flex items-center gap-4 nav-link'>
                      {tab.label} <i className="fa-solid fa-plus"></i>
                    </NavLink>
                  )}
                </div>
              ))}
            </div>





            {/* Links */}
            <div className={`flex gap-3 sm:gap-6 justify-between items-center  text-xl text-[var(--text)] font-thin ${showFixedNavbar ? 'slide-left' : ''}`}>
              <NavLink
                onClick={() => setSearchModalOpen(true)}
                // onClick={() => setSearchModalOpen(false)}
                >
                  <i className="fa-solid fa-magnifying-glass nav-link "></i>
              </NavLink>

              {isSearchModalOpen && <SearchModel isModalOpen={isSearchModalOpen} closeModal={setSearchModalOpen} />}

              <div
                className="relative"
                onMouseEnter={() => setCartModalOpen(true)}
                onMouseLeave={() => setCartModalOpen(false)}>
                <NavLink>

                  <svg height="28" viewBox="0 0 24 24"
                    width="28"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="m5.50835165 12.5914912c-.00106615-.0057657-.00203337-.011566-.00289985-.0173991l-1.22011509-7.32069058c-.12054699-.72328196-.74633216-1.25340152-1.47959089-1.25340152h-.30574582c-.27614237 0-.5-.22385763-.5-.5s.22385763-.5.5-.5h.30574582c1.1918179 0 2.21327948.84029234 2.44951006 2h16.24474412c.3321894 0 .5720214.31795246.480762.63736056l-2 7.00000004c-.0613288.2146507-.2575218.3626394-.480762.3626394h-12.90976979l.12443308.7465985c.12054699.7232819.74633216 1.2534015 1.47959089 1.2534015h11.30574582c.2761424 0 .5.2238576.5.5s-.2238576.5-.5.5h-11.30574582c-1.22209789 0-2.26507316-.8835326-2.46598481-2.0890025l-.21991747-1.3195048zm-.08478811-6.5914912 1 6h12.69928576l1.7142857-6zm2.57643646 15c-1.1045695 0-2-.8954305-2-2s.8954305-2 2-2 2 .8954305 2 2-.8954305 2-2 2zm0-1c.55228475 0 1-.4477153 1-1s-.44771525-1-1-1-1 .4477153-1 1 .44771525 1 1 1zm9 1c-1.1045695 0-2-.8954305-2-2s.8954305-2 2-2 2 .8954305 2 2-.8954305 2-2 2zm0-1c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1-1 .4477153-1 1 .4477153 1 1 1z"
                      className={`fa-solid fa-cart-shopping ${isCartModalOpen ? "text-[var(--contrast2)] " : ""} nav-link`}
                      fill={isCartModalOpen ? "var(--contrast)" : "currentColor"}
                      stroke="currentColor"
                      stroke-width=".9"
                    /></svg>
                </NavLink>
                <div className="absolute top-[-10px] right-[-10px] bg-[var(--contrast2)] text-white font-semibold rounded-full h-3.5 w-3.5 p-2 flex items-center justify-center text-[10px]">
                  5
                </div>
                {isCartModalOpen && <CartModal />}
                {/* <CartModal /> */}
              </div>

              <NavLink> <i className="fa-solid fa-bars"></i> </NavLink>
            </div>

          </div>


        </nav>
      </header >




    </>
  )
}

export default Header




//  {/* Fixed Navbar */}
//  {showFixedNavbar && (

//   <header className={`px-6 sm:px-0 slide-bottom fixed top-0 w-full flex justify-between items-center bg-[var(--light)]  w-full h-[90px] `}>
//     {/* LOgo */}
//     <div className="slide-right  ">
//       <NavLink>
//         <img src={Logo} alt="Logo" className="" />
//       </NavLink>
//     </div>


//     {/* Tabs */}

//     <div className={`hidden xl:!flex items-center h-full gap-6 font-semibold `}>
//       <NavLink to={`/`} className='flex items-center gap-4'>Home <i className="fa-solid fa-plus"></i></NavLink>
//       <NavLink className='flex gap-4'>About Us <i className="fa-solid fa-plus"></i></NavLink>
//       <NavLink className='flex gap-4'>Shop <i className="fa-solid fa-plus"></i></NavLink>
//       <NavLink className='flex gap-4'>Pages <i className="fa-solid fa-plus"></i></NavLink>
//       <NavLink className='flex gap-4'>Contact Us <i className="fa-solid fa-plus"></i></NavLink>
//     </div>

//     {/* Links */}
//     <div className={`flex gap-3 sm:gap-6 justify-between items-center text-xl text-[var(--text)] font-light slide-left `}>
//       <NavLink><i className="fa-solid fa-magnifying-glass "></i></NavLink>
//       <div className="relative">
//         <NavLink>
//           <i className="fa-solid fa-cart-shopping text-2xl"></i>
//         </NavLink>
//         <div className="absolute top-[-10px] right-[-10px] bg-[var(--contrast2)] text-white font-semibold rounded-full h-3.5 w-3.5 p-2 flex items-center justify-center text-[10px]">
//           5
//         </div>
//       </div>
//       <NavLink> <i className="fa-solid fa-bars"></i> </NavLink>
//     </div>



//   </header >
// )}