"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import SearchImage from '../../../public/search.svg';
import PlayImage from "../../../public/play.svg";
import instagramImage from '../../../public/instagram.svg';
import twitterImage from '../../../public/linkedIn.svg';
import linkedInImage from '../../../public/twitter.svg';
import appleImage from '../../../public/apple.svg';
import windowsImage from '../../../public/windows.svg';
import Slider from '../components/Slider';
import SearchBar from '../components/Searchbar';

const slides = [
  { src: '/vrGames.svg', alt: 'Image 1', title: 'VR GAMES', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { src: '/esports.svg', alt: 'Image 2', title: 'ENTER IN ESPORT\'S', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { src: '/console-games.svg', alt: 'Image 3', title: 'CONSOLE GAMES', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
];

interface FormField {
  label: string;
  type: string;
}

const LandingPage: React.FC = () => {
  const router = useRouter();

  const handleNavigationClick = (event: React.MouseEvent<HTMLButtonElement>, path: string) => {
    event.preventDefault();
    router.push(path);
  };

  return (
    <div>
      <div className="background h-[100%]">
          <div className="nav-menu flex justify-between">
            <div className="flex items-center gap-[40px] text-white">
              <h5 className="border-r-[2px] pr-[30px]">GAMING.</h5>
              <SearchBar />
            </div>
            <p className="logo-animation text-white text-3xl font-semibold">LuminaS-Play</p>
            <div className="buttons flex items-center gap-[30px]">
               <button className="sign-up text-white" onClick={(event) => handleNavigationClick(event, '/signup')}>SIGN UP</button>
               <button className="sign-up text-white" onClick={(event) => handleNavigationClick(event, '/signin')}>LOG IN</button>
            </div>
          </div>
          <div className="inner-content mt-[190px] px-[70px]">
            <p className="text-white text-xl">JOIN THE ULTIMATE GAMING EXPERIENCE</p>
            <h1 className="text-white text-[60px] font-semibold leading-[60px]">DIVE INTO EPIC<br />ADVENTURES</h1>
            <div className="center-on-554px flex flex-wrap gap-[40px]">
             <button className="explore text-white text-[20px] mt-4" onClick={(event) => handleNavigationClick(event, '/')}>EXPLORE</button>
             <div className="flex items-center gap-[15px] mt-4">
               <div className="play-button">
                <Image src={PlayImage} className="playImage ml-[3px]" alt="Tv Image" width={20} height={20} />
               </div>
               <p className="text-white text-[18px] font-semibold mb-0">PLAY DEMO...</p>
             </div>
            </div>
            <div className="line"></div>
            <div className="center-on-554px flex flex-wrap justify-between mt-[50px]">
            <div className="landingPage-socials flex gap-[20px]">
             <Image src={instagramImage} 
               className="cursor-pointer" 
               onClick={() => router.push('/')} alt="Tv Image" 
               width={25} 
               height={25} />
             <Image src={twitterImage} 
               className="cursor-pointer" 
               onClick={() => router.push('/')} alt="Tv Image" 
               width={25} 
               height={25} />
             <Image src={linkedInImage} 
               className="cursor-pointer" 
               onClick={() => router.push('/')} alt="Tv Image"
               width={25} 
               height={25} />
            </div>
            <div>
            <p className="text-white text-2xl">ONLY FOR:</p>
            <div className="flex justify-center gap-[20px] mt-2">
             <Image src={appleImage} 
               className="cursor-pointer" 
               onClick={() => router.push('/')} alt="Tv Image" 
               width={40} 
               height={40} />
             <Image src={windowsImage} 
               className="cursor-pointer" 
               onClick={() => router.push('/')} alt="Tv Image" 
               width={40} 
               height={40} />
            </div>
            </div>
            </div>
          </div>
          <Slider slides={slides} />
      </div>
    </div>
  );
};

export default LandingPage;
