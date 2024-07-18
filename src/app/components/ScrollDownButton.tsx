import React from "react";

const ScrollDownButton: React.FC = () => {

    return(
        <div id="scroll" className='text-white text-xl mt-40 pb-40'>
          <button className='pt-[90px]'>
            <span className='absolute top-[0] left-[48%] w-[45px] h-[80px] border-2 rounded-full'></span>
            Scroll down for some awesomeness
          </button>
        </div>
    );
}

export default ScrollDownButton;