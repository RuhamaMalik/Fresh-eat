import React from 'react'
import { NavLink } from 'react-router-dom';

const ListMenu = ({ id, menu }) => {

    return (
        <>
            {/* Dropdown menu */}
            <div id={id} className="  z-10 hidden    bg-white border-b shadow w-64 dark:bg-gray-700 slide-top" style={{ boxShadow: "var(--box-shadow)" }} >
                <ul className="  text-[var(--dark)] dark:text-gray-200  divide-y divide-gray-200" aria-labelledby="multiLevelDropdownButton" >
                    {menu.map((tab, index) => (
                        <li key={index}>
                            {tab?.subMenu ? (
                                <NavLink id="doubleDropdownButton"
                                to=''
                                    data-dropdown-offset-distance="0"
                                    data-dropdown-toggle={tab.label + index}
                                    data-dropdown-placement="right-start"
                                    data-dropdown-trigger="hover"
                                    className="font-semibold z-20 flex items-center gap-2 w-full p-4 transition-colors duration-700 ease-in-out hover:bg-[var(--contrast)] hover:text-[var(--light)] dark:hover:bg-gray-600 dark:hover:text-white ">                                          {tab.label}
                                    <i className="fa-solid fa-angle-down text-xl"></i>
                                    <SubMenu id={tab.label + index} menu={tab.subMenu} />
                                </NavLink>

                            ) : (
                                <NavLink to={tab.path} className="block p-4 font-semibold transition-colors duration-700 ease-in-out hover:bg-[var(--contrast)] hover:text-[var(--light)]  dark:hover:bg-gray-600 dark:hover:text-white">
                                    {tab.label}
                                </NavLink>
                            )} </li>
                    ))}

                </ul>
            </div>

        </>
    )
}

export default ListMenu;



export const SubMenu = ({ id, menu }) => {
    return (
        <>
            <div id={id} className="z-20 hidden bg-white shadow w-64 dark:bg-gray-700     slide-top  " style={{ boxShadow: "var(--box-shadow)" }}>
                <ul className=" text-[var(--dark)] divide-y divide-gray-200  dark:text-gray-200" aria-labelledby="doubleDropdownButton">

                    {menu.map((tab, index) => (
                        <li key={index}>
                            <NavLink to={tab.path} className="block font-semibold p-4 transition-colors duration-700 ease-in-out hover:bg-[var(--contrast)] hover:text-[var(--light)] dark:hover:bg-gray-600 dark:hover:text-white">
                                {tab.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}


