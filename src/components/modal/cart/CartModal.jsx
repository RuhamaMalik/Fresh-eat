import { NavLink } from 'react-router-dom'
import ButtonIn from '../../ui/buttons/ButtonIn'
import ButtonOut from '../../ui/buttons/ButtonOut'

const cartData = [
    { id: 1, name: 'Fried Noodles', image: 'https://www.cookerru.com/wp-content/uploads/2022/09/pan-fried-noodles-main-preview.jpg', price: 80 },
    { id: 2, name: 'Chicken Fried Steak', image: 'https://gramentheme.com/html/fresheat/assets/img/food-items/item1_3.png', price: 20 },
    { id: 3, name: 'Special Pasta', image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/02/05/Baked-Feta-Pasta-4_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1615916524567.webp', price: 18 },

]

const CartModal = () => {
    return (
        <>
            <div className={`max-h-[700px] p-[18px] w-[300px] bg-white absolute top-14 -right-6 sm:top-12 sm:right-0  shadow-lg  animate__animated animate__fadeIn flex flex-col z-50`} style={{ boxShadow: "var(--box-shadow2)" }}>

                <div className="flex flex-col p-4 gap-4 text-base items-start">

                    {cartData.map((item, index) => (
                        <div className="flex items-center rounded-lg shadow-sm hover:bg-gray-100 ">
                            <NavLink to="/cart" className={`w-28 h-[70px] border border-stone-300 rounded-lg overflow-hidden nav-link`} ><img className=" w-full h-full   rounded-lg object-cover rounded-l-lg" src={item.image} alt="Item 2" />
                            </NavLink>

                            <div className="p-3 w-full">
                                <NavLink to="/cart" className="font-bold text-[var(--contrast-dark)] dark:text-[var(--text)] nav-link">{item.name}</NavLink>
                                <p className="font-normal text-gray-700 dark:text-gray-400">1 x <span className='text-[var(--contrast2)]'>${item.price}.00</span></p>
                            </div>
                        </div>
                    ))}

                </div>


                {/* Buttons */}
                <div className="p-4 border-t border-gray-200 font-medium   text-base">
                    <p className=" flex justify-between"><span className='text-[var(--text)]'>Total:</span> <span className="font-semibold text-[var(--contrast2)]">$160.00</span></p>
                    <div className="h-[44px] mb-2"><ButtonIn title="view cart" /></div>
                    <div className="h-[44px]"> <ButtonOut title="Checkout" /></div>

                </div>
            </div>




        </>
    )
}

export default CartModal
