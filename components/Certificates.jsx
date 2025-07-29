import React from 'react'
import Image from 'next/image'
import "../Styles/Certificates.css" 

const Certificates = () => {
  return (
    <div id='certificates'>
      <div className="w-full bg-black text-center flex-col  items-center flex min-h-screen">
     <div className="w-full items-center justify-center flex bg-black border border-t-purple-500 border-b-purple-500 py-10 h-[65px] brightness-105 text-center">
        <span className="text-3xl text-purple-600  font-bold">Certificates :-</span>
      </div>
   
        <div  className="relative w-[70vw] mt-10 mx-auto overflow-hidden cont rounded-xl shadow-lg">
            <p className='s'>Slide to Interact </p>
  <div className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth no-scrollbar">
    <div id="slide1" className="snap-center shrink-0 w-full h-64">
      <img src="/projectsimage/cou.png" className="w-full h-full object-contain rounded-xl" />
    </div>
    <div id="slide2" className="snap-center shrink-0 w-full h-64">
      <img src="/projectsimage/videoediting.jpg"className="w-full h-full object-contain rounded-xl" />
    </div>
    <div id="slide3" className="snap-center shrink-0 w-full h-64">
      <img src="/projectsimage/Digital.png" className="w-full h-full object-contain rounded-xl" />
    </div>
    <div id="slide4" className="snap-center shrink-0 w-full h-64">
      <img src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp" className="w-full h-full object-contain rounded-xl" />
    </div>
  </div>

  <div style={{marginTop:"21px"}} className="flex justify-center gap-2 py-4 ">
    <a href="#slide1" className="w-8 h-8 text-sm font-semibold rounded-full bg-zinc-800 text-white flex items-center justify-center hover:bg-zinc-600 transition">1</a>
    <a href="#slide2" className="w-8 h-8 text-sm font-semibold rounded-full bg-zinc-800 text-white flex items-center justify-center hover:bg-zinc-600 transition">2</a>
    <a href="#slide3" className="w-8 h-8 text-sm font-semibold rounded-full bg-zinc-800 text-white flex items-center justify-center hover:bg-zinc-600 transition">3</a>
    <a href="#slide4" className="w-8 h-8 text-sm font-semibold rounded-full bg-zinc-800 text-white flex items-center justify-center hover:bg-zinc-600 transition">4</a>
  </div>
</div>

    </div>
      </div>
    
  )
}

export default Certificates
