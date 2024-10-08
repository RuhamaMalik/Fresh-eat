import { NavLink } from "react-router-dom";
import OfferBg from "../../assets/images/bg/offerBG1_1.jpg";
import ButtonIn from "../ui/buttons/ButtonIn";
import ButtonOut from "../ui/buttons/ButtonOut";

const OfferCard = ({ data }) => {


    return (
        <>

            <div className="offer-card w-full  style1 text-white flex justify-evenly items-center gap-4 bg-center	 bg-no-repeat	bg-cover	 pb-6 pl-7" style={{ backgroundImage: `url(${OfferBg})` }} >
                <div>  {/* Offer Content*/}
                    <h6 className="text-xs text-[var(--contrast)] font-black uppercase my-2 ">{data.validateTitle}</h6>
                    <h3 className="text-xl font-black uppercase mb-4 " >{data.title}</h3>
                    <h6 className="text-xs text-[var(--contrast2)] font-black uppercase ">limits Time Offer</h6>
                    <div className='w-40 h-[50px] '>
                     {data.type === "weekly" ? (<ButtonIn title="Order Now" icon='fa-solid fa-arrow-right'  border={true} />) : (<ButtonOut title="Order Now" icon='fa-solid fa-arrow-right' border={true} />)}   
                    </div>                </div>
                <div className="relative">   {/* Offer Thumb*/}
                    <img className=" w-[276px] h-[260px] object-contain	" src={data.image} alt="thumb" />
                    <div className="absolute top-0 -left-8 float-x"><img src={data.offerImage} alt="shape" /></div>
                </div>
            </div>
        </>
    )
}

export default OfferCard
