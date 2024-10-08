import Icon from '../../assets/images/icon/titleIcon.svg'

const About = () => {
  return (
  <>
  
  <div className={`h-full w-full bg-[var(--bg2)] p-8 sm:p-20 md:p-28 flex items-center flex-col gap-8 `}>
                <h1 className='flex justify-center items-center text-[var(--contrast2)] font-bold text-lg gap-2 uppercase ' > <img src={Icon} alt="food icon" /> About us <img src={Icon} alt="food icon" /></h1>
                <h1 className="text-center text-5xl font-bold text-[var(--dark)] lg:w-[50%] capitalize ">Variety of flavours from american cuisine</h1>


            </div>
            </>
  )
}

export default About
