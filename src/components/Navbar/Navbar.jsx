import shahadat from "../../assets/Image/Shahadat-2.jpeg";
import leptop1 from "../../assets/Image/leptop11.jpg";
import Typewriter from "typewriter-effect";
import './Navbar.css'
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaArrowAltCircleDown,
} from "react-icons/fa";
import { Slide } from "react-awesome-reveal";

const resume_file_url = 'http://localhost:5173/Shahadat-resume.pdf'

const Navbar = () => {
  const downloadResume =(url)=>{
    const aTag = document.createElement('a');
    aTag.href = url;
    aTag.setAttribute("Download", "resume-shahadat.pdf")
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  } 
  return (
    <div
      style={{
        backgroundImage: `url(${leptop1})`,
        backgroundPosition: "cover",
      }}
      className="h-[100vh] bg-blend-overlay bg-[#070911] bg-opacity-[1] bg-gradient-to-r from-[#0c1022] to-[#0c1022] bg-no-repeat bg-cover"
    >
      {/* bg-[#1a2236] bg-[#1b213f] */}
      <div className="h-[7vh]">
        <div className="navbar justify-between pl-36  pr-24">
          <div className="navbar-start">
            <div className="dropdown text-[#D3D3D3]">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu text-[#D3D3D3] menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>About Me</li>
                <li>Projects</li>
                <li>Resume</li>
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-[#D3D3D3] text-xl">
              <span className="font-semibold animate text-slate-100">
                SHAHADAT.Me
              </span>
            </a>
          </div>
          <div className="hidden lg:flex">
            <ul className="menu animate-ul menu-horizontal text-lg bg-none gap-x-5 mr-5 text-[#D3D3D3] px-1">
              <li className="mr-14 uppercase hover:text-red-500 hover:border-b-2 border-red-500">
                About Me
              </li>
              <li className="mr-14 uppercase hover:text-red-500 hover:border-b-2 border-red-500">
                Projects
              </li>
              <li className="mr-14 uppercase hover:text-red-500 hover:border-b-2 border-red-500">
                Resume
              </li>
              <li className="uppercase hover:text-red-500 hover:border-b-2 border-red-500">
                Contact
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-[100px] h-[93vh]">
        <div className="">
          <div className="text-center text-white">
            <Slide direction="left" duration={1500}>
              <h1 className="text-5xl font-semibold">Hi, I'm Shahadat Hosan</h1>
            </Slide>
            <div className="h-[50px] pt-3">
              <Typewriter
                options={{
                  strings: [
                    '<span class="text-4xl text-yellow-400 font-semibold mt-10">Frontend developer</span>',
                    '<span class="text-4xl text-red-400 font-semibold mt-10">Mernstack developer</span>',
                  ],
                  autoStart: true,
                  loop: true,
                  cursorClassName: "typewriter-cursor",
                }}
              />
            </div>
            {/* <h1 >Frontend developer</h1> */}
            <Slide direction="right" duration={1500}>
            <p
              className="mt-5 text-center mx-auto font-sans mb-5  max-w-[800px]"
              data-aos="fade-left"
            >
              Highly skilled and dedicated frontend developer with expertise in
              MERN MongoDB, Express.js, React, Node.js stack development. Proven
              track record of creating responsive and intuitive UI and
              optimizing website performance. A meticulous approach to coding
              and a strong commitment to delivering precise, efficient, and
              maintainable code.
            </p>
            </Slide>
            <Slide direction="left" duration={1500}>
            <div className="flex justify-center gap-x-5 mt-8 mb-6">
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
            </Slide>
            <Slide direction="left" duration={1500}>
            <div onClick={()=>{downloadResume(resume_file_url)}}>
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
            </Slide>
          </div>
        </div>
      </div>
      {/* <div>
                <img src={shahadat} alt="" />
            </div>
            <div>
                <h1></h1>
            </div> */}
    </div>
  );
};

export default Navbar;
