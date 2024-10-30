import Icon from '../../../assets/images/icon/titleIcon.svg'


const FoodMenu = () => {
  return (
   <>
     <div className={`h-full w-full bg-[var(--bg2)] p-2 sm:p-20 md:p-28 mt-8 sm:mt-0   `}>
        <div className="container m-auto flex items-center flex-col gap-2.5 bg-[var(--light)] py-20 sm:py-24 px-2  sm:px-4 rounded-3xl   ">
          <h1 className='flex justify-center items-center max-w-xl text-[var(--contrast2)] font-bold text-lg gap-2 uppercase ' > <img src={Icon} alt="food icon" />FOOD MENU <img src={Icon} alt="food icon" /></h1>
          <h1 className="text-center text-[40px] max-w-xl leading-[50px] font-black text-[var(--dark)]  capitalize ">Fresheat Foods Menu</h1>

          <div className='w-40 h-[50px] '>

          </div>
        </div>


      </div>
   </>
  )
}

export default FoodMenu
