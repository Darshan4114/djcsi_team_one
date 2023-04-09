import Image from "next/image";
import React, { useContext, useState } from "react";
import logo from "../public/assets/logo.png";
import more from "../public/assets/more.svg";
import down from "../public/assets/down.svg";
import AppContext from "./AppContext";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

function Header() {
  const context = useContext(AppContext);
  const [featureHover, setFeatureHover] = useState(false);
  const router = useRouter();

  return (
    <div className="flex p-10 w-full justify-between">
      {/* <h1>Context Value: {context.nameContext}</h1> */}

      <Image src={logo} width={130} height={110} contain className="" />
      <div className="flex justify-between items-center w-full">
        <div className="flex justify-evenly items-center w-3/4">
          {/* Features */}

          {/* <div
            onMouseEnter={() => setFeatureHover(true)}
            onMouseLeave={() => setFeatureHover(false)}
            className="flex space-x-2 items-center hover:cursor-pointer hover:ease-in-out "
          >
            <h1>Features</h1>
            <Image src={down} width={20} height={20} />
          </div> */}

          {/* Only when feature hover is on */}
          {featureHover && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
              className="fixed bg-white rounded-lg w-[600px] h-[500px] mt-[600px] -ml-96 text-black"
            >
              <div>
                <h1></h1>
              </div>
            </motion.div>
          )}

          {/* Contact us */}
          {/* <div className='flex items-center hover:cursor-pointer hover:ease-in-out '>
            <h1>Contact Us</h1>
          </div> */}

          {/* About us */}
          {/* <div className='flex items-center hover:cursor-pointer hover:ease-in-out '>
            <h1>About</h1>
          </div> */}
        </div>

        {/* <div className="flex justify-center items-center space-x-7">
          <h1
            className="hover:cursor-pointer"
            onClick={() => router.push("login")}
          >
            LogIn
          </h1>
          <div
            onClick={() => router.push("signup")}
            className="transition ease-in-out  text-gray-300 hover:-translate-y-1 hover:scale-110 hover:bg-red-600 duration-300 flex justify-center items-center  bg-red-700 p-4 rounded-lg "
          >
            <button>Get Started For Free</button>
          </div>
        </div> */}
      </div>

      <Image src={more} width={20} height={20} className="md:hidden" />
    </div>
  );
}

export default Header;
