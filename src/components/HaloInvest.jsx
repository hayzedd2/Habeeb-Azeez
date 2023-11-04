import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import tag from "../images/tag.svg";
import user from "../images/user.svg";
import tool from "../images/pen-tool.svg";
import SideBar from "./SideBar";
import bulb from "../images/Frame2.svg";
import Navbar from "./Navbar";
import book from "../images/book.svg";
import pen from "../images/Frame3.svg";
import develop from "../images/develop.svg";
import text from "../images/text.svg";
import image1 from '../images/Splashscreen 3.png'
import image2 from '../images/Onboarding 5 2.png'
import image3 from '../images/Onboarding 4 2.png'
import image4 from '../images/Onboarding 6 2.png'
import image5 from '../images/Empty 6.png'
import image6 from '../images/Empty 7.png'
import image7 from '../images/Empty-1 1.png'
import image8 from '../images/Empty-2 1.png'
import image9 from '../images/Dashboard 3.png'
import image10 from '../images/Dashboard-1 2.png'
import image11 from '../images/Add Money 1.png'
import image12 from '../images/Send Money 1.png'
import image13 from '../images/savings-1 1.png'
import image14 from '../images/Goal 1.png'
import image15 from '../images/savings 1.png'
import image16 from '../images/My master funds 1.png'
import image17 from '../images/investments 1.png'
import image18 from '../images/3 Bedroom Flat 1.png'
import image19 from '../images/Naira Funds 1.png'
import image20 from '../images/Naira Funds-1 1.png'
import image21 from '../images/Referall 1.png'
import image22 from '../images/More 2.png'
import image23 from '../images/Profile 2.png'
import image24 from '../images/virtual 1.png'
import image25 from '../images/Manage Card 1.png'
import image26 from '../images/Edit your Public Profile 1.png'
import image27 from '../images/About Community 1.png'
import image28 from '../images/Add Card 1.png'
const HaloInvest = () => {
  return (
    <>
      <Navbar />
      <section className="min-h-screen w-[100vw] bg-[#111315] flex">
        <div className="w-1/5">
          <SideBar />
        </div>
        <div className="w-4/5 max-h-screen overflow-auto">
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
                  Halo Invest Mobile Application Case Study
                </h1>
              </div>
              <div className="px-7">
                <div className="my-6">
                  <p className="  font-kumbh text-[1.25rem] font-[500]">
                    User-centric product providing users with a secure and
                    private way to bank and manage their wealth.
                  </p>
                  <div
                    className="w-full"
                    style={{ borderBottom: "1.5px solid #2c2e30" }}
                  >
                    <div className="flex  w-[66%] items-center justify-between mt-5 pb-6">
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
                <div>
                  <div className="halo-box">
                    <h3>Project Overview</h3>
                    <p>
                      Halo Invest, a fintech company in Nigeria, has launched
                      its first community-driven banking and wealth management
                      product with the help of a cross-functional team of
                      product managers, engineers, quality assurance and
                      customer experience experts. As the Lead Product Designer,
                      I was instrumental in the research, user journey
                      definition and product launch of this unique offering.
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
                      To provide users with a secure and private way to bank and
                      manage their wealth, while also offering them the
                      opportunity to connect and interact with other users with
                      similar risk appetites and investment behaviors.
                    </p>
                  </div>
                  <div className="halo-box">
                    <h3>My Role</h3>
                    <p>
                      Throughout the project, my key responsibility as the Lead
                      Product Designer was to simplify the user journey across
                      the multiple layers of the product. I ensured that the
                      user journey was seamless and easy to follow, while
                      maintaining the authenticity of the value proposition of
                      the product.
                    </p>
                  </div>
                  <div className="halo-box">
                    <h3>Design Process</h3>
                    <p>
                      Throughout the project, my key responsibility as the Lead
                      Product Designer was to simplify the user journey across
                      the multiple layers of the product. I ensured that the
                      user journey was seamless and easy to follow, while
                      maintaining the authenticity of the value proposition of
                      the product.
                    </p>
                  </div>
                </div>
                <div className="dia-flex flex gap-2 items-start justify-between py-5 flex-wrap">
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
                <div className="project- bg-[#1c2023] rounded-[9px] p-6 my-10">
                  <h1 className=" font-kumbh txt-[0.9rem] font-[500] ">
                    Project Timeline
                  </h1>
                  <div className="months grid grid-cols-3 w-full mt-7 font-kumbh text-[0.75rem] font-[500] mb-3 text-grey">
                    <p>MONTH 1</p>
                    <p>MONTH 2</p>
                    <p>MONTH 3</p>
                  </div>
                  <div className="grid grid-cols-3 w-full mt-2">
                    <div className="project-timeline">
                      <p>Problem Definition, Research and Wireframing</p>
                    </div>
                    <div></div>
                    <div></div>
                  </div>
                  <div className="grid grid-cols-3 w-full mt-2">
                    <div></div>
                    <div className="project-timeline">
                      <p>High Fidelity Screen Designs</p>
                    </div>
                    <div></div>
                  </div>
                  <div className="grid grid-cols-3 w-full mt-2">
                    <div></div>
                    <div></div>
                    <div className="project-timeline">
                      <p>Prototype, Implementation and Testing</p>
                    </div>
                  </div>
                </div>
                <div className="project-process">
                  <div className="onboarding">
                    <div className="halo-box">
                      <h3>Onboarding Screens</h3>
                      <p>
                        The screens highlight the product's core features, which
                        are described as being effective, practical, and
                        user-friendly, using a range of self-explanatory images
                        spread across many tabs. Ultimately, the goal of the
                        onboarding screens is to simplify and make the user's
                        initial experience with the product as interesting as
                        possible.
                      </p>
                    </div>
                    <div className="halo-screen-grid">
                        <img src={image1} alt="" />
                        <img src={image2} alt="" />
                        <img src={image3} alt="" />
                        <img src={image4} alt="" />
                    </div>
                  </div>
                  <div className="login">
                    <div className="halo-box">
                      <h3>Easy Sign Up and Login Process</h3>
                      <p>
                      This process typically involves a clear and simple instructions, with minimal steps required to create an account or log in. The product also utilize email  verification to confirm the user's identity, while also providing additional security measures to protect their data. An easy sign-up and login process can help to create a positive first impression and encourage users to engage with the platform more frequently.
                      </p>
                    </div>
                    <div className="halo-screen-grid">
                        <img src={image5} alt="" />
                        <img src={image6} alt="" />
                        <img src={image7} alt="" />
                        <img src={image8} alt="" />
                    </div>
                  </div>
                  <div className="homepage">
                    <div className="halo-box">
                      <h3>Homepage + Quick actions</h3>
                      <p>
                      The Homepage features the screens for a first time user for which the major action to perform is to add money and also for an existing user. It also features quick actions that users can easily take to perform a quick operation such as add money and send money.
                      </p>
                    </div>
                    <div className="halo-screen-grid">
                        <img src={image9} alt="" />
                        <img src={image10} alt="" />
                        <img src={image11} alt="" />
                        <img src={image12} alt="" />
                    </div>
                  </div>
                  <div className="savings">
                    <div className="halo-box">
                      <h3>Savings</h3>
                      <p>
                      The product has 4 major savings plan at the moment which are the goals, fixed, league(public and private) and susu plans.
                      </p>
                    </div>
                    <div className="halo-screen-grid">
                        <img src={image13} alt="" />
                        <img src={image14} alt="" />
                        <img src={image15} alt="" />
                        <img src={image16} alt="" />
                    </div>
                  </div>
                  <div className="investments">
                    <div className="halo-box">
                      <h3>Investments</h3>
                      <p>
                      The product has 4 major Investments categories at the moment which are the Naira funds, Dollar Funds and Halal Funds 
                      </p>
                    </div>
                    <div className="halo-screen-grid">
                        <img src={image17} alt="" />
                        <img src={image18} alt="" />
                        <img src={image19} alt="" />
                        <img src={image20} alt="" />
                    </div>
                  </div>
                  <div className="random">
                    <div className="halo-box">
                      <h3>Other Random Screens</h3>
                    </div>
                    <div className="halo-screen-grid">
                        <img src={image21} alt="" />
                        <img src={image22} alt="" />
                        <img src={image23} alt="" />
                        <img src={image24} alt="" />
                        <img src={image25} alt="" />
                        <img src={image26} alt="" />
                        <img src={image27} alt="" />
                        <img src={image28} alt="" />
                    </div>
                  </div>
                  <div className="random mt-5 pb-5 flex flex-col gap-8" style={{borderBottom : '2px solid #1f2123'}}>
                    <div className="halo-box">
                      <h3>Implementation</h3>
                      <p>The implementation stage involved working closely with the development team to ensure that the design was implemented effectively and that the Mobile application was functioning as intended. This stage involved testing the app with various users with different devices to ensure it’s usability and seamless experience.</p>
                    </div>
                    
                    <div className="halo-box">
                      <h3>Learnings and Conclusions</h3>
                      <p>For this project, I learned to work closely with design systems, strengthen my reach in the aspect of user interviews, learned, and practiced new ways to get the best feedbacks from users. I design icons to fit well into the projects. However, if I had more time, I would have expanded my user research so as to get more depth. Overall, I am proud of the role I played in this project, and the positive impact it had on the company's business. </p>
                    </div>
                    
                  </div>
                  <div className="thanks pt-8 pb-20 flex flex-col items-center justify-center gap-5">
                    <img src="" alt="" />
                    <p className=" font-kumbh font-[600] text-[1.1rem]">Thank you for scrolling through this far.</p>

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

export default HaloInvest;
