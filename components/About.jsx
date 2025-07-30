"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "@/Styles/About.css";

const About = () => {
  const headingControls = useAnimation();
  const skillControls = useAnimation();

  const [isClient, setIsClient] = useState(false);
  const [headingRef, headingInView] = useInView({ threshold: 0.3 });
  const [skillsRef, skillsInView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

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
  }, [headingInView, skillsInView, headingControls, skillControls, isClient]);

  if (!isClient) return null;

  return (
    <div
      id="aboutscroll"
      className="aboutdiv w-full min-h-screen flex-col flex items-center container scroll-mt-28"
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
        <div
          style={{ fontSize: "17px", marginTop: "10px" }}
          className="sm:text-base with text-gray-300 w-[60%]"
        >
          <div className="text-2xl">Hi,</div>
          <div style={{ marginBottom: "23px" }} className="text-3xl sp">
            I'm Ashish
          </div>
          I’m a passionate full-stack web developer skilled in modern technologies like React, Next.js, and Tailwind CSS. I enjoy building responsive, clean user interfaces and performant backends. I'm currently pursuing a B.Tech in Computer Science with a specialization in Artificial Intelligence and Data Science. I also have a strong command of Java and Data Structures & Algorithms.
        </div>

        {/* Skills Grid */}
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
          {["framer", "mongo", "firebase"].map((tech) => (
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
