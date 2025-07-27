"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "@/Styles/About.css";

const About = () => {
  const headingControls = useAnimation();
  const skillControls = useAnimation();

  const [headingRef, headingInView] = useInView({ threshold: 0.3 });
  const [skillsRef, skillsInView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (headingInView) {
      headingControls.start({ opacity: 1, y: 0 });
    } else {
      headingControls.start({ opacity: 0, y: -60 });
    }

    if (skillsInView) {
      skillControls.start({ opacity: 1, x: 0 });
    } else {
      skillControls.start({ opacity: 0, x: -60 });
    }
  }, [headingInView, skillsInView, headingControls, skillControls]);

  return (
    <div
      id="aboutscroll"
      className="aboutdiv w-full min-h-screen flex-col flex items-center container scroll-mt-28" // scroll-mt helps with navbar offset
    >
      {/* Heading */}
      <motion.div
        ref={headingRef}
        initial={{ opacity: 0, y: -60 }}
        animate={headingControls}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="Aboutme text-7xl sm:text-4xl md:text-6xl mb-8"
      >
        About Me
      </motion.div>

      {/* Main Content */}
      <div className="flex justify-around w-[80vw] items-center aboutdiv">
        {/* Left Side */}
        <p style={{fontSize: "17px", marginTop: "10px"}} className="sm:text-base text-gray-300  w-[60%]">
          <p className="text-2xl">Hi,</p>
          <p style={{marginBottom: "23px"}} className="text-3xl sp">I'm Ashish</p>I’m a passionate full-stack web
          developer skilled in modern technologies like React, Next.js, and
          Tailwind CSS. I enjoy building responsive, clean user interfaces and
          performant backends. I'm currently pursuing a B.Tech in Computer
          Science with a specialization in Artificial Intelligence and Data
          Science. I also have a strong command of Java and Data Structures &
          Algorithms.
        </p>

        {/* Skills Grid with Motion */}
        <motion.div
          ref={skillsRef}
          initial={{ opacity: 0, x: -60 }}
          animate={skillControls}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-[35%] flex flex-wrap gap-6 justify-center"
        >
          {[
            "react",
            "nextjs",
            "tailwind",
            "redux",
            "js",
            "node",
           
          ].map((tech) => (
            <Image
              key={tech}
              src={`/${tech}.png`}
              alt={tech}
              width={100}
              height={100}
              className="imageskill rounded-xl object-contain"
            />
          ))}
          {[
            
            "framer",
            "mongo",
            "firebase",
          ].map((tech) => (
            <Image
              key={tech}
              src={`/${tech}.png`}
              alt={tech}
              width={100}
              height={100}
              className="imageskill rounded-xl object-cover"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;



// "use client";

// import React from "react";
// import Image from "next/image";
// import "@/Styles/About.css";

// const About = () => {
//   return (
//     <div
//       id="aboutscroll"
//       className="aboutdiv w-full h-[101vh] flex-col flex items-center container"
//     >
//       {/* Heading */}
//       <div className="Aboutme text-7xl sm:text-4xl md:text-6xl mb-8">
//         About Me
//       </div>

//       {/* Main Content */}
//       <div className="flex justify-around w-[80vw] items-center aboutdiv">
//         {/* Left Side (larger text area) */}
//         <p className="text-xl sm:text-base text-gray-300  w-[60%]">
//           <p className="text-2xl">Hi,</p>
//           <p className="text-3xl sp">I'm Ashish</p>I’m a passionate full-stack web
//           developer skilled in modern technologies like React, Next.js, and
//           Tailwind CSS. I enjoy building responsive, clean user interfaces and
//           performant backends. I'm currently pursuing a B.Tech in Computer
//           Science with a specialization in Artificial Intelligence and Data
//           Science. I also have a strong command of Java and Data Structures &
//           Algorithms.
//         </p>

//         {/* Right Side (Image instead of skills) */}
       
//         <div className="w-[35%] flex flex-wrap gap-6 justify-center">
//           <Image
//             src="/react.png" // make sure this image exists in public/images
//             alt="React.js"
//             width={100}
//             height={100}
//             className="imageskill rounded-xl object-contain"
//           />
//           <Image
//             src="/nextjs.png" // make sure this image exists in public/images
//             alt="Next.js"
//             width={100}
//             height={100}
//             className="imageskill rounded-xl object-contain"
//           />
//           <Image
//             src="/tailwind.png" // make sure this image exists in public/images
//             alt="Tailwind css"
//             width={100}
//             height={100}
//             className="imageskill rounded-xl object-contain"
//           />
//           <Image
//             src="/redux.png" // make sure this image exists in public/images
//             alt="Redux"
//             width={100}
//             height={100}
//             className="imageskill rounded-xl object-contain"
//           />
//           <Image
//             src="/js.png" // make sure this image exists in public/images
//             alt="JavaScript"
//             width={100}
//             height={100}
//             className="imageskill rounded-xl object-contain"
//           />
//           <Image
//             src="/node.png" // make sure this image exists in public/images
//             alt="NodeJS"
//             width={100}
//             height={100}
//             className="imageskill rounded-xl object-contain"
//           />
//           <Image
//             src="/framer.png" // make sure this image exists in public/images
//             alt="Framer-Motion"
//             width={100}
//             height={100}
//             className="imageskill rounded-xl object-cover"
//           />
//           <Image
//             src="/mongo.png" // make sure this image exists in public/images
//             alt="MongoDb"
//             width={100}
//             height={100}
//             className="imageskill rounded-xl object-cover"
//           />
//           <Image
//             src="/firebase.png" // make sure this image exists in public/images
//             alt="Firebase"
//             width={100}
//             height={100}
//             className="imageskill rounded-xl object-contain"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
