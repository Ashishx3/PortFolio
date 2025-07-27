import React from 'react';
import "./kl.css";
import Image from 'next/image';

const Herosection = () => {
  return (
    <div className="flex h-screen items-center hero">
      {/* Wrapper to set 70% height */}
      <div className="flex h-[50%]  justify-center w-full">
        
        {/* Left Side - 30% width */}
        <Image width={350} height={50} src="/profile.png" alt='profile' className=" ml-2.5 object-fill bg-gray-200 p-4 rounded-full shadow-md flex items-center justify-center">
          
        </Image>

        {/* Right Side - 70% width */}
        <div className="w-[65%] flex items-center justify-end pr-10">
          <h1 className="text-right font-semibold leading-tight capitalize">
            <span className="block xl:text-7xl md:text-6xl sm:text-5xl text-4xl text-black dark:text-white">
              ASHISH SINGH 
            </span>
            <span className="block xl:text-7xl md:text-6xl sm:text-5xl text-4xl text-black dark:text-white">
              Full-Stack Developer
            </span>
            <span className="block ddd xl:text-6xl md:text-5xl sm:text-4xl text-3xl text-gray-700 dark:text-gray-300 mt-2">
              Data Science Student
            </span>
          </h1>
        </div>

      </div>
    </div>
  );
};

export default Herosection;
;


// import React from 'react'
// import "./kl.css"

// const Herosection = () => {
//   return (
//     <div>
//       {/* <h1 className='hg capitalize  xl:text-7xl md:text-6xl sm:text-5xl text-3xl w-4/5 mx-auto text-center tex font-semibold leading-[110%]'>Full-Stack Developer <p>Data Science Student</p></h1> */}
//       <h1 className="text-center font-semibold leading-tight capitalize">
//   <span className="block xl:text-7xl md:text-6xl sm:text-5xl text-4xl text-black dark:text-white">
//     Full-Stack Developer
//   </span>
//   <span className="block ddd xl:text-6xl md:text-5xl sm:text-4xl text-3xl text-gray-700 dark:text-gray-300 mt-2">
//     Data Science Student
//   </span>
// </h1>

//     </div>
//   )
// }

// export default Herosection
