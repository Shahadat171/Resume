import { FaCopyright } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="h-[10vh] bg-black text-center pt-3 gap-x-2 flex justify-center items-center">
            <FaCopyright className=" text-slate-500"></FaCopyright>
            <p><small className="text-slate-500">All rights preserved | Shahadat Hosan</small></p>
        </div>
    );
};

export default Footer;