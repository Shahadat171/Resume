import './Header.css'
import banner from "../../assets/Image/Shahadat-hd (11).png";
import wallpaper from "../../assets/Image/wallpaper.jpg";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaArrowAltCircleDown,
} from "react-icons/fa";
const Header = () => {
  return (
    <div className="bg-[#222b5f] h-[93vh] flex gap-x-28 items-center text-lg pl-40 pt-14 pb-24 text-white">
      {/* <div className="w-1/2 mt-20 text-slate-200">
        <h1 className="text-5xl font-semibold ">Hi, I'm Shahadat Hosan</h1>
        <h1 className="text-4xl font-semibold mt-4">Frontend developer</h1>
        <p className="mt-5 font-sans mb-5">
          Highly skilled and dedicated frontend developer with expertise in MERN
          MongoDB, Express.js, React, Node.js stack development. Proven track
          record of creating responsive and intuitive UI and optimizing website
          performance. A meticulous approach to coding and a strong commitment
          to delivering precise, efficient, and maintainable code.
        </p>
        <div className="flex gap-x-5 mt-8 mb-6">
          <div className="rounded-full w-10 h-10 p-[2px] bg-gradient-to-r from-[#58B3FF] to-[#1D267D]">
            <FaFacebookF className="rounded-full p-2 w-full h-full bg-[#0c1022]"></FaFacebookF>
          </div>
          <div className="rounded-full w-10 h-10 p-[2px] bg-gradient-to-r from-[#58B3FF] to-[#1D267D]">
            <FaTwitter className="rounded-full p-2 w-full h-full bg-[#0c1022]"></FaTwitter>
          </div>
          <div className="rounded-full w-10 h-10 p-[2px] bg-gradient-to-r from-[#58B3FF] to-[#1D267D]">
            <FaLinkedinIn className="rounded-full p-2 w-full h-full bg-[#0c1022]"></FaLinkedinIn>
          </div>
        </div>
        <a
          href="#_"
          className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
          <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
          <span className="relative font-serif text-xl text-white flex items-center justify-center gap-x-1">
            Resume <FaArrowAltCircleDown className="h-5 w-6" />
          </span>
        </a>
      </div>
      <div className="home-img w-96 h-96 mt-20">
        <div className="glowing-circle">
            <span></span>
            <span></span>
          <div className="image">
            <img src={banner} alt="" />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Header;
