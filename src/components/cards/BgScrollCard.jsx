import React from 'react';
import Bg from '../../assets/images/bg/dishesThumbBG.png'
import Eye from '../../assets/images/icon/view.png'
import Basket from '../../assets/images/icon/shopping-basket.png'
import { NavLink } from 'react-router-dom';

const BgScrollCard = ({ data }) => {
    return (
        <>

            <div className="relative bg-[var(--light)] p-6 text-center rounded-2xl customIndex2 group overflow-hidden">

                <img
                    className="-z-10 absolute top-0 left-0 right-0 w-full h-full object-cover opacity-0 transition-all duration-500 ease-in-out transform translate-y-12 group-hover:opacity-100 group-hover:translate-y-0"
                    src={Bg}
                    alt="thmb"
                />

                <div className=" mt-5 mb-6 relative">
                    <img className="m-auto" src={data?.image} alt="thmb" />
                </div>

                <NavLink to="/">
                    <h3 className="font-bold text-lg capitalize my-2 text-[var(--dark)] group-hover:text-white ">{data?.title}</h3>
                </NavLink>

                <div className="text-[var(--text)] capitalize  group-hover:text-white">The registration fee</div>
                <h6 className="text-[var(--contrast)] capitalize font-bold text-lg my-2  group-hover:text-white">${data?.price}</h6>

                {/* icon */}
                <div className=" h-full absolute top-6 right-6 customIndex2  ">
                    <NavLink to='/a'> <i className="fa-regular fa-heart bg-[var(--contrast)] text-white p-2 rounded-full "></i></NavLink>
                    <div className="mt-2 flex flex-col gap-2  customIndex2  opacity-0 transition-all duration-500 ease-in-out transform translate-y-28 group-hover:opacity-100 group-hover:translate-y-0">
                        <NavLink to='/a'> <img alt="basket icon" src={Basket} className="fa-regular w-8 h-8 fa-eye  bg-white p-1.5 rounded-full " /></NavLink>
                        <NavLink to='/a'> <img alt="eye icon" src={Eye} className="fa-regular w-8 h-8 fa-eye  bg-white p-1.5 rounded-full " /></NavLink>
                    </div>
                </div>

            </div>

        </>
    )
}

export default BgScrollCard
