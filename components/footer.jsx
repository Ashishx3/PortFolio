import React from "react";
import "@/Styles/Footer.css"

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 text-white h-20 flex items-center justify-center">
      <div className="flex flex-ro items-center justify-center gap-4 px-4">


        <h1 className="text-xl font-semibold drop-shadow-[0_0_8px_white] text-center">
          &copy; Ashish Singh
        </h1>

       
        <div style={{marginLeft:"40px"}} className="flex flex-wrap justify-center gap-6 text-sm sm:text-base text-gray-400">
          <a href="#about" className="hover:text-white transition">Home</a>
          <a href="#projects" className="hover:text-white transition">Resume</a>
          
          <a  className="hover:text-white transition">Email: <a href="#" className="hover:text-white transition hover:underline" target="_blank">ashishsinghxt@gmail.com </a></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
