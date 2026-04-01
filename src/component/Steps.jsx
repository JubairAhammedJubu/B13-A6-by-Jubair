import React from 'react';
import User from "../assets/user.png";
import Pakage from "../assets/package.png";
import Rocket from "../assets/rocket.png";

const Steps = () => {
    return (
      <div className="bg-gray-50 md:py-30 py-10">
        <div className="max-w-[1200px] mx-auto text-center">
         
          <h2 className="text-2xl md:text-[48px] font-bold text-gray-800 mb-3">
            Get Started In 3 Steps
          </h2>
          <p className="text-sm text-gray-500 md:mb-16 mb-8">
            Start using premium digital tools in minutes, not hours.
          </p>

       
          <div className="grid md:grid-cols-3 gap-8 md:px-0 px-4">
         
            <div className="bg-white rounded-2xl shadow-sm px-8 py-10 relative flex flex-col">
              <div className="absolute top-4 right-4 bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white text-sm font-bold px-3 py-2.5 rounded-full">
                01
              </div>

              <div className="p-5 mx-auto m-7 rounded-full bg-purple-100 flex items-center justify-center">
                <img src={User} alt="Create Account" />
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Create Account
              </h3>
              <p className=" text-gray-500 leading-relaxed">
                Sign up for free in seconds. No credit card required to get
                started.
              </p>
            </div>

     
            <div className="bg-white rounded-2xl shadow-sm px-8 py-10 relative flex flex-col">
              <span className="absolute top-4 right-4 bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white text-sm font-bold px-3 py-2.5 rounded-full">
                02
              </span>

              <div className="p-5 mx-auto m-7 rounded-full bg-purple-100 flex items-center justify-center">
                <img src={Pakage} alt="Choose Products" />
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Choose Products
              </h3>
              <p className=" text-gray-500 leading-relaxed">
                Browse our catalog and select the tools that fit your needs.
              </p>
            </div>

          
            <div className="bg-white rounded-2xl shadow-sm px-8 py-10 relative flex flex-col">
              <span className="absolute top-4 right-4 bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white text-sm font-bold px-3 py-2.5 rounded-full">
                03
              </span>

              <div className="p-5 mx-auto m-7 rounded-full bg-purple-100 flex items-center justify-center">
                <img src={Rocket} alt="Start Creating" />
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Start Creating
              </h3>
              <p className=" text-gray-500 leading-relaxed">
                Download and start using your premium tools immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Steps;