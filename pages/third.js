import React from "react";
import { Poppins } from "@next/font/google";
import mainLogo from "../public/assets/mainLogo.png";
import more from "../public/assets/more.svg";
import tamma from "../public/assets/tamma.PNG";
import img2 from "../public/assets/img2.PNG";
import img3 from "../public/assets/img3.PNG";
import Image from "next/image";
// import starterVideo from "../public/assets/starterVideo.mp4"
import next from "../public/assets/next.svg";
import { useRouter } from "next/router";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function third() {
  const router = useRouter();

  return (
    <div
      className={`${poppins.className} && 'text-black bg-[#E2C2AA] h-screen w-screen -ml-12'`}
    >
      {/* <video src={starterVideo} /> */}

      {/* <video autoplay>
                <source src="../public/assets/starterVideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video> */}

      {/* Header */}
      <div className="flex justify-between p-10">
        <Image src={mainLogo} width={180} height={120} cover className="" />{" "}
        <Image src={more} width={20} height={20} contain className="" />{" "}
      </div>

      <h1 className="font-medium rounded-full text-black p-3 bg-white w-48 mx-auto shadow-2xl text-center">
        Hey! I'm Tamma😄
      </h1>
      <div className="flex flex-col justify-center items-center">
        <Image src={tamma} width={150} height={120} cover className="" />
        <div></div>
      </div>
      <div className="flex justify-between items-center">
        <Image
          src={img2}
          width={100}
          height={100}
          cover
          className="z-0 mb-60"
        />
        {/* Next button */}
        <Image
          src={next}
          width={60}
          height={60}
          cover
          onClick={() => router.push("main")}
          className="z-0 mb-60 mr-10 bg-white p-5 rounded-full shadow-lg "
        />
      </div>
    </div>
  );
}

export default third;
