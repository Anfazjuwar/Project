import "./footer.css";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowUp } from "react-icons/io";

const Footer = () => {
  const top = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="relative border rounded-t-full border-t-black bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500 ">
        <section className="one">
          <div className="content">
            <div className="flex flex-col justify-start ">
              <div className="grid grid-cols-3 m-32 ">
                <div className="p-8 space-y-8">
                  <h1 className="text-2xl italic text-blue-300 ">
                    Corporate information
                  </h1>
                  <ul className="space-y-4 list-none text-start">
                    <li className="text-lg">Cinnamon Hotels & Resorts</li>
                    <li className="text-lg">John Keells Group </li>
                  </ul>
                </div>
                <div className="p-8 space-y-8">
                  <h1 className="text-2xl italic text-blue-300">
                    News and Awards
                  </h1>
                  <ul className="list-none text-start">
                    <li className="text-lg">News</li>
                    <li className="text-lg">Awards</li>
                  </ul>
                </div>
                <div className="p-8 space-y-8">
                  <h1 className="space-y-4 text-2xl italic text-blue-300">
                    Data Privacy & Security Policy
                  </h1>
                  <ul className="space-y-4 list-none text-start">
                    <li className="text-lg">Terms & Conditions</li>
                    <li className="text-lg">Privacy Statement</li>
                  </ul>
                </div>
                <div className="p-8 space-y-8">
                  <h1 className="text-2xl italic text-blue-300 text-start">
                    Blogs
                  </h1>
                  <ul className="space-y-4 list-none text-start">
                    <li className="text-lg">Cinnamon Ublog</li>
                  </ul>
                </div>
                <div className="p-8 space-y-8">
                  <h1 className="space-y-4 text-2xl italic text-blue-300">
                    Corporate Governance
                  </h1>
                  <ul className="list-none text-start">
                    <li className="text-lg">CSR</li>
                    <li className="text-lg">Privacy Statement</li>
                  </ul>
                </div>
                <div className="p-8 space-y-8">
                  <h1 className="text-2xl italic text-blue-300">
                    Get In Touch
                  </h1>
                  <ul className="space-y-4 list-none text-start">
                    <li className="text-lg">info@cinnamonhotels.com</li>
                    <li className="text-lg">Hotel Contact Information</li>
                  </ul>
                </div>
                <div className="p-8 space-y-8">
                  <h1 className="text-2xl italic text-blue-300">Careers</h1>
                  <ul className="space-y-4 list-none text-start">
                    <li className="text-lg">Careers</li>
                  </ul>
                </div>
                <div className="items-center p-8 space-y-8">
                  <h1 className="text-2xl italic text-blue-300">Follows</h1>
                  <ul className="flex space-x-4 list-none text-start">
                    <li className="text-lg">
                      <FaInstagram />
                    </li>
                    <li className="text-lg">
                      <FaFacebookF />
                    </li>
                    <li className="text-lg">
                      <FaLinkedinIn />
                    </li>
                    <li className="text-lg">
                      <FaYoutube />
                    </li>
                  </ul>
                </div>
                <div className="items-center p-8 space-y-4">
                  <h1 className="text-2xl italic text-blue-300">
                    Get Cinnamon in your inbox
                  </h1>
                  <div className="relative flex space-x-0 ">
                    <input
                      type="email"
                      placeholder="Enter your Email"
                      className="px-12 py-4 border border-gray-300 text-start"
                    />
                    <div className="p-6 hover:bg-slate-900 hover:text-blue-500">
                      <IoIosArrowBack />
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <input type="checkbox" />
                    <p className="">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Distinctio quae ad mollitia ipsa cumque hic excepturi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute right-0 flex flex-col items-center p-6 border rounded-full -top-8 bg-gradient-to-l from-pink-900 to-pink-500">
            <IoIosArrowUp
              onClick={() => top()}
              className="text-black cursor-pointer "
            />
            <span className="text-white cursor-pointer">Scroll Up</span>
          </div>
        </section>
      </div>
    </>
  );
};

export default Footer;
