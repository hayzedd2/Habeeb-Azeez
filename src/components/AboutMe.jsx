import React from "react";
import SideBar from "./SideBar";
import Navbar from "./Navbar";
import habeeb from '../images/Ellipse 11.png'
const AboutMe = () => {
  return (
   <>
    <Navbar/>
    <section className="min-h-screen w-[100vw] bg-[#111315] flex">
      <div className="w-1/5">
        <SideBar />
      </div>
      <div className="w-4/5 max-h-screen overflow-auto">
        <div className="pt-[8rem]">
          <div className=" px-7  text-white ">
           <div className="heading">
            <h1 className=" font-kumbh font-[600] text-[1.3rem]  text-grey">About Me</h1>
           </div>
           <div className="first-row flex gap-6 mt-8">
            <img src={habeeb} alt="" className="w-[15rem] h-[15rem]" />
            <div className="first-row-text">
                   <div className="ps flex flex-col gap-3">
                    <p className="ps-p">As a product designer, I have a strong understanding of design principles and user experience. I have a natural ability to create intuitive and visually appealing products that are not only functional, but also aesthetically pleasing.</p>
                    <p className="ps-p">My attention to detail is impeccable, and I always go above and beyond to ensure that my designs meet the highest standards. In addition to my technical skills, I am a creative thinker with a willingness to experiment and push the boundaries of what is possible.</p>
                   </div>
            </div>
           </div>
           <p className="ps-p my-8">I am also an excellent communicator and team player, able to clearly articulate my design concepts and ideas and work well with others. My organizational skills and ability to adapt to new technologies and challenges make me a valuable asset to any design team.</p>
           <div className="digital-skills mt-10">
            <h3 className=" font-kumbh text-white">Digital Skills</h3>
            <div className="grid grid-cols-3 gap-3 mt-5 ">
                <div className="bg-skills bg-[#EB5E55]">Figma</div>
                <div className="bg-skills bg-[#00FFC5]">Prototyping</div>
                <div className="bg-skills bg-[#5386E4]">Adobe Photoshop</div>
                <div className="bg-skills bg-[#53B3CB]">User Research</div>
                <div className="bg-skills bg-[#FDF0D5]">User Flows</div>
                <div className="bg-skills bg-[#FCAF58]">Interaction Design</div>
            </div>
           </div>
          </div>
        </div>
      </div>
    </section>
   </>
  );
};

export default AboutMe;
