import { Fade, Slide } from "react-awesome-reveal";
import shahadat from "../../assets/Image/Shahadat-2.jpeg";
import './AboutMe.css'
import React,{useEffect} from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutMe = () => {
  useEffect(() => {
    AOS.init({duration:1500});
  }, [])
  return (
    <div  className="flex gap-x-20 h-[100vh] justify-center bg-[#070911]">
          
        <div data-aos="zoom-out-up" className="flex w-1/2 items-center justify-end ">
        <Fade top>
          <img
            className="max-w-full jumping-div h-[70vh] opacity-70 rounded-lg max-h-full"
            src={shahadat}
          />
          </Fade>
        </div>
      
      
        <div data-aos="zoom-out-up" className=" pt-40 pr-28 w-1/2 ">
        <Fade top duration={1500}>
          <Fade triggerOnce delay={500}><h1 className="text-3xl text-slate-400 mb-8">About Me</h1></Fade>
          <p className=" text-slate-300">
            Hey there! I'm Shahadat Hosan, a passionate MERN stack developer
            with a focus on creating dynamic and scalable web applications. With
            a strong background in web development and a deep understanding of
            the Mernstack technologies, I bring a unique architect efficient
            solutions and deliver exceptional results within deadlines. Each
            project has sharpened my ability to analyze complex requirements.
          </p>
          <p className="mt-8 text-slate-300">
            By leveraging my proficiency in React.js, I can contribute to
            improving the performance of your web applications, resulting in
            faster load times and smoother user interactions.My expertise in
            creative thinking and analytical problem-solving, combined with my
            proficiency in React.js, enables me to identify and address complex
            issues efficiently, ensuring smooth development cycles and
            minimizing project delays.
          </p>
          <button  className="py-3 jumping-div-resume mt-10 px-4 bg-red-500 normal-case text-white">
            Hire Me
          </button>
          </Fade>
        </div>
      
    </div>
  );
};

export default AboutMe;
