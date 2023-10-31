import React from 'react'
import SideBar from './SideBar'
import HeroText from './HeroText'

const HeroSection = () => {
  return (
    <section className='min-h-screen w-[100vw] bg-[#111315] flex'>
        <div className="w-1/5">
            <SideBar/>
        </div>
        <div className="w-4/5">
            <HeroText/>
        </div>
    </section>
  )
}

export default HeroSection