import React, { useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Starter from "../components/Starter";
import First from "../components/First";
import { Poppins } from "@next/font/google";
import { uuid } from "uuidv4";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export default function Home() {
  useEffect(() => {
    if (!window.localStorage.getItem("userId"))
      window.localStorage.setItem("userId", uuid());
  }, []);
  return (
    <div className={styles.container && poppins.className}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Header /> */}
      <First />
    </div>
  );
}