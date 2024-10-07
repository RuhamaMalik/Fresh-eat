import Icon from '../../../assets/images/icon/titleIcon.svg'
import Item1 from '../../../assets/images/food-items/item1_1.png'
import Item2 from '../../../assets/images/food-items/item1_2.png'
import Item3 from '../../../assets/images/food-items/item1_3.png'
import Item4 from '../../../assets/images/food-items/item1_4.png'
import PopularItemsCarousel from './PopularItemsCarousel'

const data = [
    {
        id: 1,
        title: 'Chicken Pizza',
        price: 26.99,
        image: Item1,
    },
    {
        id: 2,
        title: 'Egg and Cucumber',
        price: 28.99,
        image: Item2
    },
    {
        id: 3,
        title: 'Chicken Fried Rice',
        price: 100.99,
        image:Item3,
    },
    {
        id: 4,
        title: 'Chicken Leg Piece',
        price: 20.99,
        image: Item4,
    },
    {
        id: 5,
        title: 'Egg and Cucumber',
        price: 28.99,
        image: Item2,
    }
]

const PopularItemss = () => {

    return (
        <>
            <div className={`min-h-full w-full bg-[var(--bg2)] p-8 sm:p-20 md:p-28 flex flex-col gap-8 `}>
                <h1 className='flex justify-center items-center text-[var(--contrast2)] font-bold text-lg gap-2 uppercase ' > <img src={Icon} alt="food icon" /> Best Food <img src={Icon} alt="food icon" /></h1>
                <h1 className="text-center text-5xl font-bold text-[var(--dark)] ">Popular Food Items</h1>


                <PopularItemsCarousel data={data} />
            </div>
        </>
    )
}

export default PopularItemss
