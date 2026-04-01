import React from "react";

const Score = () => {
  return (
    <div className="px-4">
      <div className="max-w-[1600px] mx-auto py-10 md:py-16 bg-linear-to-r from-[#4f39f6] to-[#9514fa] ">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row text-center text-white divide-y md:divide-y-0 md:divide-x md:h-3/6 divide-white/40">
          {/* Item 1 */}
          <div className="flex-1 px-6 py-6">
            <div className="text-3xl sm:text-4xl md:text-6xl font-extrabold">
              50K+
            </div>
            <div className="mt-2 md:mt-3 text-sm sm:text-base md:text-2xl opacity-80">
              Active Users
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex-1 px-6 py-6">
            <div className="text-3xl sm:text-4xl md:text-6xl font-extrabold">
              200+
            </div>
            <div className="mt-2 md:mt-3 text-sm sm:text-base md:text-2xl opacity-80">
              Premium Tools
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex-1 px-6 py-6">
            <div className="text-3xl sm:text-4xl md:text-6xl font-extrabold">
              4.9
            </div>
            <div className="mt-2 md:mt-3 text-sm sm:text-base md:text-2xl opacity-80">
              Rating
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Score;
