import React from "react";
import profile from "../images/profilePic.png";
import Icon1 from "../images/Frame.svg";
import Icon2 from "../images/Frame (1).svg";
import Icon3 from "../images/Frame (2).svg";
import Icon4 from "../images/Frame (3).svg";
const Navbar = () => {
  return (
    <nav className="bg-[#111315] text-white nav-border fixed top-0 right-0 left-0 z-50 md:bg-blue-500 lg:bg-[#111315] ">
      <div className="nav-grid flex">
        <div className="nav-logo  basis-[20%] flex flex-wrap gap-3 py-4 pl-8 nav-links-border">
          <img src={profile} alt="" />
          <div className="nav-logo-text flex flex-col ">
            <h3 className="font-kumbh text-[1.2rem] font-[600]">
              Azeez Habeeb
            </h3>
            <p className="font-kumbh font-[500]  text-[0.85rem] text-[#CFD0D0]">
              Product Designer
            </p>
          </div>
        </div>

        <div className="nav-text  basis-[80%] ">
          <div className="flex h-[100%] ">
            <div className=" px-7 min-h-[100%] basis-[45%]  flex items-center  nav-links-border">
              <p className=" font-kumbh text-[1rem] text-[#CFD0D0] font-semibold ">
                My Design Portfolio{" "}
              </p>
            </div>
            <div className="flex basis-[55%]">
              <div className="flex basis-[50%] items-center justify-center gap-8  nav-links-border">
                <a href="">
                  <img src={Icon1} className="w-[20px]" alt="" />
                </a>
                <a href="">
                  <img src={Icon2} className="w-[20px]" alt="" />
                </a>
                <a href="">
                  <img src={Icon3} className="w-[20px]" alt="" />
                </a>
                <a href="">
                  <img src={Icon4} className="w-[20px]" alt="" />
                </a>
              </div>
              <div className=" min-h-[100%] basis-[50%] px-3  flex flex-col items-center justify-center ">
                <a href="" className=" font-kumbh font-[600] text-[1rem] text-[#CFD0D0]">azeezhabeebomobolaji@gmail.com</a>
                <div className="flex gap-2 mt-1">
                    <a href="" className="text-[#CFD0D0] font-kumbh text-[0.75rem] font-medium ">+234 818 - 595-6620</a>
                    <div className="classic-border">

                    </div>
                    <a href="" className="text-[#CFD0D0] font-kumbh text-[0.75rem] font-medium">+234 814 - 794-8832</a>
                    
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
