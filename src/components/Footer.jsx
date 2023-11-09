import React from "react";
import footerImg from '../images/Group 625890.png'
const Footer = () => {
  return (
    <footer>
      <div className="thanks pt-8 pb-20 flex flex-col items-center justify-center gap-5">
        <div className="text-center flex flex-col items-center gap-4">
        <img src={footerImg} className="w-[4.5rem]" alt="" />
        <p className=" font-kumbh font-[600] text-[1.1rem]">
          Thank you for scrolling through this far.
        </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
