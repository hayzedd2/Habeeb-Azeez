import React from 'react'
import SideBar from './SideBar'
import HeroText from './HeroText'

const HeroSection = () => {
  return (
    <section className='min-h-screen w-[100vw] bg-[#111315] flex'>
        <div className="w-1/5 sm:hidden  xl:block">
            <SideBar/>
        </div>
        <div className="xl:w-4/5 sm:w-full">
            <HeroText/>
        </div>
    </section>
  )
}

export default HeroSection