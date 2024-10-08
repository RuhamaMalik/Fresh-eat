import Icon from '../../../assets/images/icon/titleIcon.svg'
import PopularItemsCarousel from './PopularItemsCarousel';
import items from '../../../settings/data/items';


const PopularItemss = () => {

    return (
        <>
            <div className={`min-h-full w-full bg-[var(--bg2)] p-8 sm:p-20 md:p-28 flex flex-col gap-8 `}>
                <h1 className='flex justify-center items-center text-[var(--contrast2)] font-bold text-lg gap-2 uppercase ' > <img src={Icon} alt="food icon" /> Best Food <img src={Icon} alt="food icon" /></h1>
                <h1 className="text-center text-5xl font-bold text-[var(--dark)] ">Popular Food Items</h1>
                <PopularItemsCarousel data={items?.popularItems} />
            </div>
        </>
    )
}

export default PopularItemss
