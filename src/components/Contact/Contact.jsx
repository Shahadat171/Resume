import { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaHome, FaPhone, FaEnvelope } from "react-icons/fa";
import Aos from "aos";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_fr9uhkd",
        "template_9ppch8g",
        form.current,
        "NFIqOX4WKPUqKGis6"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: 'success',
            title: 'Your email has been send',
            showConfirmButton: false,
            timer: 1500
          })
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  useEffect(() => {
    Aos.init({duration:1800});
  }, [])
  return (
    <div className="h-[90vh] bg-[#070911] pt-10">
      <h1 data-aos="zoom-out-up" className="text-center text-4xl text-slate-300 mt-5 mb-5">
        Contact <span className="text-yellow-400">Me</span>
      </h1>
      <div className="flex flex-row items-center justify-center gap-x-28  mt-20">
        <div data-aos="zoom-out-up" className="h-[50vh] flex flex-col justify-center gap-y-10">
          <div className="flex gap-x-5">
            <div className="p-3 bg-white rounded-full w-10 h-10">
              <FaHome></FaHome>
            </div>
            <div className="text-white">
              <h1 className=" text-emerald-400 text-xl">Address</h1>
              <h1 className="text-lg">Chittagong, Bangladesh</h1>
            </div>
          </div>
          <div>
            <div className="flex gap-x-5">
              <div className="p-3 bg-white rounded-full w-10 h-10">
                <FaPhone></FaPhone>
              </div>
              <div className="text-white">
                <h1 className=" text-emerald-400 text-xl">Phone</h1>
                <h1 className="text-lg">+8801734112822</h1>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-x-5">
              <div className="p-3 bg-white rounded-full w-10 h-10">
                <FaEnvelope></FaEnvelope>
              </div>
              <div className="text-white">
                <h1 className=" text-emerald-400  text-xl">Email</h1>
                <h1 className="text-lg">shahadat999@gmail.com</h1>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="zoom-out-up" className="h-[50vh]  bg-white">
          <form
            className="text-white flex flex-col w-96 h-full pl-5 pr-7 pt-5"
            ref={form}
            onSubmit={sendEmail}
          >
            <h1 className="text-black text-2xl font-semibold mb-4">Send Message</h1>
            {/* <label>Name</label> */}
            <input type="text" placeholder="Full Name" className="text-black py-2 pl-2 mb-7 border-b-[3px] border-black" name="user_name" />
            {/* <label>Email</label> */}
            <input type="email" placeholder="Email" className="text-black py-2 pl-2 mb-7 border-b-[3px] border-black" name="user_email" />
            {/* <label>Message</label> */}
            <textarea placeholder="Type your message" className="text-black py-2 pl-2 mb-7 border-b-[3px] border-black" name="message" />
            <input className="btn btn-primary" type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
