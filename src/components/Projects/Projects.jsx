import React, { useEffect } from "react";
import restora from "../../assets/projects/restora.png";
import english from "../../assets/projects/english.png";
import { FaGithub } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import teddybear from "../../assets/projects/teddybear.png";
import Aos from "aos";

const Projects = () => {
    useEffect(() => {
        Aos.init({duration:1800});
      }, [])
  return (
    <div className="h-[100vh] pt-20 bg-[#070911]">
      <h1 data-aos="zoom-out-up" className="text-3xl mt-7 text-slate-300 text-center">
        Completed <span className="text-yellow-300">Projects</span>
      </h1>
      <div className="flex gap-x-10 lg:flex-row sm:flex-col items-center justify-center mt-20">
        <div data-aos="zoom-out-up" className="h-[27rem] w-[28rem] shadow-2xl border-2 border-[#101529] rounded-lg">
          <div
            style={{ backgroundImage: ` url(${restora})` }}
            className="h-52 bg-top ease-in-out duration-1000 bg-cover hover:bg-bottom"
          ></div>
          <div className="ml-3 mt-2 ">
            <h1 className="text-emerald-700 font-semibold text-xl mt-3">
              Rajmohol Restora
            </h1>
            <h1 className=" text-emerald-700 font-medium text-lg mt-3">
              Restaurant Mernstack applications with firebase authentication.
            </h1>
            <div className="flex gap-x-5 mt-7 items-end">
              <button className="btn hover:bg-[#6161a0] hover:border-[#434372] border-emerald-950 bg-[#070911]">
                <FaGithub className="h-5 w-5"></FaGithub>
                Client
              </button>
              <button className="btn hover:bg-[#6161a0] hover:border-[#434372] border-emerald-950 bg-[#070911]">
                <FaGithub className="h-5 w-5"></FaGithub>
                Server
              </button>
              <button className="btn hover:bg-[#6161a0] hover:border-[#434372] border-emerald-950 bg-[#070911]">
                <FaEye className="h-5 w-5"></FaEye>
                Live sITE
              </button>
            </div>
          </div>
        </div>
        <div data-aos="zoom-out-up" className="h-[27rem] w-[28rem] shadow-2xl border-2 border-[#101529]  rounded-lg">
          <div
            style={{ backgroundImage: ` url(${english})` }}
            className=" h-52 bg-top ease-in-out duration-1000 bg-cover hover:bg-bottom"
          ></div>
            <div className="ml-3 mt-2">
            <h1 className="text-emerald-700 font-semibold text-xl mt-3">
              English Center
            </h1>
            <h1 className=" text-emerald-700 font-medium text-lg mt-3">
             English learning Mernstacck applications with <br /> admin panel
            </h1>
            <div className="flex gap-x-5 mt-7 items-end">
              <button className="btn hover:bg-[#6161a0] hover:border-[#434372] border-emerald-950 bg-[#070911]">
                <FaGithub className="h-5 w-5"></FaGithub>
                Client
              </button>
              <button className="btn hover:bg-[#6161a0] hover:border-[#434372] border-emerald-950 bg-[#070911]">
                <FaGithub className="h-5 w-5"></FaGithub>
                Server
              </button>
              <button className="btn hover:bg-[#6161a0] hover:border-[#434372] border-emerald-950 bg-[#070911]">
                <FaEye className="h-5 w-5"></FaEye>
                Live sITE
              </button>
            </div>
          </div>
        </div>
        <div data-aos="zoom-out-up" className="h-[27rem] w-[28rem] shadow-2xl border-2 border-[#101529]  rounded-lg">
          <div
            style={{ backgroundImage: ` url(${teddybear})` }}
            className=" h-52 bg-top ease-in-out duration-1000 bg-cover hover:bg-bottom"
          ></div>
            <div className="ml-3 mt-2">
            <h1 className="text-emerald-700 font-semibold text-xl mt-3">
              Teddy Vile
            </h1>
            <h1 className=" text-emerald-700 font-medium text-lg mt-3">
              Toy reselling merstack applications and <br /> dynamically routed
            </h1>
            <div className="flex gap-x-5 mt-7 items-end">
              <button className="btn hover:bg-[#6161a0] hover:border-[#434372] border-emerald-950 bg-[#070911]">
                <FaGithub className="h-5 w-5"></FaGithub>
                Client
              </button>
              <button className="btn hover:bg-[#6161a0] hover:border-[#434372] border-emerald-950 bg-[#070911]">
                <FaGithub className="h-5 w-5"></FaGithub>
                Server
              </button>
              <button className="btn hover:bg-[#6161a0] hover:border-[#434372] border-emerald-950 bg-[#070911]">
                <FaEye className="h-5 w-5"></FaEye>
                Live sITE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
