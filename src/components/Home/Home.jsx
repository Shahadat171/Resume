import AboutMe from "../AboutMe/AboutMe";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";


const Home = () => {
    return (
        <div>
          <Navbar></Navbar>
          {/* <Header></Header> */}
          <AboutMe></AboutMe>
        </div>
    );
};

export default Home;