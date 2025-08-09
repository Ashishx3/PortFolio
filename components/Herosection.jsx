import React from 'react';
import "./kl.css";
// import "./kl.mobile.css"; // mobile styles only
import Image from 'next/image';

const Herosection = () => {
  return (
    <div className="flex h-screen items-center hero">
      {/* Wrapper to set 50% height */}
      <div className="flex h-[50%] justify-center w-full">

        {/* Left Side - 30% width */}
        <Image
          width={350}
          height={50}
          src="/projectsimage/profile.png"
          alt='profile'
          className="ml-2.5 object-cover bg-gray-200 p-4 rounded-full shadow-md flex items-center justify-center"
        />

        {/* Right Side - 70% width */}
        {/* Ashish Singh  
Full-Stack Web Developer  
Data Science | AI | Backend | UI/UX   */}

        <div className="w-[65%] flex items-center justify-end pr-10">
          <h1 className="text-right font-semibold leading-tight capitalize">
            <span className="block xl:text-7xl md:text-6xl sm:text-5xl text-4xl text-white text-center">
              ASHISH SINGH
            </span>
            <span className="block xl:text-7xl md:text-6xl sm:text-5xl text-4xl text-white">
              Full-Stack Developer
            </span>
            <span className="block ddd xl:text-6xl md:text-5xl sm:text-4xl text-3xl text-center text-white mt-2">
              Data Science Student
            </span>
          </h1>
        </div>

      </div>
    </div>
  );
};

export default Herosection;
