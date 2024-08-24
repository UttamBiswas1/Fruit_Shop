import React from 'react'
import Hero from '../components/Hero/Hero'
import Banner from '../components/Banners/Banner'
import Banner2 from '../components/Banners/Banner2'
import Banner3 from '../components/Banners/Banner3'
import Menus from '../components/Menus/Menus'

const Home = () => {
  return (
    <div className='z-10'>
        <Hero />
        <Menus/>
        <Banner/>
        <Banner2 />
        <Banner3 />
    </div>
  )
}

export default Home;
