import React from "react";
import tag from "../images/tag.svg";
import user from "../images/user.svg";
import tool from "../images/pen-tool.svg";
import SideBar from "./SideBar";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import earnImage from '../images/start earning as a financer.png'
import driveImage from '../images/drive now and pay later.png'
import Aa from '../images/Aa.svg'
import homePageImage from '../images/Group 625866.png'
import { LazyLoadImage , trackWindowScroll } from "react-lazy-load-image-component";
import image1 from '../images/Group 625867.png'
import image2 from '../images/Group 625868.png'
import image3 from '../images/Group 625869.png'
import image4 from '../images/Group 625870.png'
import image5 from '../images/Group 625871.png'
import image6 from '../images/Group 625872.png'
import Footer from "./Footer";
const ReOwn = ({scrollPosition}) => {
  return (
    <>
      <Navbar />
      <section className="min-h-screen w-[100vw] bg-[#111315] flex">
        <div className="w-1/5">
          <SideBar />
        </div>
        <div className="w-4/5 max-h-screen overflow-y-auto overflow-x-hidden">
          <div className="pt-[5rem]">
            <div className="   text-white ">
              <div
                className="flex gap-5 items-center px-7 pb-5 pt-7 fixed bg-[#111315]  z-30  w-4/5"
                style={{ borderBottom: "1.5px solid #2c2e30" }}
              >
                <Link to={"/case-study"}>
                  <div className="arrow flex justify-center items-center rounded-full w-8 h-8 bg-[#ffBD6A]">
                    <FaArrowLeft className="text-[1rem] font-[400] text-black" />
                  </div>
                </Link>
                <h1 className=" font-kumbh font-[600] text-[1.05rem] text-grey">
                  Reown Website and Web Application Case Study
                </h1>
              </div>
              <div className="px-7">
                <div className="pt-[7rem]">
                  <p className="  font-kumbh text-[1.25rem] font-[500]">
                    The best car deals and services in Nigeria with detailed
                    maintenance history & affordable financing solution.
                  </p>
                  <div
                    className="w-full"
                    style={{ borderBottom: "1.5px solid #2c2e30" }}
                  >
                    <div className="flex  w-full items-center flex-wrap gap-10 mt-5 pb-6">
                      <div className="tags flex gap-2 items-center ">
                        <img src={tag} alt="" className="w-[1.2rem]" />
                        <div className="flex gap-2 items-center">
                          <p className="tags-placeholder">Project Tags: </p>
                          <div className="flex gap-2 font-kumbh">
                            <div className="bg-tags bg-[#53b3cb]">
                              <p>UX design</p>
                            </div>
                            <div className="bg-tags bg-[#fdf0d5] ">
                              <p>UI design</p>
                            </div>
                            <div className="bg-tags bg-[#5386e4] ">
                              <p>P2P</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="role">
                        <div className="tags flex gap-2 items-center ">
                          <img src={user} alt="" className="w-[1.2rem]" />
                          <div className="flex gap-2 items-center">
                            <p className="tags-placeholder">My Role: </p>
                            <div className="flex gap-2 font-kumbh">
                              <div className="bg-tags bg-[#fcaf58]">
                                <p>Product Designer</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tools">
                        <div className="tags flex gap-2 items-center ">
                          <img src={tool} alt="" className="w-[1.1rem]" />
                          <div className="flex gap-2 items-center">
                            <p className="tags-placeholder">Tools Used: </p>
                            <div className="flex gap-2 font-kumbh">
                              <div className="bg-tags bg-[#53b3cb]">
                                <p>Figma</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-10">
                  <div className="halo-box">
                    <h3>Project Overview</h3>
                    <p>
                      I worked with the founders to define and optimize the user
                      journey on the first version of the product, from the
                      activation to revenue. Reown is a peer-to-peer automobile
                      financing network that matches creditworthy borrowers, who
                      need funding urgently and are prepared to make monthly
                      payments, with car financers interested in earning passive
                      monthly income.
                    </p>
                  </div>

                  <div className="halo-box">
                    <h3>Vision Statement</h3>
                    <p>
                      The platform is focused on building a community of safe
                      drivers who are interested in recording their vehicle's
                      usage, repairs, and maintenance history and making it
                      accessible to the public.
                    </p>
                  </div>
                  <div className="halo-box">
                    <h3>My Role</h3>
                    <p>
                      We leveraged on the quantitative/qualitative user research
                      and journey mapping, I was pivotal in converting insights
                      and requirements derived from user research and business
                      stakeholders into design specifications with defined
                      success metrics.
                    </p>
                  </div>
                  <div className="halo-box">
                    <h3>Design Process</h3>
                    <p>
                      The team did some customer research before deciding to
                      design the product, and as a result, they shared some of
                      their findings with us. Along with the requirement paper,
                      the team, which also comprised a product manager and an
                      illustrator, took the time to create user flows and
                      wireframes.
                    </p>
                  </div>
                  <div className="flex w-full justify-between items-center flex-wrap  mb-10">
                    <div className="skills-box bg-[#002a48]">
                      <p>Research</p>
                    </div>
                    <div className="skills-box bg-[#eb5e55]">
                      <p>Ideate</p>
                    </div>
                    <div className="skills-box bg-[#fcaf58]">
                      <p>Prototype</p>
                    </div>
                    <div className="skills-box bg-[#5386e4]">
                      <p>Deliver</p>
                    </div>
                  </div>
                  <div className="interview mb-10">
                    <div className="halo-box">
                      <h3>Key Questions</h3>

                      <ul className=" mt-4 font-kumbh text-[0.95rem] font-[400] leading-10">
                        <li>
                          1. Are you comfortable with a peer-to-peer lending
                          process?
                        </li>
                        <li>
                          2. What is your current employment status and monthly
                          income?
                        </li>
                        <li>
                          3. What is the maximum interest rate you are willing
                          to pay?
                        </li>
                        <li>
                          4. What is your budget for monthly car payments?
                        </li>
                        <li>
                          5. What is the condition of the car you plan to
                          finance? Is it new or used?
                        </li>
                        <li>
                          6. What is the make and model of the car you are
                          planning to finance??
                        </li>
                        <li>
                          7. How long do you plan on financing the car for?
                        </li>
                        <li>
                          8. Have you previously financed a car? If so, how did
                          that process go?
                        </li>
                        <li>
                          9. What did you like or dislike about the car
                          financing process you went through previously? 
                        </li>
                        <li>10. Are
                          there any lessons or insights you learned from your
                          previous car financing experience that you would like
                          to apply to your current financing process?</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mb-10">
                    <div className="halo-box">
                        <h3>Establishing user profiles</h3>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="basis-[35%] mt-10  items-start justify-start flex">
                            <img src={earnImage} className="" alt="" />
                        </div>
                        <div className="basis-[65%] items-end justify-end flex flex-col">
                            <p className="font-kumbh leading-8 text-[0.95rem]">Driving inclusion amongst low-mid income earners in the community via innovative peer-peer car financing (flexicars) which offers investment opportunity with passive monthly earnings for an individual (car financer) while the other individual is able to access flexible car ownership, drive now and pay later on monthly basis.</p>
                            <div className="mt-[-5.5rem]">
                            <img src={driveImage}  className="w-[30rem] h-[30rem]"  alt="" />
                            </div>
                        </div>
                    </div>
                  </div>
                  <div className="typography mb-10">
                  <div className="typo-box">
                    <h3>Typography and colors</h3>
                   <div className="flex flex-wrap ">
                   <div className="typo flex basis-[40%] items-start flex-col justify-start  flex-wrap mt-6">
                      <div className="">
                        <img
                          src={Aa}
                          className="w-[10.5rem] h-[10.5rem]"
                          alt=""
                        />
                      </div>
                      <div className=" font-kumbh mt-5 ">
                        <h4 className="text-[0.8rem]">FONT FAMILY</h4>
                        <h1 className="text-[2rem] font-[500] mt-5">
                            Avenir
                        </h1>
                      </div>
                      <div className=" font-kumbh">
                        <div className="flex gap-8 font-kumbh font-[500] text-[0.95rem] mt-6">
                          <p>Book</p>
                          <p>Roman</p>
                          <p>Medium</p>
        
                          <p style={{fontWeight : '600'}}>Black</p>
                        </div>
                        <div className="flex gap-10  font-kumbh font-[500] text-[0.85rem] mt-6 flex-wrap leading-7 ">
                          <p className="">
                            AaBbCcDdEeFfGgHhIiJjKkLlMmNn <br />
                            OoPpQqRrSsTtUuVvWwXxYyZz
                          </p>
                          <p>
                            0123456789 <br /> !@#$%^&*()
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="colors basis-[60%] grid grid-cols-3 gap-10">
                      <div className="circular-color-div bg-[#002642]">
                        <p>#002642</p>
                      </div>
                      <div className="circular-color-div bg-[#F3C969] text-[#1c2023]">
                        <p>#F3C969</p>
                      </div>
                      <div className="circular-color-div bg-[#0CCE6B] text-[#1c2023]">
                        <p>#0CCE6B</p>
                      </div>
                      <div className="circular-color-div bg-[#F2F9FE] text-[#1c2023]">
                        <p>#F2F9FE</p>
                      </div>
                      <div className="circular-color-div bg-[#575757]">
                        <p>#575757</p>
                      </div>
                      <div className="circular-color-div bg-[#FFFFFF] text-[#1c2023]">
                        <p>#FFFFFF</p>
                      </div>
                    </div>
                   </div>
                  </div>
                </div>
                <div className="website-homepage my-20">
                    <div className="halo-box">
                        <h3>Website Homepage</h3>
                    </div>
                    <LazyLoadImage
                      alt="LOADING"
                      src={homePageImage}
                      effect="blur"
                      opacity={1.2}
                      placeholderSrc="black-and-white"
                      scrollPosition={scrollPosition}
                    />
                    
                </div>
                <div className="webapp-screen flex flex-col gap-8">
                    <div className="halo-box">
                        <h3>Web App Screens</h3>
                    </div>
                <LazyLoadImage
                      alt="LOADING"
                      src={image1}
                      effect="blur"
                      opacity={1.2}
                      placeholderSrc="black-and-white"
                      scrollPosition={scrollPosition}
                    />
                <LazyLoadImage
                      alt="LOADING"
                      src={image2}
                      effect="blur"
                      opacity={1.2}
                      placeholderSrc="black-and-white"
                      scrollPosition={scrollPosition}
                    />
                <LazyLoadImage
                      alt="LOADING"
                      src={image3}
                      effect="blur"
                      opacity={1.2}
                      placeholderSrc="black-and-white"
                      scrollPosition={scrollPosition}
                    />
                <LazyLoadImage
                      alt="LOADING"
                      src={image4}
                      effect="blur"
                      opacity={1.2}
                      placeholderSrc="black-and-white"
                      scrollPosition={scrollPosition}
                    />
                <LazyLoadImage
                      alt="LOADING"
                      src={image5}
                      effect="blur"
                      opacity={1.2}
                      placeholderSrc="black-and-white"
                      scrollPosition={scrollPosition}
                    />
                <LazyLoadImage
                      alt="LOADING"
                      src={image6}
                      effect="blur"
                      opacity={1.2}
                      placeholderSrc="black-and-white"
                      scrollPosition={scrollPosition}
                    />
                </div>
                <div className="conclusion my-10"   style={{ borderBottom: "2px solid #1f2123" }}>
                   <div className="halo-box">
                   <h3>Conclusion</h3>
                    <p>I enjoyed working on this project a lot because of my love for cars and the knowledge I had about cars coupled with my design expertise made this project a successful one and I can’t wait to see how it evolves.</p>
                   </div>
                </div>
                <Footer/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default  trackWindowScroll(ReOwn);
