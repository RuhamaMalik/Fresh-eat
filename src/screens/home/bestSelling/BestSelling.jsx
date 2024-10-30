import Icon from '../../../assets/images/icon/titleIcon.svg'
import BgScrollCard from '../../../components/cards/BgScrollCard'
import ButtonIn from '../../../components/ui/buttons/ButtonIn';
import items from '../../../settings/data/items';


const BestSelling = () => {
    return (
        <>
            <div className={`sm:min-h-full w-full bg-[var(--bg2)] p-4 sm:p-14 md:p-16 lg:p-20 xl:p-28 flex flex-col gap-8 `}>
                <h1 className='flex justify-center items-center text-[var(--contrast2)] font-bold text-lg gap-2 uppercase ' > <img src={Icon} alt="food icon" /> POPULAR DISHES <img src={Icon} alt="food icon" /></h1>
                <h1 className="text-center text-4xl sm:text-5xl font-black text-[var(--dark)] ">Best selling Dishes</h1>
                <div className="container grid  md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items?.bestSellingItems.map((item, index) => (
                        <BgScrollCard key={index} data={item} />
                    ))}
                </div>

                <div className='w-48 h-[60px] m-auto  '>

                <ButtonIn iconBg={true} icon='fa-solid fa-arrow-right'  title="VIEW ALL ITEM"/>
                </div>
            </div>
        </>
    )
}

export default BestSelling
