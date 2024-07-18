import React from "react";
import Image from "next/image";
import tvImage from '../../../public/tv.png';
import StreetFighterImage from '../../../public/street-fighter.jpg';
import DownloadImage from '../../../public/download.svg';
import Accordions from "./Accordions";

const Contents: React.FC = () => {
   
    return (
    <div>
    <div className="border-t-[1px] border-white"></div>
        <main>
          <div className="enhance flex justify-center items-center mx-auto mt-[50px] mb-[50px]">
            <div className='w-full'>
              <h2 className="anim-text text-white text-5xl font-semibold mt-20">Enhance your GAMING experience</h2>
              <p className="anim-text text-white text-2xl mt-3 mb-20">
                Play unlimited games of your choice on your<br />phone, tablet, laptop, and TV.
              </p>
            </div>
            <Image src={tvImage} alt="Tv Image" width={500} height={300} />
          </div>
        </main>
        <div className="border-t-[1px] border-white"></div>
        <main>
        <div className="enhance flex justify-center items-center mx-auto mt-[50px] mb-[50px]">
            <div className='flex justify-center w-full'>
             <div className='flex justify-between items-center border-2 rounded-md p-3'>
              <Image src={StreetFighterImage} alt="Tv Image" width={50} height={25} />
              <p className='text-white pl-4'>Street Fighter<br />
                <span className='text-red'>Downloading...</span>
              </p>
              <Image src={DownloadImage} className="ml-20" alt="Download Image" width={30} height={30} />
             </div>
            </div>
            <div className='w-full'>
              <h2 className="anim-text text-white text-5xl font-semibold mt-20">
                Download your games to<br />play offline
              </h2>
              <p className="anim-text text-white text-2xl mt-3 mb-20">
                Save your favorites easily and always have <br />something to play.
              </p>
            </div>
          </div>
        </main>
        <div className="border-t-[1px] border-white"></div>
        <main>
          <div className="mx-auto text-center pt-20">
            <h2 className="anim-text text-white text-5xl font-semibold">Play everywhere</h2>
            <p className="anim-text text-white text-2xl mt-3 mb-20">
              Play on Smart TVs, Playstation, Xbox, Chromecast,
              <br />Apple TV, Blu-ray players, and play unlimited
              <br />games on your phone.
            </p>
          </div>
        </main>
        <div className="border-t-[1px] border-white"></div>
        <Accordions />
      </div>
    );
}

export default Contents;