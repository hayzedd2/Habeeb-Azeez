import React from "react";
import habeebImg from "../images/Group 625878.png";
const HeroText = () => {
  return (
    <div>
      <div className="">
        <div className="flex min-h-[93vh] pt-[8rem] xl:flex-nowrap sm:flex-wrap">
          <div className="xl:basis-[70%] sm:basis-[100%] xl:px-7 sm:px-4">
            <div className="">
              <h1 className="hero-text-h1 xl:mt-8 sm:mt-5">
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
              <div className="btns flex mt-10 gap-4 xl:flex-nowrap sm:flex-wrap">
                <a href="">
                  <button className="btn-1">More about me</button>
                </a>
                <a href="">
                  <button className="btn-2">See my Works</button>
                </a>
              </div>
            </div>
          </div>
          <div className=" flex xl:items-end sm:justify-center sm:items-center xl:basis-[30%] sm:basis-[100%] ">
            <img src={habeebImg} alt="" className="xl:w-full sm:w-[20rem]" />
          </div>
        </div>
        <div className=" flex px-7 items-center justify-between h-[6vh] footer-border ">
          <p className="text-[#CFD0D0] font-[500] text-[0.9rem]">
            Copyright © 2022
          </p>
          <p className="text-[#CFD0D0] font-[500] text-[0.9rem]">
            Designed by Azeez Habeeb with love❤️ and light💡
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
