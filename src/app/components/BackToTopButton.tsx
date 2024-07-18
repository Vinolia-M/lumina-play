import React, { useEffect } from "react";
import Image from "next/image";
import ArrowUpImage from "../../../public/arrowUpCircle.svg";

const BackToTopButton: React.FC = () => {
  useEffect(() => {
    const button = document.querySelector(".btn") as HTMLElement | null;
    const scrollToTop = () => {
      if (button) {
        button.addEventListener("click", () => {
          window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        });
      }
    };

    scrollToTop();
  }, []);

  return (
    <div>
      <button className="btn absolute left-[48%] w-[50px] h-[50px] justify-center items-center">
       <Image src={ArrowUpImage} alt="Tv Image" width={25} height={25} />
      </button>
    </div>
  );
};

export default BackToTopButton;
