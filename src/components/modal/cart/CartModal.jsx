import { NavLink } from 'react-router-dom'
import ButtonIn from '../../ui/buttons/ButtonIn'
import ButtonOut from '../../ui/buttons/ButtonOut'
import MouseCursor from '../../ui/cursor/Cursor'

const CartModal = () => {
    return (
        <>
            <MouseCursor />

            <div className={`max-h-[700px] p-[18px] w-[300px] bg-white absolute top-14 -right-6 sm:top-12 sm:right-0  shadow-lg z-20 animate__animated animate__fadeIn flex flex-col`} style={{ boxShadow: "var(--box-shadow2)" }}>

                <div className="flex flex-col p-4 gap-4 text-base items-start">
                    {/* Cart Item 1 */}
                    <div className="flex items-center rounded-lg shadow-sm hover:bg-gray-100 ">
                        <NavLink to="/cart" className={`w-28 h-[70px] border border-stone-300 rounded-lg overflow-hidden `} ><img className=" w-full h-full   rounded-lg object-cover rounded-l-lg" src="https://www.cookerru.com/wp-content/uploads/2022/09/pan-fried-noodles-main-preview.jpg" alt="Item 2" />
                        </NavLink>

                        <div className="p-3 w-full">
                            <NavLink to="/cart" className="font-bold text-[var(--contrast-dark)] dark:text-[var(--text)] nav-link">Fried Noodles</NavLink>
                            <p className="font-normal text-gray-700 dark:text-gray-400">1 x <span className='text-[var(--contrast2)]'>$80.00</span></p>
                        </div>
                    </div>

                    {/* Cart Item 2 */}
                    <div className="flex items-center rounded-lg shadow-sm hover:bg-gray-100">
                        <NavLink to="/" className={`w-28 h-[70px]  rounded-lg  border border-stone-300 overflow-hidden `} ><img className=" w-full h-full  rounded-lg object-cover " src="https://gramentheme.com/html/fresheat/assets/img/food-items/item1_3.png" alt="Item 2" />
                        </NavLink>

                        <div className="p-3 w-full">
                            <NavLink to="/" className="font-bold text-[var(--contrast-dark)] dark:text-[var(--text)] nav-link">Fried Chicken</NavLink>
                            <p className="font-normal text-gray-700 dark:text-gray-400">1 x <span className='text-[var(--contrast2)]'>$80.00</span></p>
                        </div>
                    </div>


                    {/* Cart Item 2 */}
                    <div className="flex items-center rounded-lg shadow-sm hover:bg-gray-100">
                        <NavLink to="/" className="w-28 h-[70px] border border-stone-300 rounded-lg overflow-hidden">
                            <img
                                className="w-full h-full object-cover"
                                src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/02/05/Baked-Feta-Pasta-4_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1615916524567.webp"
                                alt="Item 2"
                            />
                        </NavLink>

                        <div className="p-3 w-full">
                            <NavLink to="/" className="font-bold text-[var(--contrast-dark)] dark:text-[var(--text)] nav-link">Special Pasta</NavLink>
                            <p className="font-normal text-gray-700 dark:text-gray-400">1 x <span className='text-[var(--contrast2)]'>$80.00</span></p>
                        </div>
                    </div>


                </div>

                {/* Buttons */}
                <div className="p-4 border-t border-gray-200 font-medium   text-base">
                    <p className=" flex justify-between"><span className='text-[var(--text)]'>Total:</span> <span className="font-semibold text-[var(--contrast2)]">$160.00</span></p>
                    <ButtonIn title="view cart" />
                    <ButtonOut title="Checkout" />
                </div>
            </div>

            {/* <div className={`h-[500px] w-[300px] flex flex-col bg-white absolute top-8 -right-6 animate__animated animate__fadeIn z-20 `}>

                <NavLink to="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://gramentheme.com/html/fresheat/assets/img/food-items/item1_3.png" alt="" />
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <p class="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology</p>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">1 x <span>$ 80.00</span></p>
                    </div>
                </NavLink>
                <NavLink to="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://gramentheme.com/html/fresheat/assets/img/food-items/item1_3.png" alt="" />
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <p class="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology</p>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">1 x <span>$ 80.00</span></p>
                    </div>
                </NavLink>

            </div> */}



        </>
    )
}

export default CartModal
