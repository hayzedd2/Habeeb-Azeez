import React from "react";
import habeebImg from "../images/Group 625878.png";
const HeroText = () => {
  return (
    <div>
      <div className="pt-[8rem] md:pt-[8rem] lg:pt-0">
        <div className="flex items-center  pl-7  justify-center  ">
          <div className="basis-[70%]  ">
            <div className="text max-w-[50rem]">
              <h1 className="hero-text-h1">
                Hello there. I'm glad to have you here, I'm Habeeb, a{" "}
                <span className="text-[#FFBD6A]"> Product Designer.</span>
              </h1>
              <p className="hero-text-p">
                I'm a product designer with years of expertise providing
                end-to-end designs for digital products, currently based in
                Lagos, Nigeria. With UI design, I create exceptional user
                experiences from concept to completion. <br /> I am obsessed
                with creating excellent products that make people's lives
                easier. I design unique user interfaces for small businesses,
                corporations, and startups.
              </p>
              <div className="btns mt-10 flex gap-5">
                <a href="">
                  <button className="btn-1">More about me</button>
                </a>
                <a href="">
                  <button className="btn-2">See my Works</button>
                </a>
              </div>
            </div>
          </div>
          <div className="basis-[30%] flex items-end min-h-[94.5vh] justify-end ">
            <img src={habeebImg} alt="" />
          </div>
        </div>
        <div className="flex footer-border items-center pt-3 px-7 font-kumbh w-full justify-between">
          <p className="text-[#CFD0D0] font-[500] text-[0.9rem]">Copyright © 2022</p>
          <p className="text-[#CFD0D0] font-[500] text-[0.9rem]">Designed by Azeez Habeeb with love❤️ and light💡</p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
