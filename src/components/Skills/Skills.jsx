import { Bounce, Fade } from "react-awesome-reveal";
import "./Skills.css"
import html from "../../assets/Skills/html.png";
import css from "../../assets/Skills/css.png";
import javascript from "../../assets/Skills/javascript.png";
import react from "../../assets/Skills/react.png";
import node from "../../assets/Skills/node.png";
import mongodb from "../../assets/Skills/mongodb.png";
import { useEffect } from "react";
import Aos from "aos";

const Skills = () => {
    useEffect(() => {
        Aos.init({duration:1500});
      }, [])
  return (
    <div className="h-[100vh] bg-[#070911] pt-20">
      <Fade top duration={2000} delay={250}>
        {/* <Bounce> */}
          <h1 className=" text-slate-300 animate__fadeInUp text-4xl text-center">
            My <span className=" text-yellow-300">Skills</span>
          </h1>
        {/* </Bounce> */}
      </Fade>
      <Fade top duration={2000} delay={250}>
        {/* animate__fadeInUp */}
      <div className="grid nimate__fadeInUp text-slate-300 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-20 gap-y-16">
        <div data-aos="zoom-out-up" className="flex jumping-div flex-col items-center justify-center">
          <img className="text-white" src={html} alt="" />
          <h1 className="text-xl mt-2">Html</h1>
          <p className="text-center w-64 mt-2">
            I have a strong foundation in HTML and can create well-structured,
            semantic markup.
          </p>
        </div>
        <div data-aos="zoom-out-up" className="flex jumping-div flex-col items-center justify-center">
          <img className="text-white" src={css} alt="" />
          <h1 className="text-xl mt-2">Css</h1>
          <p className="text-center w-64 mt-2">
            {/* I have a strong foundation in HTML and can create well-structured,
            semantic markup. */}
            With a strong knowledge in css, i can createe interactive and
            animated webpage.
          </p>
        </div>
        <div data-aos="zoom-out-up" className="flex jumping-div flex-col items-center justify-center">
          <img className="text-white" src={javascript} alt="" />
          <h1 className="text-xl mt-2">Javascript</h1>
          <p className="text-center w-64 mt-2">
            I possess a robust command of JS, enabling me to dynamically
            updating web content
          </p>
        </div>
        <div data-aos="zoom-out-up" className="flex jumping-div flex-col items-center justify-center">
          <img className="text-white" src={react} alt="" />
          <h1 className="text-xl mt-2">React</h1>
          <p className="text-center w-64 mt-2">
            I have extensive experience with React routing and hooks and can
            build powerful websites.
          </p>
        </div>
        <div data-aos="zoom-out-up" className="flex jumping-div flex-col items-center justify-center">
          <img className="text-white" src={node} alt="" />
          <h1 className="text-xl mt-2">Node.js</h1>
          <p className="text-center w-64 mt-2">
            With in-depth basic in Node.js, I am capable of creating RESTful
            APIs and server-side applications.
          </p>
        </div>
        <div data-aos="zoom-out-up" className="flex jumping-div flex-col items-center justify-center">
          <img className="text-white" src={mongodb} alt="" />
          <h1 className="text-xl mt-2">Mongodb</h1>
          <p className="text-center w-64 mt-2">
            I possess comprehensive knowledge of MongoDB and can effectively
            work with NoSQL databases.
          </p>
        </div>
      </div>
      </Fade>
    </div>
  );
};

export default Skills;
