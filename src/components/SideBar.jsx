import React from "react";
import Icon1 from "../images/Home (Stroke).svg";
import Icon2 from "../images/Vector (Stroke).svg";
import Icon3 from "../images/Stack.svg";
import Icon4 from "../images/Layout.svg";
import Icon5 from "../images/Verified Badge.svg";
import Icon6 from "../images/Edit.svg";
import { NavLink } from "react-router-dom";
const SideBar = () => {
  return (
    <div className="fixed left-0 w-1/5">
      <nav className="flex flex-col gap-4  md:bg-red-700 lg:bg-transparent sm:hidden xl:flex px-8 text-white max-h-screen nav-links-border overflow-y-scroll  scroll-container ">
        <div className="mt-[7rem]">
          <h4 className="sidebar-placeholder">MENU</h4>
          <div className="links-holder">
            <NavLink
              to={"/"}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "sidebar-anchor text-white " 
              }
  
            >
              <img src={Icon1} className="w-4" alt="" />
              <p className="sidebar-links "> Home</p>
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "sidebar-anchor text-white " 
              }
  
            >
              <img src={Icon2} className="w-4" alt="" />
              <p className="sidebar-links ">About Me</p>
            </NavLink>
            <NavLink to={'/case-study'}  className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "diff-active" : "sidebar-diff-links " 
              }>
              <div className="flex gap-3 items-center">
                <img src={Icon3} className="w-4" alt="" />
                <p className="sidebar-links">My Case Studies</p>
              </div>
              <div className="bg-[#EB5757] sidebar-attach">
                <p>6</p>
              </div>
            </NavLink>
            <NavLink
              to={"/work"}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "sidebar-anchor text-white " 
              }
  
            >
              <img src={Icon4} className="w-4" alt="" />
              <p className="sidebar-links ">Work Experience</p>
            </NavLink>
          </div>
        </div>
        <div className="mt-3 mb-3">
          <h4 className="sidebar-placeholder">MORE</h4>
          <div className="links-holder">
            <NavLink to={'/certifications'}  className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "diff-active" : "sidebar-diff-links " 
              }>
              <div className="flex gap-3 items-center">
                <img src={Icon5} className="w-4" alt="" />
                <p className="sidebar-links">Certifications</p>
              </div>
              <div className="bg-[#2F80ED] sidebar-attach">
                <p>4</p>
              </div>
            </NavLink>
            <NavLink
              to={"/recommendations"}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "sidebar-anchor text-white " 
              }
  
            >
              <img src={Icon6} className="w-4" alt="" />
              <p className="sidebar-links ">Recommendations</p>
            </NavLink>
        
          </div>
        </div>
        <div className="contact-us">
          <h3 className=" font-kumbh font-[600]">Let’s Build Together</h3>
          <p className=" font-kumbh leading-8 my-3 text-[#CFD0D0]">
            Trust me, I’d love to hear about your project, Shoot me a mail.
          </p>
          <a href="mailto:azeezhabeebomobolaji" target="_blank">
            <button className="w-full py-3 font-kumbh border border-white rounded-[8px]">
              Contact Me
            </button>
          </a>
        </div>
      </nav>
    </div>
  );
  
};

export default SideBar;
