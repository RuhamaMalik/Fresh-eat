import React from 'react';
import Dish1 from '../../assets/images/dishes/dishes1_1.png'
import { NavLink } from 'react-router-dom';

const BgScrollCard = () => {
    return (
        <>
            <div className="relative bg-[var(--light)] p-6 text-center rounded-2xl customIndex2  ">
                <div className="dishes-thumb mt-5 mb-6 relative  ">
                    <img className='m-auto' src={Dish1} alt="thmb" />
                </div>
                <NavLink to="/a">
                        <h3 className='font-bold text-lg capitalize my-2 text-[var(--dark)]  '>Chinese Pasta</h3>
                    </NavLink>
                    <div className="text-[var(--text)] capitalize ">The registration fee</div>
                    <h6 className="text-[var(--contrast)] capitalize font-bold text-lg  my-2">$28.00</h6>

            </div>
        </>
    )
}

export default BgScrollCard
