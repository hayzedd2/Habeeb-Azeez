import React from 'react'
import Navbar from './Navbar'
import SideBar from './SideBar'
import group1 from '../images/Group 625879.png'
import group2 from '../images/Group 625880.svg'
import group3 from '../images/landing page 2.svg'
import group4 from '../images/Group 625882.svg'
import group5 from '../images/Halo Website 1.svg'
import group6 from '../images/Group 625881.svg'
import figma from '../images/image 1.svg'
import { Link } from 'react-router-dom'
const CaseStudy = () => {
  return (
    <>
      <Navbar />
      <section className="min-h-screen w-[100vw] bg-[#111315] flex">
        <div className="w-1/5">
          <SideBar />
        </div>
        <div className="w-4/5 max-h-screen overflow-auto">
          <div className="pt-[8rem] pb-10">
            <div className=" px-7  text-white ">
              <div className="heading">
                <h1 className=" font-kumbh font-[600] text-[1.3rem]">
                  My Case Studies
                </h1>
              </div>
              <div className="case-study-grid  mt-5">
                  <Link to={'/case-study/halo-invest'}>
                  <div className="case-study-box-1 case-study-box bg-[#143284]">
                        <h3>Halo Invest Mobile Application</h3>
                        <h4>Assisting communities and its members in acquiring wealth and the financial literacy necessary to maintain it</h4>
                        <p className='flex items-center gap-1'>Proudly designed with Figma <img src={figma} className='w-3' alt="" /></p>
                        <div className="img-box flex items-center justify-center">
                            <img src={group1} className='w-[13rem]' alt="" />
                        </div>
                    </div>
                  </Link>
                  <Link to={'/case-study/express'}>
                  <div className="case-study-box-2 case-study-box bg-[#FFBD6A]">
                        <h3>Express Mobile Application</h3>
                        <h4 className='max-w-[17rem]'>A step-by step solution to the process of ordering a courier delivery service on mobile devices.</h4>
                        <p className='flex items-center gap-1'>Proudly designed with Figma <img src={figma} className='w-3' alt="" /></p>
                        <div className="img-box flex items-end justify-end">
                            <img src={group2} className='w-[13rem]' alt="" />
                        </div>
                    </div>
                  </Link>
                  <Link>
                  <div className="case-study-box-3 case-study-box bg-[#002642]">
                        <h3>Reown Website and Web App</h3>
                        <h4>Building a community of safe drivers who are interested in recording their vehicle's usage, repairs, and maintenance history.</h4>
                        <p className='flex items-center gap-1'>Proudly designed with Figma <img src={figma} className='w-3' alt="" /></p>
                        <div className="img-box flex items-center justify-center">
                            <img src={group3} className='mt-2' alt="" />
                        </div>
                    </div>
                  </Link>
                  <Link>
                  <div className="case-study-box-3 case-study-box bg-[#004987]">
                        <h3>FSDH Mobile Application</h3>
                        <h4>This app allow users to sign up for an Asset Management account, refer non-asset management customers, and subscribe to any investment product as well as redeem their subscription.</h4>
                        <p className='flex items-center gap-1'>Proudly designed with Figma <img src={figma} className='w-3' alt="" /></p>
                        <div className="img-box flex items-end justify-end">
                            <img src={group4} className='w-[13rem]' alt="" />
                        </div>
                    </div>
                  </Link>
                  <Link>
                  <div className="case-study-box-3 case-study-box bg-[#143284]">
                        <h3>Halo Invest Website Design</h3>
                        <h4>Helping communities and their members build wealth and providing the financial literacy needed to sustain it.</h4>
                        <p className='flex items-center gap-1'>Proudly designed with Figma <img src={figma} className='w-3' alt="" /></p>
                        <div className="img-box flex items-center justify-center">
                            <img src={group5} className='mt-3' alt="" />
                        </div>
                    </div>
                  </Link>
                  <Link>
                  <div className="case-study-box-3 case-study-box bg-[#0066f5]">
                        <h3>Storebooks Mobile Application</h3>
                        <h4>Helping small business owners keep track of their revenue and expenses, manage their customers, and issue receipts.</h4>
                        <p className='flex items-center gap-1'>Proudly designed with Figma <img src={figma} className='w-3' alt="" /></p>
                        <div className="img-box flex items-end justify-end">
                            <img src={group6} className='w-[13.5rem]' alt="" />
                        </div>
                    </div>
                  </Link>
              </div>
            
             
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CaseStudy