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
import bulb from "../images/Frame2.svg";
import book from "../images/book.svg";
import pen from "../images/Frame3.svg";
import develop from "../images/develop.svg";
import text from "../images/text.svg";
import Footer from "./Footer";
import Chioma from "../images/Frame 3232834.png";
import Nathan from "../images/Frame 3232825.png";
import flowChart from "../images/Group 625857.png";
import image1 from "../images/Splashscreen 1.png";
import image2 from "../images/Onboarding screen 1.png";
import image3 from "../images/Dashboard 1.png";
import image4 from "../images/investments 1.png";
import image5 from "../images/Third party 1.png";
import image6 from "../images/Investments 115.png";
import image7 from "../images/More 1.png";
import image8 from "../images/Profile 1.png";
import image9 from "../images/Input BVN 1.png";
import image10 from "../images/Upload ID card 1.png";
const FSDH = ({ scrollPosition }) => {
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
                  FSDH Mobile Application Case Study
                </h1>
              </div>
              <div className="px-7">
                <div className="pt-[7rem]">
                  <p className="  font-kumbh text-[1.25rem] font-[500]">
                    Reduce cost by automating the traditional way of using pen
                    and paper of providing services on the go.
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
                              <p>Logistics</p>
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
                    <div className="mb-5">
                      <div className="tags flex gap-2 items-center ">
                        <img src={user} alt="" className="w-[1.2rem]" />
                        <div className="flex gap-2 items-center">
                          <p className="tags-placeholder">Team Members: </p>
                          <div className=" font-kumbh">
                            <div className="">
                              <p className="text-white font-kumbh  text-[0.9rem] font-[600]">
                                <a
                                  href=""
                                  className=" underline underline-offset-2 decoration-[1px] text-[0.85rem]"
                                >
                                  Debbie Bashorun
                                </a>
                                (Senior Product Designer)
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="design-process pt-10">
                  <div className="halo-box ">
                    <div>
                      <h3>Project Overview</h3>
                      <p>
                        I was contacted by a senior product designer (who happen
                        to be my design mentor) to work alongside her in
                        designing a system that automates the asset management's
                        offerings and processes for an investment bank's
                        customers. The investment bank is looking to reduce cost
                        by automating the traditional way of using pen and paper
                        of providing services on the go, via mobile and web.
                      </p>
                    </div>
                  </div>
                  <div className="halo-box">
                    <h3>About FSDH</h3>
                    <p>
                      FSDH is a Nigerian Asset Management Bank with branches
                      throughout the country. FSDH Asset Management has chosen
                      to design a mobile app that will allow her customers to
                      buy and sell investment products whenever they want,
                      without having to speak with a relationship manager or
                      send an instruction. This app would allow new users to
                      sign up for an FSDH Asset Management account, refer
                      non-asset management customers, and subscribe to my
                      investment product as well as redeem their subscription.
                    </p>
                  </div>
                  <div className="halo-box">
                    <h3>My Role</h3>
                    <p>
                      I collaborated with a senior designer (who served as my
                      design mentor), a product manager, a graphic designer, and
                      developers. This project's budgeted schedule was 8 months
                      till we had a live product. Well, this product is nearing
                      completion, and we're iterating depending on the usability
                      test results.
                    </p>
                  </div>
                  <div className="halo-box">
                    <h3>Design Process</h3>
                    <p>
                      I collaborated with a senior designer (who served as my
                      design mentor), a product manager, a graphic designer, and
                      developers. This project's budgeted schedule was 8 months
                      till we had a live product. Well, this product is nearing
                      completion, and we're iterating depending on the usability
                      test results.
                    </p>
                  </div>
                  <div className="dia-flex flex gap-2 items-start justify-between py-8 flex-wrap">
                    <div className="col-flex">
                      <div className="col-bg bg-[#e54c4c]">
                        <img src={book} alt="" className="w-6" />
                        <h4>1. Discover</h4>
                      </div>
                      <div className="halo-col-text">
                        <p>Research on our users and creation of persona(s)</p>
                      </div>
                    </div>
                    <div className="col-flex">
                      <div className="halo-col-text mt-[3.5rem] ">
                        <p>
                          Brainstorming of ideas to answer the need of our
                          persona(s)
                        </p>
                      </div>
                      <div className="col-bg bg-[#f1858e]">
                        <img src={bulb} alt="" className="w-8" />
                        <h4>2. Describe</h4>
                      </div>
                    </div>
                    <div className="col-flex">
                      <div className="col-bg bg-[#f7d155]">
                        <img src={pen} alt="" className="w-8" />
                        <h4>3. Design</h4>
                      </div>
                      <div className="halo-col-text ">
                        <p>
                          Creation of user journeys, userflows and design of our
                          product
                        </p>
                      </div>
                    </div>

                    <div className="col-flex">
                      <div className="halo-col-text mt-[3.5rem] ">
                        <p>
                          Development process of turning the hi-fi designs into
                          code
                        </p>
                      </div>
                      <div className="col-bg bg-[#62e0d0]">
                        <img src={develop} alt="" className="w-8" />
                        <h4>4. Develop</h4>
                      </div>
                    </div>
                    <div className="col-flex">
                      <div className="col-bg bg-[#7b96f8]">
                        <img src={text} alt="" className="w-8" />
                        <h4>5. Text</h4>
                      </div>
                      <div className="halo-col-text ">
                        <p>
                          User testing is being carried out ahead of launch date
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="halo-box">
                    <h3>Bckground Research</h3>
                    <p>
                      Before deciding to design the product, the team conducted
                      some customer research, and as a result, they shared some
                      of their findings with us. In addition, the team, which
                      included a product manager and a graphic designer, spent
                      time designing user flows and wireframes in addition to
                      the requirement document. Users have also requested a way
                      to invest in the company's products at their leisure,
                      without having to speak with a relationship manager,
                      according to the team.
                    </p>
                  </div>
                  <div className="halo-box">
                    <h3>Business Goals</h3>
                    <ul className="mt-3 font-kumbh text-[0.95rem] font-[400] leading-9">
                      <li>
                        1. Support calls should be limited or non-existent
                      </li>
                      <li>2. High customer conversion</li>
                      <li>
                        3. Employing less support employees and relationship
                        managers generates more revenue.
                      </li>
                    </ul>
                  </div>
                  <div className="halo-box">
                    <h3>Key Questions</h3>
                    <ul className="mt-3 font-kumbh text-[0.95rem] font-[400] leading-9">
                      <li>
                        1. What is the ideal way for users to purchase our
                        investment offerings/products at their leisure?t
                      </li>
                      <li>
                        2. How can we get these investment opportunities into
                        the hands of our users, on the go?n
                      </li>
                      <li>
                        3. How can we automate the process so that they can buy
                        and sell assets independently?
                      </li>
                      <li>
                        4. How can we make the process more intuitive and
                        user-friendly?
                      </li>
                      <li>
                        3. How can we save our users' important time while also
                        making more money?
                      </li>
                    </ul>
                  </div>
                  <div className="halo-box">
                    <h3>User Persona(s)</h3>
                    <p>
                      Our customers are classified into two categories: affluent
                      customers and high-network individuals (HNI). The upwardly
                      mobile, the socialite, and the tech-executive are the
                      three personas that make up the Affluent Customers. The
                      HNIs are divided into three groups: Blue Bloods,
                      Technophiles, and Devout. To reach them, we needed to make
                      sure the barrier to entry was low, so they could join tier
                      0, where all they needed was BVN to register an account
                      and utilize the app's services.
                    </p>
                  </div>
                  <div className=" overflow-auto scroll-container mb-7">
                    <LazyLoadImage
                      alt="LOADING"
                      src={Chioma}
                      effect="blur"
                      opacity={1.2}
                      placeholderSrc="black-and-white"
                      className="min-w-[70rem]"
                      scrollPosition={scrollPosition}
                    />
                  </div>
                  <div className=" overflow-auto scroll-container mb-10">
                    <LazyLoadImage
                      alt="LOADING"
                      src={Nathan}
                      effect="blur"
                      opacity={1.2}
                      placeholderSrc="black-and-white"
                      className="min-w-[70rem]"
                      scrollPosition={scrollPosition}
                    />
                  </div>
                  <div className="halo-box">
                    <h3>Userflow of a feature(Wallet Creation)</h3>
                  </div>
                  <div className=" overflow-auto scroll-container mb-10">
                    <LazyLoadImage
                      alt="LOADING"
                      src={flowChart}
                      effect="blur"
                      opacity={1.2}
                      placeholderSrc="black-and-white"
                      className="min-w-[70rem]"
                      scrollPosition={scrollPosition}
                    />
                  </div>
                  <div className="halo-box">
                    <h3>Hi-Fi Designs</h3>
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
                  </div>
                  <div className="halo-box">
                    <h3>Usability Testing</h3>
                    <p>
                      For the usability test, we worked alongside the project
                      managers. We tested with 10 participants virtually. The
                      participants were tested with 14 different test tasks in
                      the following areas : Create an account, Fund wallet,
                      Subscriptions, Transfer funds, Dashboard, Change password,
                      Generate statements, Liquidation, Reoccurring payments,
                      KYC Completion, Notification, Sign in, Support and Log
                      out.
                    </p>
                  </div>
                  <div className="halo-box">
                    <h3>Iterations</h3>
                    <p>
                      Iterations based on the test is currently ongoing and app
                      is currently in Test flight.
                    </p>
                  </div>

                  <div className="halo-box">
                    <h3>Lessons</h3>
                    <ul className="mt-3 font-kumbh text-[0.95rem] font-[400] leading-9">
                      <li>1. Prioritise experience over features</li>
                      <li>
                        2. First idea isn't your final and best idea, iterations
                        happen and modifications are made
                      </li>
                      <li>
                        3. Great designs have to be able to pair intuition with
                        logic. I came to understand that all ideas are
                        assumptions and therefore, all assumptions have to be
                        tested to see how well they scale in real-time.
                      </li>
                      <li>
                        4. The product development cycle is always ongoing and
                        never ending.
                      </li>
                    </ul>
                  </div>
                  <div className="halo-box pb-8" style={{ borderBottom: "2px solid #1f2123" }}>
                    <h3>Impacts</h3>
                    <p>Coming Soon!!!</p>
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

export default trackWindowScroll(FSDH);
