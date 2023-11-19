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
import image1 from "../images/Group 7534.png";
import image2 from '../images/Group 625875.png'
import image3 from '../images/Group 35326.png'
import Aa from "../images/Aa.svg";
import Footer from "./Footer";
const HaloWebsite = ({ scrollPosition }) => {
  return (
    <>
      <Navbar />
      <section className="min-h-screen w-[100vw] bg-[#111315] flex">
        <div className="xl:w-1/5 sm:hidden xl:block">
          <SideBar />
        </div>
        <div className="xl:w-4/5 sm:w-full max-h-screen overflow-y-auto overflow-x-hidden">
          <div className="pt-[5rem]">
            <div className="   text-white ">
              <div
                className="flex gap-5 items-center px-7 pb-5 pt-7 fixed bg-[#111315]  z-30  sm:w-full xl:w-4/5"
                style={{ borderBottom: "1.5px solid #2c2e30" }}
              >
                <Link to={"/case-study"}>
                  <div className="arrow flex justify-center items-center rounded-full w-8 h-8 bg-[#ffBD6A]">
                    <FaArrowLeft className="text-[1rem] font-[400] text-black" />
                  </div>
                </Link>
                <h1 className=" font-kumbh font-[600] xl:text-[1.05rem] sm:text-[0.95rem] text-grey">
                  Halo Website Redesign Case Study
                </h1>
              </div>
              <div className="px-7">
                <div className="pt-[7rem]">
                  <p className="  font-kumbh xl:text-[1.25rem] sm:text-[1rem] xl:leading-normal sm:leading-loose font-[500]">
                    Powering prosperity through Communities helping to provide
                    the best savings and investments to your members.
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
                                  href="https://morenikeadeyemi.dorik.io/" target="_blank"
                                  className=" underline underline-offset-2 decoration-[1px] text-[0.85rem]"
                                >
                                  Morenike Adeyemi
                                </a>
                                ( Product Designer)
                              </p>
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
                      The objective of this project was to enhance the user
                      experience and boost conversions by revamping an existing
                      fintech website owned by a startup called Halo. The
                      original website provided valuable features and
                      information, but it lacked a consistent design and was not
                      user-friendly. The updated website boasts a modern and
                      uncluttered design that simplifies navigation and
                      information access for users. We concentrated on creating
                      a consistent design language and implemented visual cues
                      to assist users in navigating the website. Additionally,
                      we improved the website's mobile responsiveness to ensure
                      that it could be accessed by users on all types of
                      devices.
                    </p>
                  </div>
                  <div className="halo-box">
                    <h3>About Halo</h3>
                    <p>
                      A first-of-its-kind and early stage startup in Africa
                      focused on community-driven approach to wealth management
                      and banking.
                    </p>
                  </div>
                  <div className="halo-box">
                    <h3>The Goal</h3>
                    <p>
                      To design a website that is in line with the company's
                      brand values and business goals, while also adapting to
                      the wants and needs of its new and existing users, thereby
                      enhancing user experience and increasing conversions.
                    </p>
                  </div>
                  <div className="halo-box">
                    <h3>The Goal</h3>
                    <p>
                      To design a website that is in line with the company's
                      brand values and business goals, while also adapting to
                      the wants and needs of its new and existing users, thereby
                      enhancing user experience and increasing conversions.
                    </p>
                  </div>
                  <div className="halo-box">
                    <h3>My Role</h3>
                    <p>
                      I played a critical role in ensuring the success of the
                      project. I was responsible for conducting extensive
                      research on the target audience and their needs, as well
                      as identifying the pain points of the existing website.
                      Based on the insights gained from the research, I used my
                      design expertise to inform the redesign decisions,
                      ensuring that the website was visually appealing, easy to
                      navigate, and user-friendly. To increase conversions, I
                      implemented several user-centric design strategies, such
                      as simplifying the sign-up process and optimizing the
                      website's layout. I also worked closely with the
                      development team to ensure that the design was implemented
                      effectively, and that the website was functioning as
                      intended.
                    </p>
                  </div>
                  <div className="halo-box">
                    <h3>Background Research</h3>
                    <p>
                      The first stage of the design process involved conducting
                      extensive research on the target audience and their needs.
                      This included analyzing user behavior on the existing
                      website, conducting user surveys and interviews, and
                      analyzing competitors' websites. The insights gained from
                      this research informed the design decisions and helped
                      ensure that the redesign met the needs of our users.
                    </p>
                  </div>
                  <div className="halo-box">
                    <h3>Ideation</h3>
                    <p>
                      The ideation stage involved brainstorming and generating
                      ideas for the redesign based on the insights gained from
                      the research. The project team collaborated to create a
                      design strategy that aligned with the company's business
                      objectives and brand values. The ideation stage also
                      involved creating user personas and user flows to help
                      guide the design decisions.
                    </p>
                  </div>
                  <div className="halo-box">
                    <h3>Existing Design</h3>
                    <p>
                      We wanted a design that, at first look, clearly
                      communicates what the company is delivering, i.e., one
                      with a clean, contemporary aesthetic that is simple to use
                      and makes it simple for consumers to obtain the
                      information they require. The current design did not
                      adequately reflect the goals we set for ourselves.
                    </p>
                  </div>
                  <div className="my-10">
                    <LazyLoadImage
                      alt="LOADING"
                      src={image1}
                      effect="blur"
                      opacity={1.2}
                      placeholderSrc="black-and-white"
                      scrollPosition={scrollPosition}
                    />
                  </div>
                  <div className="typography">
                    <div className="typo-box">
                      <h3>Typography and colors</h3>
                      <div className="typo flex items-center justify-between  flex-wrap mt-6">
                        <div className=" ">
                          <img
                            src={Aa}
                            className="w-[10.5rem] h-[10.5rem]"
                            alt=""
                          />
                        </div>
                        <div className="text-left font-kumbh  ">
                          <h4 className="text-[0.8rem]">FONT FAMILY</h4>
                          <h1 className="text-[1.7rem] font-[500] mt-3">
                            Circular Std
                          </h1>
                        </div>
                        <div className="text-left font-kumbh">
                          <div className="flex gap-4 font-kumbh font-[500] text-[0.85rem]">
                            <p>Book</p>
                            <p>Medium</p>
                            <p>Bold</p>
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
                      <div className="colors flex flex-wrap items-center xl:justify-between sm:justify-center xl:gap-0 sm:gap-4  mb-16 mt-8">
                        <div className="color-div bg-[#143284]">
                          <p>#143284</p>
                        </div>
                        <div className="color-div bg-[#fd9727]">
                          <p>#fd9727</p>
                        </div>
                        <div className="color-div bg-[#0d1e4f]">
                          <p>#0d1e4f</p>
                        </div>
                        <div className="color-div bg-[#ffffff] text-black">
                          <p>#ffffff</p>
                        </div>
                        <div className="color-div bg-[#def1fc] text-black">
                          <p>#0def1fc</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="halo-box">
                    <h3>First Iteration</h3>
                    <p>We designed the initial iteration of our redesign using the information we learned from the research and our brainstorming sessions, as well as the company's brand values and goals.</p>
                  </div>
                  <div className="my-10">
                    <LazyLoadImage
                      alt="LOADING"
                      src={image2}
                      effect="blur"
                      opacity={1.2}
                      placeholderSrc="black-and-white"
                      scrollPosition={scrollPosition}
                    />
                    <div className="halo-box">
                    <p>After reviewing the design with the product managers, customer support team, and board, we determined that we needed to make a few minor aesthetic and website layout adjustments, which ultimately led to the creation of the final design.</p>
                  </div>
                  </div>
                  <div className="halo-box">
                    <h3>Final Design</h3>
                    <p>With a clean, contemporary style that was simple for customers to navigate and locate the information they required, we were able to create a design that immediately communicates what the company is providing. </p>
                  </div>
                  <div className="my-10">
                    <LazyLoadImage
                      alt="LOADING"
                      src={image3}
                      effect="blur"
                      opacity={1.2}
                      placeholderSrc="black-and-white"
                    />
                  </div>
                  <div className="halo-box">
                    <h3>Implementation</h3>
                    <p>The implementation stage involved working closely with the development team to ensure that the design was implemented effectively and that the website was functioning as intended. This stage involved testing the website on different devices and platforms to ensure that it was mobile responsive and accessible to users on all devices.</p>
                  </div>
                  <div className="halo-box pb-8" style={{ borderBottom: "2px solid #1f2123" }}>
                    <h3>Conclusion</h3>
                    <p>Overall, I am proud of the role I played in this project, and the positive impact it had on the company's business. Through my design expertise and collaboration with the project team and company, we were able to create a website that was not only visually appealing, but also aligned with the company's business objectives and met the needs of its users.</p>
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

export default trackWindowScroll(HaloWebsite);
