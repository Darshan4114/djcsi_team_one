import Image from "next/image";
import Link from "next/link";
import React from "react";
import loader from "../public/assets/loader.gif";
import { Poppins } from "@next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});
function woah() {
  return (
    <div
      class={`${poppins.className} && 'bg-[#E2C2AA] h-screen w-screen flex flex-col justify-center items-center text-2xl '`}
    >
      <Link href="/offers">
        <Image src={loader} width={200} height={200} contain className="" />
      </Link>
      <h1>Loading Royalty...</h1>
    </div>
  );
}

export default woah;
