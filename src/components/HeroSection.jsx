import React from 'react'
import SideBar from './SideBar'
import HeroText from './HeroText'

const HeroSection = () => {
  function getCurrentBreakpoint() {
    const breakpoints = { 576: 'xs', 768: 'sm', 992: 'md', 1200: 'lg' };
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  
    return Object.entries(breakpoints).find(([breakpoint]) => viewportWidth < breakpoint)?.[1] || 'xl';
  }
  
  function logCurrentBreakpoint() {
    const currentBreakpoint = getCurrentBreakpoint();
    console.log(`Current Breakpoint: ${currentBreakpoint}`);
  }
  
  // Log the initial breakpoint
  logCurrentBreakpoint();
  
  // Listen for resize events and log the current breakpoint
  window.addEventListener('resize', logCurrentBreakpoint);
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