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
import Introimage from "../images/Group 308.svg";
import svg1 from "../images/Group 625791.svg";
import svg2 from "../images/Group 625792.svg";
import svg3 from "../images/Group 625793.svg";
import svg4 from "../images/Group 625794.svg";
import surveyImg1 from "../images/Group 625811.svg";
import surveyImg2 from "../images/Group 625810.svg";
import surveyImg3 from "../images/Group 625809.svg";
import surveyImg4 from "../images/Group 625812.svg";
import surveyImg5 from "../images/Group 625813.svg";
import uxImg from "../images/Group 625888.png";
import personaImg from "../images/Ellipse 30.svg";
import personaImg1 from "../images/Ellipse 23.svg";
import projectIcon from "../images/Group 625814.svg";
import sketch from "../images/Frame 3232823.png";
import image1 from "../images/Onboarding 8.png";
import image2 from "../images/Registration.png";
import image3 from "../images/Dashboard.png";
import image4 from "../images/Step 14.png";
import image5 from "../images/Step 12 2.png";
import image6 from "../images/Step 13 2.png";
import image7 from "../images/SPLASHSCREEN MOCKUP 2.png";
import image8 from "../images/ONBOARDING 1 MOCKUP 2.png";
import image9 from "../images/ONBOARDING 2 MOCKUP.png";
import image10 from "../images/ONBOARDING MOCKUP 4.png";
import image11 from "../images/SIGN UP MOCKUP 2.png";
import image12 from "../images/LOGIN MOCKUP EMPTY.png";
import image13 from "../images/RECOVER PASSWORD MOCKUP.png";
import image14 from "../images/OTP VERICATION MOCKUP.png";
import image16 from "../images/RESET PASSWORD SUCCESSFUL MOCKUP.png";
import image15 from "../images/RESET PASSWORD MOCKUP.png";
import image17 from "../images/HOMEPAGE MOCKUP 2.png";
import image18 from "../images/SEND A PACKAGE STEP 1  MOCKUP.png";
import image19 from "../images/SEND A PACKAGE STEP 2 MOCKUP 2.png";
import image20 from "../images/SEND A PACKAGE STEP 3 MOCKUP 2.png";
import image21 from "../images/SEND A PACKAGE STEP 4 MOCKUP 2.png";
import image22 from "../images/SEND A PACKAGE STEP 5 MOCKUP 2.png";
import image23 from "../images/Group 310.png";
import image24 from "../images/TRACK A SHIPMENT MOCKUP 2.png";
import image25 from "../images/MY CARD EMPTY STATE MOCKUP.png";
import image26 from "../images/MY CARDS MOCKUP.png";
import image27 from "../images/CARD ADDED MOCKUP.png";
import image28 from "../images/MY HISTORY EMPTY STATE MOCKUP.png";
import image29 from "../images/MY HISTORY MOCKUP.png";
import image30 from "../images/Group 3105.png";
import image31 from "../images/SETTINGS MOCKUP 2.png";
import Footer from "./Footer";

const Express = ({ scrollPosition }) => {
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
                  Express Mobile Application Case Study
                </h1>
              </div>
              <div className="px-7">
                <div className="pt-[7rem]">
                  <p className="  font-kumbh text-[1.25rem] font-[500]">
                    A step-by step solution to the process of ordering a courier
                    delivery service on mobile devices.
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
                  </div>
                </div>
                <div className="design-process pt-10">
                  <div
                    className="halo-box flex gap-20 "
                    style={{ marginBottom: "0px" }}
                  >
                    <div>
                      <h3>Introduction</h3>
                      <p>
                        Have you ever sat down at home and wondered if there is
                        a reputable mobile application available that you can
                        download to your mobile device to ask for a courier
                        service to come and pick up your package and deliver to
                        your selected location in 2 to 4 hours?
                      </p>
                    </div>
                    <img
                      src={Introimage}
                      className="w-[14rem] h-[13rem]"
                      alt=""
                    />
                  </div>
                  <div className="halo-box" style={{ marginTop: "0px" }}>
                    <div>
                      <h3>Challenge</h3>
                      <p>
                        Design a solution that enables consumers to use a
                        cashless system to request courier services on their
                        mobile phones, have them pick up their packages and
                        deliver them to the desired location.
                      </p>
                    </div>
                  </div>
                  <div className="halo-box">
                    <h3>My Design Process</h3>
                  </div>
                  <div className="design-grid">
                    <div className="design-box">
                      <img src={svg1} className="mb-4" alt="" />
                      <div>
                        <p className="font-[700] text-[1rem] mb-[0.4rem]">
                          Understand
                        </p>
                        <ul className="">
                          <li>Problem Research</li>
                          <li>Design Strategy</li>
                        </ul>
                      </div>
                    </div>
                    <div className="design-box">
                      <img src={svg2} className="mb-4" alt="" />
                      <div>
                        <p className="font-[700] text-[1rem] mb-[0.4rem]">
                          Research
                        </p>
                        <ul className="">
                          <li>Survey</li>
                          <li>User Persona</li>
                        </ul>
                      </div>
                    </div>
                    <div className="design-box">
                      <img src={svg3} className="mb-4" alt="" />
                      <div>
                        <p className="font-[700] text-[1rem] mb-[0.4rem]">
                          Ideate
                        </p>
                        <ul className="">
                          <li>Brainstorming</li>
                          <li>Information Architecture</li>
                          <li>User Flow</li>
                          <li>Paper Sketch</li>
                        </ul>
                      </div>
                    </div>
                    <div className="design-box">
                      <img src={svg4} className="mb-4" alt="" />
                      <div>
                        <p className="font-[700] text-[1rem] mb-[0.4rem]">
                          Visual Design
                        </p>
                        <ul className="">
                          <li>Wireframe</li>
                          <li>High- Fidelity</li>
                          <li>Prototype</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="user-experience">
                  <div className=" overflow-auto scroll-container mb-10">
                    <img src={uxImg} className="min-w-[70rem]" alt="" />
                  </div>
                </div>
                <div className="survey">
                  <div className="halo-box">
                    <h3>Survey</h3>
                    <p>
                      Using twitter polls and google forms, a survey of a group
                      of people was carried out. The aim of the poll was to
                      ascertain the most common "pain-points" experienced by
                      users while shipping a package through courier delivery
                      services.
                    </p>
                  </div>
                  <div className="survey-grid">
                    <div className="survey-box">
                      <img src={surveyImg1} alt="" />
                    </div>
                    <div className="survey-box">
                      <img src={surveyImg2} alt="" />
                    </div>
                    <div className="survey-box">
                      <img src={surveyImg3} alt="" />
                    </div>
                    <div className="survey-box">
                      <img src={surveyImg4} alt="" />
                    </div>
                    <div className="survey-box">
                      <img src={surveyImg5} alt="" />
                    </div>
                  </div>
                  <div className="halo-box">
                    <h3>Results from the survey</h3>
                    <p>
                      I asked people to record their responses through google
                      forms and twitter polls. Around 45 people participated in
                      filling the survey and making the research possible.
                    </p>
                  </div>
                </div>
                <div className="interview">
                  <div className="halo-box">
                    <h3>Interview Questions (Qualitative Research)</h3>
                    <ul className=" mt-5 font-kumbh text-[0.95rem] font-[400] leading-10">
                      <li>1. Can you tell me a bit about yourself?</li>
                      <li>2. What do you do for a living?</li>
                      <li>
                        3. How do you send parcels/Package to friends or loved
                        ones?
                      </li>
                      <li>4. How often do you use the courier service?</li>
                      <li>
                        5. Do you trust the courier service riders out there?
                      </li>
                      <li>6. How do you track your shipment?</li>
                      <li>7. How fast is the delivery process?</li>
                      <li>
                        8. Is there a standard price you pay for delivery?
                      </li>
                      <li>
                        9. When was the last time you used a delivery service?
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="scenario mb-10">
                  <div className="halo-box">
                    <h3>Scenario</h3>
                    <p>
                      During the research, i identified many different scenarios
                      and i kept my focus and developed the following:
                    </p>
                  </div>
                  <div className="scenario-grid flex">
                    <div className="scenario-bg bg-[#002a48]">
                      <h3>Scenario 1</h3>
                      <p>There is no efficient way to track packages</p>
                    </div>
                    <div className="scenario-bg bg-[#eb5e55]">
                      <h3>Scenario 2</h3>
                      <p>
                        People are unaware of standard courier delivery prices
                      </p>
                    </div>
                    <div className="scenario-bg bg-[#fcaf58]">
                      <h3>Scenario 3</h3>
                      <p>Parcels usually get delayed</p>
                    </div>
                    <div className="scenario-bg bg-[#5386e4]">
                      <h3>Scenario 4</h3>
                      <p>Security and trust is a great concern</p>
                    </div>
                  </div>
                </div>
                <div className="user-persona mb-10">
                  <div className="halo-box">
                    <h3>User Persona</h3>
                    <p>
                      The deep analysis of the survey helped me gather enough
                      insights and typical patterns from the results of the
                      survey. This made me come up with two different user
                      personas.
                    </p>
                  </div>
                  <div className="persona-grid">
                    <div className="persona-box">
                      <div className="user-box">
                        <img src={personaImg} alt="" />
                        <div>
                          {" "}
                          <h4>Ayinde Khaiyra</h4>
                          <h6>Sales Manager</h6>
                        </div>
                      </div>
                      <div className="flex flex-col gap-8 mt-5 persona-list ">
                        <div>
                          <h4>Pain Points</h4>
                          <ul>
                            <li>Trust and security issues</li>
                            <li>No time to go the courier service office </li>
                            <li>Longer delivery time</li>
                          </ul>
                        </div>
                        <div>
                          <h4>Goals</h4>
                          <ul>
                            <li>
                              To select registered and legalized courier service
                            </li>
                            <li>
                              To use the app to order for a delivery service
                            </li>
                            <li>
                              To select courier service that deliver in less
                              than 2- 4 hours
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="persona-box">
                      <div className="user-box">
                        <img src={personaImg1} alt="" />
                        <div>
                          <h4>David Scotland</h4>
                          <h6>Wholesaler</h6>
                        </div>
                      </div>
                      <div className="flex flex-col gap-8 mt-5 persona-list">
                        <div>
                          <h4>Pain Points</h4>
                          <ul>
                            <li>No standard delivery prices</li>
                            <li>No time to go the courier service office </li>
                            <li>Longer delivery time</li>
                          </ul>
                        </div>
                        <div>
                          <h4>Goals</h4>
                          <ul>
                            <li>
                              To have a standard delivery price depending on the
                              package
                            </li>
                            <li>
                              To use the app to order for a delivery service
                            </li>
                            <li>
                              To select courier service that deliver in less
                              than 2- 4 hours
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project-goals mb-10">
                  <div className="halo-box">
                    <h3>Project Goals</h3>
                  </div>
                  <div className="flex gap-16">
                    <div className="flex gap-3 projecticon items-center">
                      <img src={projectIcon} className="w-5" alt="" />
                      <p>Door-to-Door Courier Service</p>
                    </div>
                    <div className="flex gap-3 projecticon items-center">
                      <img src={projectIcon} className="w-5" alt="" />
                      <p>Real Time Package Tracking </p>
                    </div>
                    <div className="flex gap-3 projecticon items-center">
                      <img src={projectIcon} className="w-5" alt="" />
                      <p>Compare Courier Service Fee </p>
                    </div>
                  </div>
                  <div className="my-8">
                    <div className="halo-box">
                      <h3>Project Goals</h3>
                      <p>
                        I started with sketching on paper and from there over a
                        cup of tea, i landed on the desired sketches.
                      </p>
                    </div>
                    <div className=" overflow-auto scroll-container">
                      <img src={sketch} className="min-w-[70rem]" alt="" />
                    </div>
                  </div>
                </div>
                <div className="wireframes">
                  <div className="halo-box">
                    <h3>Wireframes</h3>
                    <p>
                      With wireframes, I was able to lay down the final base for
                      the design.
                    </p>
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
                  </div>
                </div>
                <div className="onboarding">
                  <div className="halo-box">
                    <h3>Onboarding Screens</h3>
                    <p>
                      To craft engaging onboarding user experience that tells a
                      short story and easy to use, leaves a positive first
                      impression that excites users.
                    </p>
                  </div>
                  <div className="halo-screen-grid">
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
                </div>
                <div className="login">
                  <div className="halo-box">
                    <h3>Login, Registration and Reset Password Screens</h3>
                  </div>
                  <div className="halo-screen-grid">
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
                  </div>
                </div>
                <div className="homepage">
                  <div className="halo-box">
                    <h3>Homepage + Send a Package</h3>
                    <p>
                      This is a five step process that guides the user on how to
                      send a package and also to compare different courier
                      service prices.
                    </p>
                  </div>
                  <div className="halo-screen-grid">
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
                    <LazyLoadImage
                      alt="LOADING"
                      src={image23}
                      effect="blur"
                      opacity={1.2}
                      placeholderSrc="black-and-white"
                      scrollPosition={scrollPosition}
                    />
                    <LazyLoadImage
                      alt="LOADING"
                      src={image24}
                      effect="blur"
                      opacity={1.2}
                      placeholderSrc="black-and-white"
                      scrollPosition={scrollPosition}
                    />
                  </div>
                </div>
                <div className="other mb-10">
                  <div className="halo-box">
                    <h3>Other Screens</h3>
                  </div>
                  <div className="halo-screen-grid">
                    <LazyLoadImage
                      alt="LOADING"
                      src={image25}
                      effect="blur"
                      opacity={1.2}
                      placeholderSrc="black-and-white"
                      scrollPosition={scrollPosition}
                    />
                    <LazyLoadImage
                      alt="LOADING"
                      src={image26}
                      effect="blur"
                      opacity={1.2}
                      placeholderSrc="black-and-white"
                      scrollPosition={scrollPosition}
                    />
                    <LazyLoadImage
                      alt="LOADING"
                      src={image27}
                      effect="blur"
                      opacity={1.2}
                      placeholderSrc="black-and-white"
                      scrollPosition={scrollPosition}
                    />
                    <LazyLoadImage
                      alt="LOADING"
                      src={image28}
                      effect="blur"
                      opacity={1.2}
                      placeholderSrc="black-and-white"
                      scrollPosition={scrollPosition}
                    />
                    <LazyLoadImage
                      alt="LOADING"
                      src={image29}
                      effect="blur"
                      opacity={1.2}
                      placeholderSrc="black-and-white"
                      scrollPosition={scrollPosition}
                    />
                    <LazyLoadImage
                      alt="LOADING"
                      src={image30}
                      effect="blur"
                      opacity={1.2}
                      placeholderSrc="black-and-white"
                      scrollPosition={scrollPosition}
                    />
                    <LazyLoadImage
                      alt="LOADING"
                      src={image31}
                      effect="blur"
                      opacity={1.2}
                      placeholderSrc="black-and-white"
                      scrollPosition={scrollPosition}
                    />
                  </div>
                </div>
                <div className="iteration mb-10">
                  <div className="halo-box">
                    <h3>Iteration Process</h3>
                    <p>
                      I conducted usability testing with my target audience,
                      asking people to think aloud in order to gain a better
                      understanding of their mental model. After I finished
                      testing, I gathered all of the data, examined it, and came
                      to some conclusions.
                    </p>
                    <div className="ite-box">
                      <ul>
                        <li>
                          1. The users did not know how to classify their
                          delivery( either document or package)
                        </li>
                        <li>
                          2. Users want easy processes on mobile applications as
                          they are easily distracted
                        </li>
                        <li>
                          3. The users wants to know the difference between
                          standard and express delivery
                        </li>
                      </ul>
                    </div>
                    <p>So I decided to add a tool tip to show the information regarding the difference between both express and standard delivery and did the same for the difference between document and package. For the long process, i made sure i divided the steps into five pages and made it seamless for the users to fill.</p>
                  </div>
                </div>
                <div className="lesson mt-5"   style={{ borderBottom: "2px solid #1f2123" }}>
                  <div className="halo-box">
                    <h3>Lessons</h3>
                    <p>For this project, I learned to work closely with design systems, strengthen my reach in the aspect of user interviews, learned, and practiced new ways to get the best feedbacks from users. I design icons to fit well into the projects. However, if I had more time, I would have expanded my user research so as to get more depth.</p>
                  </div>
                </div>
                <Footer/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default trackWindowScroll(Express);
