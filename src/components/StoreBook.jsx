import React from "react";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import tag from "../images/tag.svg";
import user from "../images/user.svg";
import tool from "../images/pen-tool.svg";
import SideBar from "./SideBar";
import Navbar from "./Navbar";
import person1 from "../images/Rectangle 18880.png";
import person2 from "../images/Rectangle 18882.png";
import person3 from "../images/Rectangle 18881.png";
import flowChart from "../images/Group 625859.png";
import Aa from "../images/Aa.svg";
import image1 from "../images/Splashscreen 2.png";
import image2 from "../images/Onboarding 4 1.png";
import image3 from "../images/Onboarding 5 1.png";
import image4 from "../images/Onboarding 6 1.png";
import image5 from "../images/Empty 1.png";
import image6 from "../images/Empty 3.png";
import image7 from "../images/Empty 2.png";
import image8 from "../images/Empty 4.png";
import image9 from '../images/Dashboard 2.png'
import image10 from '../images/Dashboard-1 1.png'
import image11 from '../images/Customers 1.png'
import image12 from '../images/Customers-1 1.png'
import image13 from '../images/Customers-2 1.png'
import image14 from '../images/empty 25.png'
import image15 from '../images/Filled 1.png'
import image16 from '../images/empty 15.png'
import image17 from '../images/Empty 5.png'
import image18 from '../images/Sales Details 1.png'
import image19 from '../images/Sales Details-1 1.png'
import image20 from '../images/Expenses Details 1.png'
import image21 from '../images/Expenses Details-1 1.png'
import image22 from '../images/Account 1.png'
import Footer from "./Footer";
const StoreBook = ({ scrollPosition }) => {
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
                  Storebooks Mobile Application Case Study
                </h1>
              </div>
              <div className="px-7">
                <div className="pt-[7rem]">
                  <p className="  font-kumbh text-[1.25rem] font-[500]">
                    The simplest book-keeping software to control business
                    operations for Nigerian small scale businesses.
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
                              <p>Management</p>
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
                    <h3>Background</h3>
                    <p>
                      Storebooks is a bookkeeping application that allows users
                      (mostly online small companies) who want to track their
                      sales in terms of profit and loss. Users of this
                      application would be able to save customer information as
                      well as record orders and expenses.
                    </p>
                  </div>
                  <div className="halo-box">
                    <h3>Challenge</h3>
                    <p>
                      Online small businesses struggle to correctly record their
                      orders and expenses, which makes it difficult for them to
                      track their revenues and losses. The difficulty lies in
                      creating a solution that enables them to record their
                      orders, expenses, and profit and loss.
                    </p>
                  </div>
                  <div className="halo-box">
                    <h3>The Goal</h3>
                    <p>
                      Design an easy to use mobile phone application that allows
                      users to record their orders, expenses, profit and loss.
                    </p>
                  </div>
                  <div className="halo-box">
                    <h3>Targeted Audience</h3>
                    <p>
                      Storebooks mobile application is targeted towards online
                      small scale businesses such as WhatsApp Vendors, Instagram
                      Vendors, Twitter Vendors, Small Scale online E-commerce
                      stores.
                    </p>
                  </div>
                  <div className="halo-screen-grid mb-10">
                    <LazyLoadImage
                      alt="LOADING"
                      src={person1}
                      effect="blur"
                      opacity={1.2}
                      placeholderSrc="black-and-white"
                    />
                    <LazyLoadImage
                      alt="LOADING"
                      src={person2}
                      effect="blur"
                      opacity={1.2}
                      placeholderSrc="black-and-white"
                    />
                    <LazyLoadImage
                      alt="LOADING"
                      src={person3}
                      effect="blur"
                      opacity={1.2}
                      placeholderSrc="black-and-white"
                    />
                  </div>
                  <div className="halo-box">
                    <h3>Design Process</h3>
                    <p>
                      I had to call the product owner right away so that we
                      could both clearly comprehend the problem. After that, we
                      looked at the market to see if other companies were
                      attempting to solve the same problem, and we concluded
                      that we could dominate the market by offering the best
                      solution. Next, we worked together to draft the userflow
                      before moving on to the hi-fi designs.
                    </p>
                  </div>

                  <div className="scenario mb-10">
                    <div className="scenario-grid flex">
                      <div className="scenario-bg-1 bg-[#002a48]">
                        <h3>Discover</h3>
                        <p>Research on our users and creation of persona(s).</p>
                      </div>
                      <div className="scenario-bg-1 bg-[#eb5e55]">
                        <h3>Describe</h3>
                        <p>
                          Brainstorming of ideas to answer the need of our
                          persona(s).
                        </p>
                      </div>
                      <div className="scenario-bg-1 bg-[#fcaf58]">
                        <h3>Design</h3>
                        <p>
                          Creation of user journeys, userflows and design of our
                          product
                        </p>
                      </div>
                      <div className="scenario-bg-1 bg-[#5386e4]">
                        <h3>Develop and Test</h3>
                        <p>
                          Development process of turning the hi-fi designs into
                          code and testing with users.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="halo-box">
                    <h3>User Flow</h3>
                    <p>
                      The paths users will take to achieve their goals are laid
                      out in the user flow for the application, which also helps
                      users see how they should navigate the system.
                    </p>
                  </div>
                  <div className=" overflow-auto scroll-container mb-10">
                    <LazyLoadImage
                      alt="LOADING"
                      src={flowChart}
                      effect="blur"
                      opacity={1.2}
                      placeholderSrc="black-and-white"
                      className="min-w-[70rem]"
                    />
                  </div>
                  <div className="typography mt-10 mb-20">
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
                              Circular Std
                            </h1>
                          </div>
                          <div className=" font-kumbh">
                            <div className="flex gap-8 font-kumbh font-[500] text-[0.95rem] mt-6">
                              <p>Book</p>
                              <p style={{ fontWeight: "500" }}>Medium</p>

                              <p style={{ fontWeight: "600" }}>Bold</p>
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
                          <div className="circular-color-div bg-[#0066F5]">
                            <p>#0066F5</p>
                          </div>
                          <div className="circular-color-div bg-[#FFFFFF] text-[#1c2023]">
                            <p>#FFFFFF</p>
                          </div>
                          <div className="circular-color-div bg-[#E5F0FE] text-[#1c2023]">
                            <p>#E5F0FE</p>
                          </div>
                          <div className="circular-color-div bg-[#F2F7FF] text-[#1c2023]">
                            <p>#F2F7FF</p>
                          </div>
                          <div className="circular-color-div bg-[#2FBF71]">
                            <p>#2FBF71</p>
                          </div>
                          <div className="circular-color-div bg-[#EB5757] ">
                            <p>#EB5757</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="halo-box">
                    <h3>Onboarding</h3>
                  </div>
                  <div className="halo-screen-grid">
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
                  </div>
                  <div className="halo-box">
                    <h3>Authentication</h3>
                  </div>
                  <div className="halo-screen-grid">
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
                    <LazyLoadImage
                      alt="LOADING"
                      src={image7}
                      effect="blur"
                      opacity={1.2}
                      placeholderSrc="black-and-white"
                      scrollPosition={scrollPosition}
                    />
                    <LazyLoadImage
                      alt="LOADING"
                      src={image8}
                      effect="blur"
                      opacity={1.2}
                      placeholderSrc="black-and-white"
                      scrollPosition={scrollPosition}
                    />
                  </div>
                  <div className="halo-box">
                    <h3>Other Screens</h3>
                  </div>
                  <div className="halo-screen-grid">
                  <LazyLoadImage
                      alt="LOADING"
                      src={image9}
                      effect="blur"
                      opacity={1.2}
                      placeholderSrc="black-and-white"
                      scrollPosition={scrollPosition}
                    />
                  <LazyLoadImage
                      alt="LOADING"
                      src={image10}
                      effect="blur"
                      opacity={1.2}
                      placeholderSrc="black-and-white"
                      scrollPosition={scrollPosition}
                    />
                  <LazyLoadImage
                      alt="LOADING"
                      src={image11}
                      effect="blur"
                      opacity={1.2}
                      placeholderSrc="black-and-white"
                      scrollPosition={scrollPosition}
                    />
                  <LazyLoadImage
                      alt="LOADING"
                      src={image12}
                      effect="blur"
                      opacity={1.2}
                      placeholderSrc="black-and-white"
                      scrollPosition={scrollPosition}
                    />
                  <LazyLoadImage
                      alt="LOADING"
                      src={image13}
                      effect="blur"
                      opacity={1.2}
                      placeholderSrc="black-and-white"
                      scrollPosition={scrollPosition}
                    />
                  <LazyLoadImage
                      alt="LOADING"
                      src={image14}
                      effect="blur"
                      opacity={1.2}
                      placeholderSrc="black-and-white"
                      scrollPosition={scrollPosition}
                    />
                  <LazyLoadImage
                      alt="LOADING"
                      src={image15}
                      effect="blur"
                      opacity={1.2}
                      placeholderSrc="black-and-white"
                      scrollPosition={scrollPosition}
                    />
                  <LazyLoadImage
                      alt="LOADING"
                      src={image16}
                      effect="blur"
                      opacity={1.2}
                      placeholderSrc="black-and-white"
                      scrollPosition={scrollPosition}
                    />
                  <LazyLoadImage
                      alt="LOADING"
                      src={image17}
                      effect="blur"
                      opacity={1.2}
                      placeholderSrc="black-and-white"
                      scrollPosition={scrollPosition}
                    />
                  <LazyLoadImage
                      alt="LOADING"
                      src={image18}
                      effect="blur"
                      opacity={1.2}
                      placeholderSrc="black-and-white"
                      scrollPosition={scrollPosition}
                    />
                  <LazyLoadImage
                      alt="LOADING"
                      src={image19}
                      effect="blur"
                      opacity={1.2}
                      placeholderSrc="black-and-white"
                      scrollPosition={scrollPosition}
                    />
                  <LazyLoadImage
                      alt="LOADING"
                      src={image20}
                      effect="blur"
                      opacity={1.2}
                      placeholderSrc="black-and-white"
                      scrollPosition={scrollPosition}
                    />
                  <LazyLoadImage
                      alt="LOADING"
                      src={image21}
                      effect="blur"
                      opacity={1.2}
                      placeholderSrc="black-and-white" 
                      scrollPosition={scrollPosition}
                    />
                  <LazyLoadImage
                      alt="LOADING"
                      src={image22}
                      effect="blur"
                      opacity={1.2}
                      placeholderSrc="black-and-white"
                      scrollPosition={scrollPosition}
                    />
                  
                  </div>
                  <div className="halo-box pt-5 pb-8"  style={{ borderBottom: "2px solid #1f2123" }}>
                    <h3>Lessons</h3>
                    <p>Working on this project helped me realize that many online vendors would prefer the digitalization of the bookkeeping process to the conventional pen and paper method, and they would be content to be able to track their earnings and losses.</p>
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

export default trackWindowScroll(StoreBook);
