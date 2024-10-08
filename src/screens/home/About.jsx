import Icon from '../../assets/images/icon/titleIcon.svg'
import ButtonIn from '../../components/ui/buttons/ButtonIn'

const About = () => {
  return (
    <>

      <div className={`h-full w-full bg-[var(--bg2)] p-2 sm:p-20 md:p-28 mt-8 sm:mt-0  `}>
        <div className="container m-auto flex items-center flex-col gap-2.5 bg-[var(--light)] py-20 sm:py-28 px-2  sm:px-4    ">
          <h1 className='flex justify-center items-center max-w-xl text-[var(--contrast2)] font-bold text-lg gap-2 uppercase ' > <img src={Icon} alt="food icon" /> About us <img src={Icon} alt="food icon" /></h1>
          <h1 className="text-center text-[40px] max-w-xl leading-[50px] font-black text-[var(--dark)]  capitalize ">Variety of flavours from american cuisine</h1>
          <p className='text-[var(--text)] leading-7 max-w-xl text-center '>It is a long established fact that a reader will be distracted the readable content of a page when looking at layout the point established fact that</p>
          <div className='w-40 h-[50px] '>

            <ButtonIn title="ORDER NOW" icon='fa-solid fa-arrow-right' iconBg={true} />
          </div>
        </div>


      </div>
    </>
  )
}

export default About
