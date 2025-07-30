"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import "@/Styles/Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="rounded-b-lg border-x border-b border-border backdrop-blur-md  flex items-center px-3 h-10 max-w-screen-xl mx-auto dark:bg-black/40 bg-primary-foreground">

        <div className="basis-[40%] mx-2">
          <Link className='flex on flex-wrap w-[60%]' href="/">
            <p className='navtextlogo px-1'>Ashish Singh</p>
            <Image width={35} height={35} alt="Profile logo" className='onmobile' src='/AS.png'></Image>
          </Link>
        </div>

        <div className="basis-[40%] flex justify-end">
          <ul className='text-white flex gap-6 ull'>
            <li><Link href="#aboutscroll">About</Link></li>
            <li><Link href="#certificates">Certifications</Link></li>
            <li><Link href="/Contact">Contact</Link></li>
            <li><Link href="/">Resume</Link></li>
          </ul>
        </div>

      </nav>
    </>
  );
};

export default Navbar;
