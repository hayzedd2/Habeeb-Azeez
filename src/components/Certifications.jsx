import React from "react";
import SideBar from "./SideBar";
import Navbar from "./Navbar";
import image1 from "../images/image 16.svg";
import image2 from "../images/image 15.svg";
const Certifications = () => {
  return (
    <>
      <Navbar />
      <section className="min-h-screen w-[100vw] bg-[#111315] flex">
        <div className="xl:w-1/5 sm:hidden xl:block">
          <SideBar />
        </div>
        <div className="xl:w-4/5 sm:w-full max-h-screen overflow-auto">
          <div className="pt-[8rem] pb-10">
            <div className=" px-7  text-white ">
              <div className="heading">
                <h1 className=" font-kumbh font-[600] text-[1.3rem]">
                  Certifications
                </h1>
              </div>
              <div className="w-full mt-5 grid-border">
                <div className="cert-dates grid grid-cols-4 w-full">
                  <div className="date">
                    <p>APRIL 2020</p>
                  </div>
                  <div className="date">
                    <p>MARCH 2022</p>
                  </div>
                  <div className="date">
                    <p>NOVEMBER 2022</p>
                  </div>
                  <div className="date">
                    <p>JANUARY 2023</p>
                  </div>
                </div>
                <div className="flex w-full">
              
                  <div className="grid grid-cols-4  w-full">
                    <div className="row-flex  br flex flex-col min-h-[70vh] ">
                      <div className="certbox h-1/5"></div>
                      <div className="certbox h-1/5"></div>
                      <div className="cert-box  mt-5 bg-[#5386e4]">
                    <div className="cert-text">
                      <h3>
                        Product Masterclass: How to Build Digital Products
                      </h3>
                      <p>Product School</p>
                    </div>
                    <img src={image2} className="w-12" alt="" />
                  </div>

                      <div className="certbox h-1/5"></div>
                      <div className="certbox h-1/5"></div>
                    </div>
                    <div className="row-flex br flex flex-col min-h-[70vh] ">
                      <div className="certbox h-1/5 "></div>
                      <div className="cert-box border-none bg-[#fcaf58]">
                    <div className="cert-text">
                      <h3>
                        Product Design <br />
                        Course
                      </h3>
                      <p>Product School</p>
                    </div>
                    <img src={image2} className="w-12" alt="" />
                  </div>

                      <div className="certbox h-1/5"></div>
                      <div className="certbox h-1/5"></div>
                      <div className="certbox h-1/5"></div>
                    </div>
                    <div className="row-flex br flex flex-col min-h-[70vh] ">
                      <div className="certbox h-1/5"></div>
                      <div className="certbox h-1/5"></div>
                      <div className="certbox h-1/5"></div>
                      <div className="certbox h-1/5"></div>
                      <div className="cert-box border-none bg-[#eb5e55]">
                    <div className="cert-text">
                      <h3>
                        Building Better User Experiences with a Product Thinking
                        Approach
                      </h3>
                      <p>Awwwards</p>
                    </div>
                    <img src={image1} alt="" />
                  </div>
                    </div>
                    <div className="row-flex br flex flex-col min-h-[70vh] ">
                      <div className="cert-box  bg-[#53b3cb] h-1/5">
                        <div className="cert-text">
                          <h3>Create a Design System from scratch in Figma</h3>
                          <p>Awwwards</p>
                        </div>
                        <img src={image1} alt="" />
                      </div>
                      <div className="certbox h-1/5"></div>
                      <div className="certbox h-1/5"></div>
                      <div className="certbox h-1/5"></div>
                      <div className="certbox h-1/5"></div>
                    </div>
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

export default Certifications;
