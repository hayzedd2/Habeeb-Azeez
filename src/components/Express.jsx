import React from "react";
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
import subtract1 from '../images/Subtract.svg'

const Express = () => {
  return (
    <>
      <Navbar />
      <section className="min-h-screen w-[100vw] bg-[#111315] flex">
        <div className="w-1/5">
          <SideBar />
        </div>
        <div className="w-4/5 max-h-screen overflow-y-auto overflow-x-hidden">
          <div className="pt-[8rem]">
            <div className="   text-white ">
              <div
                className="flex gap-5 items-center px-7 pb-5"
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
                <div className="my-6">
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
                              <p>Fintech</p>
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
                <div className="design-process">
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
                <div className="user-experience mb-20">
                  <div className="flex items-center justify-between">
                    <div className="w-4 h-4 rounded-full bg-[#ffbd6a] flex items-center justify-center">
                      <div className="bg-[#111315] w-2 h-2 rounded-full"></div>
                    </div>
                    <div className="w-4 h-4 rounded-full bg-[#ffbd6a] flex items-center justify-center">
                      <div className="bg-[#111315] w-2 h-2 rounded-full"></div>
                    </div>
                  </div>
                  <div className="user-experience-grid px-2">
                    <div className="grid-1 px-5 ux-grid">
                      <h5>User Experience</h5>
                      <h6>Week 1</h6>
                      <div className="flex items-center ux-month justify-between my-6">
                        <p>MON</p>
                        <p>TUE</p>
                        <p>WED</p>
                        <p>THU</p>
                        <p>FRI</p>
                      </div>
                      <div className="flex flex-col gap-5">
                        <div
                          className="w-full ux-bg bg-[#eb5e55]"
                          style={{ color: "white" }}
                        >
                          <p>Research</p>
                        </div>
                        <div className="w-[23rem] ux-bg bg-[#d2bf55]">
                          <p>Empathizing Problems & Solutions</p>
                        </div>
                        <div className="w-full flex items-center justify-center">
                          <div className="w-[17rem] ux-bg bg-[#5386e4]">
                            <p>Surveys and Interviews</p>
                          </div>
                        </div>
                        <div className="w-full flex items-end pr-4 justify-end ">
                          <div className="w-[11rem] ux-bg bg-[#ffa737]">
                            <p>Userflows</p>
                          </div>
                        </div>
                        <div className="w-full flex items-end pr-6 justify-end ">
                          <div className="w-[13rem] ux-bg bg-[#00ffc5]">
                            <p>Information Architecture </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="grid-1 px-5 ux-grid"
                      style={{ borderRight: "1px solid #2c2e30" }}
                    >
                      <h5>User Experience</h5>
                      <h6>Week 2</h6>
                      <div className="flex items-center ux-month justify-between my-6">
                        <p>MON</p>
                        <p>TUE</p>
                        <p>WED</p>
                        <p>THU</p>
                        <p>FRI</p>
                      </div>
                      <div className="flex flex-col gap-5">
                        <div className="w-full ux-bg bg-[#fdf0d5]">
                          <p>Visual Design</p>
                        </div>

                        <div className="w-full flex items-start justify-start">
                          <div className="w-[10.5rem] ux-bg bg-[#fcaf58]">
                            <p>Wireframes</p>
                          </div>
                        </div>
                        <div className="w-full flex items-center justify-center">
                          <div className="w-[18rem] ux-bg bg-[#53b3cb]">
                            <p>High Fidelity Screens</p>
                          </div>
                        </div>
                        <div className="w-full flex items-end pr-7 justify-end ">
                          <div className="w-[11rem] ux-bg bg-[#00ffc5]">
                            <p>Prototype</p>
                          </div>
                        </div>
                        <div className="w-full flex items-end  justify-end ">
                          <div className="w-[9rem] ux-bg bg-[#ffa737]">
                            <p>User Testing </p>
                          </div>
                        </div>
                      </div>
                    </div>
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
                    
                    <div className="halo-box">
                        <p>Do you feel safe using online payment service?</p>
                        <div className="flex gap-2">
                            <img src={subtract1} alt="" />
                            <div className="flex flex-col items-center border justify-center gap-2 yes-no">
                                <div className="flex items-center justify-center gap-2">
                                    <div className="yes-bg">

                                    </div>
                                    <h5 className="border ">Yes</h5>
                                </div>
                                <div className="flex items-center justify-center gap-2">
                                    <div className="no-bg">

                                    </div>
                                    <h5>No</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="halo-box">
                        <p>Do you feel safe using online payment service?</p>
                        <div className="flex gap-2">
                            <img src={subtract1} alt="" />
                            <div className="flex flex-col items-center border justify-center gap-2 yes-no">
                                <div className="flex items-center justify-center gap-2">
                                    <div className="yes-bg">

                                    </div>
                                    <h5 className="border ">Yes</h5>
                                </div>
                                <div className="flex items-center justify-center gap-2">
                                    <div className="no-bg">

                                    </div>
                                    <h5>No</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="halo-box">
                        <p>Do you feel safe using online payment service?</p>
                        <div className="flex gap-2">
                            <img src={subtract1} alt="" />
                            <div className="flex flex-col items-center border justify-center gap-2 yes-no">
                                <div className="flex items-center justify-center gap-2">
                                    <div className="yes-bg">

                                    </div>
                                    <h5 className="border ">Yes</h5>
                                </div>
                                <div className="flex items-center justify-center gap-2">
                                    <div className="no-bg">

                                    </div>
                                    <h5>No</h5>
                                </div>
                            </div>
                        </div>
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
                    <ul
                      className=" mt-5 font-kumbh text-[0.95rem] font-[400] leading-10"
                    >
                      <li>1. Can you tell me a bit about yourself?</li>
                      <li>2. What do you do for a living?</li>
                      <li>
                        3. How do you send parcels/Package to friends or loved
                        ones?
                      </li>
                      <li>4. How often do you use the courier service?</li>
                      <li>5. Do you trust the courier service riders out there?</li>
                      <li>6. How do you track your shipment?</li>
                      <li>7. How fast is the delivery process?</li>
                      <li>8. Is there a standard price you pay for delivery?</li>
                      <li>9. When was the last time you used a delivery service?</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Express;
