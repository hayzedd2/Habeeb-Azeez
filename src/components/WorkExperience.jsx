import React from "react";
import SideBar from "./SideBar";
import Navbar from "./Navbar";
const WorkExperience = () => {
  const Work = [
    {
      companyName: "Brass",
      contractType: "Full time",
      jobType: "Product Designer",
      location: "Lagos, Nigeria",
      date: "Apr 2023 - May 2024",
    },
    {
      companyName: "Voyage Control",
      contractType: "Contract",
      jobType: "Product Designer",
      location: "United Kingdom",
      date: "July 2022 - May 2023",
    },
    
    {
      companyName: "Halo Invest",
      contractType: "Full-Time",
      jobType: "Product Designer",
      location: "Lagos, Nigeria",
      date: "Nov. 2021 - Dec. 2022",
    },
    {
      companyName: "CKDigital",
      contractType: "Full-Time",
      jobType: "UI Designer",
      location: "Lagos, Nigeria",
      date: "April 2021 - Nov. 2021",
    },
    {
      companyName: "CodeGarage Africa",
      contractType: "Full-Time",
      jobType: "UI Designer",
      location: "Lagos, Nigeria",
      date: "April. 2020 - April. 2021",
    },
    {
      companyName: "Hotels.ng",
      contractType: "Internship",
      jobType: "UI Design Intern",
      location: "Lagos Nigeria",
      date: "June 2020 - Aug. 2020",
    },
    {
      companyName: "Simple Finance Nigeria",
      contractType: "Internship",
      jobType: "UI Designer Intern",
      location: "Lagos Nigeria",
      date: "Apr. 2020 - Aug. 2020",
    },
  ];
  return (
    <>
      <Navbar />
      <section className="min-h-screen w-[100vw] bg-[#111315] flex">
        <div className="w-1/5 sm:hidden xl:block">
          <SideBar />
        </div>
        <div className="xl:w-4/5 sm:w-full max-h-screen overflow-auto">
          <div className="pt-[8rem] pb-[3rem]">
            <div className=" px-7  text-white ">
              <div className="heading flex items-center justify-between">
                <h1 className=" font-kumbh font-[600] text-[1.3rem]">
                  Work Experience
                </h1>
                <a href="https://drive.google.com/file/d/1j3ceHjS5xBDQNTMaoqcy4upnNntUCkMr/view">
                  <button className="btn-resume">Download Resume</button>
                </a>
              </div>
             <div className="case-study-grid">
             <div className="present mt-8">
                <h3 className="work-placeholder mb-4">Present</h3>

                <div className="work-box-grid">
                  <div className="heading">
                    <h3>Moniepoint Group</h3>
                    <h6>Full-Time</h6>
                  </div>
                  <div className="work-sub-box mt-5">
                    <div className="bullet flex gap-4">
                      <div className="bullet-border">
                        <div className="bullet-bg"></div>
                      </div>
                      <div className="bullet-text">
                        <h3>Product Designer</h3>
                        <h4>Lagos, Nigeria | April 2024 - Present</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
              <div></div>
             </div>
              <div className="past xl:mt-8 sm:mt-0">
                <h3 className="work-placeholder mb-5">Past</h3>
                <div className="case-study-grid">
                  {Work.map((work) => {
                    return (
                      <div className="work-box-grid">
                        <div className="heading">
                          <h3>{work.companyName}</h3>
                          <h6>{work.contractType}</h6>
                        </div>
                        <div className="work-sub-box mt-5">
                          <div className="bullet flex gap-4">
                            <div className="bullet-border">
                              <div className="bullet-bg"></div>
                            </div>
                            <div className="bullet-text">
                              <h3>{work.jobType}</h3>
                              <h4>
                                {work.location} | {work.date}
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkExperience;
