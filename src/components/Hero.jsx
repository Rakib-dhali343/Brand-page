import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[1125px] h-[613px] grid grid-cols-2 pt-5 m-auto">
      <div className="w-[595px] flex flex-col gap-6 ml-5">
        <h1 className="text-left leading-[72px] text-7xl font-bold">
          YOUR FEET <br /> DESERVE <br />
          THE BEST
        </h1>

        <div>
          <p className="text-[#5A5959]">
            YOUR FEET YOUR FEET DESERVE THE BEST AND WE'RE HERE TO <br />
            HELP YOU WITH OUR SHOES.YOUR FEET DESERVE <br />
            THE BEST AND WE'RE HERE TO HELP YOU WITH OUR <br />
            SHOES.
          </p>
        </div>

        <div>
          <div className="flex gap-3 items-start w-[331px] h-[41]">
            <button className="bg-red-500 text-white w-[150px] h-[41px] font-semibold cursor-pointer">
              Shop Now
            </button>
            <button className="bg-white text-gray-500 border-black border-2 w-[141px] h-[41px] font-semibold cursor-pointer">
              Category
            </button>
          </div>
        </div>
        <div className="w-[131px] h-[67px]">
          <p className="h-[19px]"> Also Available On</p>
          <div className="flex gap-3 items-start mt-2 w-[80px] h-[32px]">
            <a href="https://www.amazon.com/">
              <img className="size-8" src="amazon.png" alt="amazon" />
            </a>
            <a href="https://www.flipkart.com/">
              <img className="size-8" src="flipkart.png" alt="flipkart" />
            </a>
          </div>
        </div>
      </div>

      <div className="  flex items-center justify-center ml-4">
        <img className="h-[487] w-[530px]" src="shoe_image.png" alt="shoe" />
      </div>
    </div>
  );
};

export default Hero;
