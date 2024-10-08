import React from 'react'
import HeroBanner from './heroBanner/HeroBanner'
import PopularItemss from './popularItems/PopularItemss'
import About from './About'
import OfferCard from '../../components/cards/OfferCard'
import items from '../../settings/data/items';
import BestSelling from './bestSelling/BestSelling'


const Home = () => {
  return (
    <>
      <HeroBanner />
      <PopularItemss />

      {/*  Offer Section */}
      <div className={` w-full bg-[var(--bg2)] px-8 sm:px-20 md:px-28 grid lg:grid-cols-2 xl:grid-cols-3 gap-2 `}>
        {items?.offerItems.map((item, index) => (
          <OfferCard key={index} data={item} />
        ))}
      </div>

      <About />
      <BestSelling />
    </>
  )
}

export default Home
