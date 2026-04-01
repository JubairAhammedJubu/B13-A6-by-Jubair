import faceBook from "../assets/Facebook.png";
import instagram from "../assets/Instagram.png";
import twitter from "../assets/Twitter.png";

const Footer = () => {
  return (
    <div class="bg-[#011239] text-gray-300">
      {/* <!-- Inner Container --> */}
      <div class="max-w-[1200px] mx-auto pt-10 md:pt-30 pb-7.5 px-4">
        {/* <!-- Top Grid --> */}
        <div class="grid grid-cols-2 gap-2 md:grid-cols-6">
          {/* <!-- Brand --> */}
          <div class="col-span-2">
            <h2 class="text-white text-3xl font-bold mb-4">DigiTools</h2>
            <p class="text-sm leading-relaxed text-gray-400">
              Premium digital tools for creators,
              <br /> professionals, and businesses. Work smarter <br /> with our
              suite of powerful tools.
            </p>
          </div>
          {/* 
      <!-- Product --> */}
          <div>
            <h3 class="text-xl text-white font-medium mb-4">Product</h3>
            <ul class="space-y-2 text-gray-400">
              <li>
                <a href="#" class="hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Templates
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- Company --> */}
          <div>
            <h3 class="text-xl text-white font-medium mb-4">Company</h3>
            <ul class="space-y-2 text-gray-400">
              <li>
                <a href="#" class="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- Resources --> */}
          <div>
            <h3 class="text-xl text-white font-medium mb-4">Resources</h3>
            <ul class="space-y-2 text-gray-400">
              <li>
                <a href="#" class="hover:text-white">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Community
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- Social --> */}
          <div>
            <h3 class="text-xl text-white font-medium mb-4">Social Links</h3>
            <div class="flex space-x-3">
              <img src={instagram} alt="" />
              <img src={faceBook} alt="" />
              <img src={twitter} alt="" />
            </div>
          </div>
        </div>

        {/* <!-- Divider --> */}
        <div class="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-500">
          <p>© 2026 Digitools. All rights reserved.</p>
          <div class="flex space-x-6 mt-3 md:mt-0">
            <a href="#" class="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" class="hover:text-white">
              Terms of Service
            </a>
            <a href="#" class="hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
