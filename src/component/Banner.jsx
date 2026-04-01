import React from "react";
import BannerImage from "../assets/banner.png";
import playButton from "../assets/Play.png";
import circle from "../assets/circle.png";

const Banner = () => {
  return (
    <div className="px-4">
      <div className="max-w-[1200px] py-12 md:py-20 flex flex-col-reverse md:flex-row items-center justify-between m-auto gap-10">
        {/* Text Section */}
        <div className="max-w-lg text-center md:text-left">
          <button className="flex items-center gap-1.5 text-purple-500 text-xs md:text-sm bg-indigo-100 py-2 px-4 rounded-full mx-auto md:mx-0">
            <img src={circle} alt="" className="w-3 h-3 md:w-4 md:h-4" />
            New: AI-Powered Tools Available
          </button>

          <h1 className="text-2xl sm:text-4xl md:text-5xl leading-tight font-extrabold my-4">
            Supercharge Your Digital Workflow
          </h1>

          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white px-6 py-3 rounded-full w-full sm:w-auto">
              Explore Products
            </button>

            <button className="flex items-center justify-center gap-2 border border-purple-600 text-purple-600 px-6 py-3 rounded-full w-full sm:w-auto">
              <img src={playButton} alt="" className="w-4 h-4" />
              <span>Watch Demo</span>
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="shrink-0 max-w-xs sm:max-w-sm md:max-w-lg">
          <img
            src={BannerImage}
            alt="Digital workflow"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
