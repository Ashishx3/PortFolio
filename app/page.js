"use client"
import Image from "next/image";
import { useRef } from "react";

import Herosection from "@/components/Herosection";
import CanvasCursor from "@/components/Cursor";
import Smoothcursor from "@/components/Smoothcursor";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Certificates from "@/components/Certificates";
import Footer from "@/components/footer";




export default function Home() {
  return (
    <div>
      
   <CanvasCursor/>
   <Smoothcursor/>
  <Herosection/>
  <About/>
  <Projects/>
  <Certificates/>
    <Footer/>
    
    </div>
  );
}
