import CtaBg from "../../assets/images/bg/ctaBG1_1.jpg";
import CtaThumb from "../../assets/images/cta/ctaThumb1_1.png";
import ButtonIn from '../../components/ui/buttons/ButtonIn'


const Cta = () => {
  return (
    <div
    className="bg-red-300 bg-no-repeat bg-cover p-10 my-4 sm:p-20 md:p-28 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-2"
    style={{ backgroundImage: `url(${CtaBg})` }}
  >

    <img src={CtaThumb} alt="cta thumb" className="w-full object-cover lg:order-last    float-x" />

    <div className="relative flex flex-col items-center lg:items-start gap-6">
      <h3 className="text-[var(--contrast)] text-xl font-extrabold my-4 animate__animated animate__slideInRight">WELCOME FRESHEAT</h3>
      <h1 className="text-[var(--light)] text-4xl md:text-5xl 2xl:text-6xl font-extrabold animate__animated animate__slideInRight">TODAY SPECIAL FOOD</h1>
      <h3 className="text-[var(--contrast2)] text-2xl font-extrabold my-4 animate__animated animate__slideInRight">Limited Time Offer</h3>
      <div className="w-44 h-[52px] animate__animated animate__slideInRight">
        <ButtonIn title="ORDER NOW" icon="fa-solid fa-arrow-right" iconBg={true} />
      </div>
    </div>
  </div>
  )
}

export default Cta
