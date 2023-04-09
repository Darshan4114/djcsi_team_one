import React, { useState } from "react";
import Link from "next/link";
import { Poppins } from "@next/font/google";
import logoDark from "../public/assets/logoDark.png";
import more from "../public/assets/more.svg";
import anna from "../public/assets/anna.PNG";
import img4 from "../public/assets/img4.PNG";
import img3 from "../public/assets/img3.PNG";
import img14 from "../public/assets/img14.webp";
import img15 from "../public/assets/img15.webp";
import Image from "next/image";
// import starterVideo from "../public/assets/starterVideo.mp4"
import next from "../public/assets/next.svg";
import { useRouter } from "next/router";
import myntra from "../public/assets/myntra.png";
import amazon from "../public/assets/amazon.png";
import flipkart from "../public/assets/flipkart.png";
import ruby from "../public/assets/ruby.png";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function offers() {
  const router = useRouter();
  let coins = 10;
  const [offers, setOffers] = useState(true);
  const [rewards, setRewards] = useState(false);

  return (
    <div
      className={`${poppins.className} && 'text-white bg-black h-full min-h-screen w-screen -ml-12'`}
    >
      {/* <video src={starterVideo} /> */}

      {/* <video autoplay>
                <source src="../public/assets/starterVideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video> */}

      {/* Header */}
      <Link href="/offers">
        <div className="flex items-center justify-center p-10">
          <Image src={logoDark} width={180} height={120} cover className="" />
        </div>
      </Link>
      <div className="flex justify-start items-center ml-7  text-white">
        <h1>Hello, HarshKumar!</h1>
      </div>

      <div className="flex flex-col justify-center items-center space-y-8 mt-5">
        <div className="flex justify-between items-center h-24 w-[300px] bg-[#DEAD84] shadow-2xl rounded-lg px-14 ">
          <h1>Loyalty Coins</h1>
          <div className="flex justify-center items-center space-x-1">
            <Image src={ruby} width={20} height={20} contain className="" />
            <h1>{coins}</h1>
          </div>
        </div>
        <div className="flex justify-evenly items-center px-4 w-full text-white mt-20">
          <h1
            className={`${offers && "bg-[#B2B2B2] text-black p-3 rounded-lg"}`}
            onClick={() => {
              setOffers(true);
              setRewards(false);
            }}
          >
            Offers
          </h1>
          <h1
            className={`${
              rewards && "bg-[#B2B2B2] text-black p-3 rounded-lg"
            } `}
            onClick={() => {
              setOffers(false);
              setRewards(true);
            }}
          >
            Rewards
          </h1>
        </div>
      </div>

      {rewards && (
        <div>
          <div className="flex flex-col justify-center items-center mx-auto rounded-t-lg mt-10">
            <Image
              src={img4}
              width={270}
              height={200}
              cover
              className="z-0 rounded-lg"
            />
          </div>
          <div
            className="flex justify-center items-center text-center text-white bg-[#563300] p-3 w-[265px] mx-auto"
            onClick={() => router.push("woah")}
          >
            <h1>Redeem for 5</h1>
            <Image src={ruby} width={20} height={20} contain className="" />
          </div>
          <div className="z-10 absolute -mt-24 text-center text-xl text-white bg-[] bg-blur w-full ">
            <h1 className="">Get One Kaapicino Free!</h1>
          </div>

          <div className="flex flex-col justify-center items-center mx-auto rounded-t-lg mt-10">
            <Image
              src={img15}
              width={270}
              height={200}
              cover
              className="z-0 rounded-lg"
            />
          </div>
          <div
            className="flex justify-center items-center text-center text-white bg-[#563300] p-3 w-[265px] mx-auto"
            onClick={() => router.push("woah")}
          >
            <h1>Redeem for 3</h1>
            <Image src={ruby} width={20} height={20} contain className="" />
          </div>
          <div className="z-10 absolute -mt-24 text-center text-xl text-white bg-[] bg-blur w-full ">
            <h1 className="">Get Crinkle Cookies Free!</h1>
          </div>

          <div className="flex flex-col justify-center items-center mx-auto rounded-t-lg mt-10">
            <Image
              src={img14}
              width={270}
              height={200}
              cover
              className="z-0 rounded-lg"
            />
          </div>
          <div
            className="flex justify-center items-center text-center text-white bg-[#563300] p-3 w-[265px] mx-auto"
            onClick={() => router.push("woah")}
          >
            <h1>Redeem for 3</h1>
            <Image src={ruby} width={20} height={20} contain className="" />
          </div>
          <div className="z-10 absolute -mt-24 text-center text-lg text-white bg-[] bg-blur w-full ">
            <h1 className="">Get Chocolate Hazelnut Free!</h1>
          </div>
        </div>
      )}
      {offers && (
        <div className="flex flex-col justify-center items-center">
          <div
            className="flex justify-center items-center w-[300px] mx-auto mt-10 bg-white px-3 py-2 rounded-lg"
            onClick={() => router.push("woah")}
          >
            <Image
              src={myntra}
              width={80}
              height={80}
              cover
              className=" rounded-l-lg"
            />
            <h1>Get Free Myntra Vouchers</h1>
            <div className="flex justify-center items-center ">
              <h1>10</h1>
              <Image src={ruby} width={20} height={20} contain className="" />
            </div>
          </div>
          <div
            className="flex justify-center items-center w-[300px] mx-auto mt-10 bg-white px-3 py-2 rounded-lg"
            onClick={() => router.push("woah")}
          >
            <Image
              src={amazon}
              width={80}
              height={80}
              cover
              className=" rounded-l-lg"
            />
            <h1>Get Free Amazon Vouchers</h1>
            <div className="flex justify-center items-center ">
              <h1>5</h1>
              <Image src={ruby} width={20} height={20} contain className="" />
            </div>
          </div>
          <div
            className="flex justify-center items-center w-[300px] mx-auto mt-10 bg-white px-3 py-2 rounded-lg"
            onClick={() => router.push("woah")}
          >
            <Image
              src={flipkart}
              width={80}
              height={80}
              cover
              className=" rounded-l-lg"
            />
            <h1>Get Free Flipkart Vouchers</h1>
            <div className="flex justify-center items-center ">
              <h1>5</h1>
              <Image src={ruby} width={20} height={20} contain className="" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default offers;
