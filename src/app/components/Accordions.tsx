import React, { useEffect } from "react";
import Image from "next/image";
import BackToTopButton from './BackToTopButton';
import LordsOfTheFallenImage from '../../../public/lords.png';
import SpiderManImage from '../../../public/spider-man.jpg';
import AssassinsCreedImage from '../../../public/assassins-creed.jpg';
import GrandTurismoImage from '../../../public/grand-turismo.jpg';
import FifaImage from '../../../public/fifa.jpg';

const Accordion: React.FC = () => {
  useEffect(() => {
    const itemsArray = ["1", "1", "1", "1", "1"];
    const container = document.getElementById("container") as HTMLElement;
    const items = document.querySelectorAll(".itemDiv");

    const handleMouseOver = (event: Event) => {
      const target = event.target as HTMLElement;
      const clickedItemId = target.id;

      const newItemsArray = ["1", "1", "1", "1", "1"];

      newItemsArray[parseInt(clickedItemId)] = "3";

      container.style.gridTemplateColumns = newItemsArray.join("fr ") + "fr";
    };

    const handleMouseOut = () => {
      const newItemsArray = ["1", "1", "1", "1", "1"];

      container.style.gridTemplateColumns = newItemsArray.join("fr ") + "fr";
    };

    items.forEach((item, index) => {
      item.id = index.toString();

      item.addEventListener("mouseover", handleMouseOver);
      item.addEventListener("mouseout", handleMouseOut);
    });

    return () => {
      items.forEach((item) => {
        item.removeEventListener("mouseover", handleMouseOver);
        item.removeEventListener("mouseout", handleMouseOut);
      });
    };
  }, []);

  return (
    <div>
      <h2 className="anim-text text-white text-center text-5xl font-semibold pt-20">
        Have a glimps to some of the games we have.
      </h2>
      <div className="flex w-full h-[50vh] justify-center mt-[100px]">
        <div id="container" className="grid w-[60%] h-[100%]">
          <div className="itemDiv relative">
            <Image src={SpiderManImage} id="0" 
              className="item" 
              alt="Spider Man Image" 
              width={700} height={900} 
            />
            <div id="0" className="bg"></div>
            <h3 className="text header" id="0">Spider-Man Miles Morales</h3>
          </div>
          <div className="itemDiv relative">
            <Image src={AssassinsCreedImage} id="1" 
              className="item" 
              alt="Assassins Creed Image" 
              width={700} height={900} 
            />
            <div id="1" className="bg"></div>
            <h3 className="text header" id="1">Assassins-Creed</h3>
          </div>
          <div className="itemDiv relative">
            <Image src={GrandTurismoImage} id="2" 
              className="item" 
              alt="Grand Turismo Image" 
              width={700} height={900} 
            />
            <div id="2" className="bg"></div>
            <h3 className="text header" id="2">Grand-Turismo 7</h3>
          </div>
          <div className="itemDiv relative">
            <Image src={LordsOfTheFallenImage} id="3" 
              className="item" 
              alt="Lords Image" 
              width={700} height={900} 
            />
            <div id="3" className="bg"></div>
            <h3 className="text header" id="3">Lords of The Fallen</h3>
          </div>
          <div className="itemDiv relative">
            <Image src={FifaImage} id="4" 
              className="item" 
              alt="Fifa Image" 
              width={700} height={900} 
            />
            <div id="4" className="bg"></div>
            <h3 className="text header" id="4">FIFA 23</h3>
          </div>
        </div>
      </div>
      <h6 className="text-white font-semi text-center text-2xl mt-10 mb-5 pl-[35px] pr-[35px]">
        Ready to play? Click on the button below, start your membership and start playing TODAY!!!
      </h6>
        <BackToTopButton />
    </div>
  );
};

export default Accordion;
