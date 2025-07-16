import React from 'react'
import Hero from '../components/Hero'
import Arrivals from '../components/Arrivals'
import LatestCollection from '../components/LatestCollection'
import BestSellers from '../components/BestSellers'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'

const Home = () => {
  return (
    <div>
      <Hero />
      <Arrivals/>
      <LatestCollection />
      <BestSellers />
      <OurPolicy />
      <NewsletterBox />
    </div>
  )
}

export default Home
 