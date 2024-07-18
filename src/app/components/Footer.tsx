'use client'

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import instagramImage from '../../../public/instagram.svg';
import twitterImage from '../../../public/linkedIn.svg';
import linkedInImage from '../../../public/twitter.svg';


const Footer: React.FC = () => {
    const router = useRouter();

  return (
    <div>
      <div className="border-t-[1px] border-white mt-[100px]"></div>
      <main>
        <h1 className="text-white text-2xl mb-4 mt-8">Quick links</h1>
        <div className="flex justify-between mb-8">
          <div>
            <a href="#" className="text-white underline" onClick={() => router.push('/')}>FAQ</a><br />
            <a href="#" className="text-white underline" onClick={() => router.push('/')}>Ways to play</a><br />
            <a href="#" className="text-white underline" onClick={() => router.push('/')}>Legal Notices</a><br />
            <a href="#" className="text-white underline" onClick={() => router.push('/')}>Only on Lumina-Play</a>
          </div>
          <div>
            <a href="#" className="text-white underline" onClick={() => router.push('/')}>Terms of use</a><br />
            <a href="#" className="text-white underline" onClick={() => router.push('/')}>Help center</a><br />
            <a href="#" className="text-white underline" onClick={() => router.push('/')}>Cookie preferences</a><br />
            <a href="#" className="text-white underline" onClick={() => router.push('/')}>Contact us</a>
          </div>
          <div>
            <a href="#" className="text-white underline" onClick={() => router.push('/')}>Account</a><br />
            <a href="#" className="text-white underline" onClick={() => router.push('/')}>Redeem Gift Cards</a><br />
            <a href="#" className="text-white underline" onClick={() => router.push('/')}>Buy Gift Cards</a><br />
            <a href="#" className="text-white underline" onClick={() => router.push('/')}>Privacy</a>
          </div>
          <div className="socials">
           <Image src={instagramImage} 
             className="mb-5 cursor-pointer" 
             onClick={() => router.push('/')} alt="Tv Image" 
             width={20} 
             height={20} />
           <Image src={twitterImage} 
             className="mb-5 cursor-pointer" 
             onClick={() => router.push('/')} alt="Tv Image" 
             width={20} 
             height={20} />
           <Image src={linkedInImage} 
             className="cursor-pointer" 
             onClick={() => router.push('/')} alt="Tv Image"
             width={20} 
             height={20} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Footer;
