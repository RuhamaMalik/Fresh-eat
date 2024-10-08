import { NavLink } from 'react-router-dom'
import CircleShap from '../../assets/images/food-items/circleShape.png'

const DishCard = ({item}) => {
    return (
        <>


            <div className=" !relative text-center m-2.5 w-[260px] h-[350px] customIndex4 m-auto">
                <div className=" !relative w-full h-[60%] customIndex5 ">
                    <img src={item.image} alt="thumb" className='!absolute left-[17%] top-[5px] ' style={{width:"164px", height:"164px"}}/>
                    <img className="animate-spin   !absolute left-[15%] " style={{width:"176px", height:"176px", animationDuration:"20s"}} src={CircleShap} alt="shape" />
                </div>

                <div className="item-content rounded-2xl pt-20 absolute w-full h-[58%] top-[30%] ">
                    <NavLink to="/a">
                        <h3 className='font-bold text-lg capitalize my-2 text-[var(--dark)]  '>{item.title}</h3>
                    </NavLink>
                    <div className="text-[var(--text)] capitalize ">The registration fee</div>
                    <h6 className="text-[var(--contrast)] capitalize font-bold text-lg  my-2">$28.00</h6>
                </div>
            </div>

        </>
    )
}

export default DishCard
