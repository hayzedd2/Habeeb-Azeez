import React from "react";
import Navbar from './Navbar'
import SideBar from './SideBar'
const Recommendations = () => {
  return (
    <>
      <Navbar />
      <section className="min-h-screen w-[100vw] bg-[#111315] flex">
        <div className="xl:w-1/5 sm:hidden">
          <SideBar />
        </div>
        <div className="xl:w-4/5 sm:w-full max-h-screen overflow-auto">
          <div className="pt-[8rem]">
            <div className=" px-7  text-white ">
              <div className="heading mb-5">
                <h1 className=" font-kumbh font-[600] text-[1.3rem]">
                  Recommendations
                </h1>
              </div>
              <div className="reco-flex flex flex-col gap-6 mb-5">
                <div className="reco-box bg-[#1c2023] px-4 py-6 rounded-[8px]">
                    <div className="reco-flex flex gap-4 items-center">
                        <div className="reco-name  bg-[#ffbd6a] ">
                            <p>CO</p>
                        </div>
                        <div className="reco-text font-kumbh flex flex-col gap-1">
                            <h3 className="font-[600] text-[1.1rem]">Chinedu Okeke</h3>
                            <h5 className="text-grey font-[500] text-[0.9rem]">Senior Product Manager , Matillion</h5>
                        </div>
                    </div>
                    <div className="reco-about font-kumbh text-grey leading-[2rem] mt-4 text-[0.98rem]">
                        <p>Habeeb is not only very talented and creative, but he also communicates very well. His work is presented in a style that is simple for people to grasp, and he is able to clearly communicate his design principles and ideas.</p>
                    </div>
                </div>
                <div className="reco-box bg-[#1c2023] px-4 py-6 rounded-[8px]">
                    <div className="reco-flex flex gap-4 items-center">
                        <div className="reco-name  bg-[#5386e4] ">
                            <p>TW</p>
                        </div>
                        <div className="reco-text font-kumbh flex flex-col gap-1">
                            <h3 className="font-[600] text-[1.1rem]">Tomiiwo Fakindele</h3>
                            <h5 className="text-grey font-[500] text-[0.9rem]">Chief Technical Officer, Halo Financial Capital Management Ltd.</h5>
                        </div>
                    </div>
                    <div className="reco-about font-kumbh text-grey leading-[2rem] mt-4 text-[0.98rem]">
                        <p>Habeeb has a talent for developing products that are not only functional, but also visually appealing and intuitive. His designs are always of the highest caliber due to his attention to detail and willingness to go above and beyond.</p>
                    </div>
                </div>
                <div className="reco-box bg-[#1c2023] px-4 py-6 rounded-[8px]">
                    <div className="reco-flex flex gap-4 items-center">
                        <div className="reco-name bg-[#eb5e55] ">
                            <p>SW</p>
                        </div>
                        <div className="reco-text font-kumbh flex flex-col gap-1">
                            <h3 className="font-[600] text-[1.1rem]">Scott Whiteside</h3>
                            <h5 className="text-grey font-[500] text-[0.9rem]">Product Manager, Voyage Control</h5>
                        </div>
                    </div>
                    <div className="reco-about font-kumbh text-grey leading-[2rem] mt-4 text-[0.98rem]">
                        <p>Habeeb is highly attuned to the needs and preferences of the users of his designs. He is able to anticipate what users want and creates products that cater to their needs.</p>
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

export default Recommendations;
