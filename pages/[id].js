import Image from "next/image";
import React, { useState, useEffect } from "react";

import cGetDoc from "crud/cGetDoc";
import Header from "@/c/Header";

export default function foodItemDetail({ foodItemId }) {
  const [foodItem, setFoodItem] = useState([]);

  useEffect(() => {
    (async () => {
      const rec = await cGetDoc({
        collectionPath: ["recommended"],
        docId: foodItemId,
      });
      console.log("rec", rec);
      setFoodItem(rec);
    })();
  }, []);

  const handleBuy = async (price) => {
    // const data = {
    //   userId: window.localStorage.getItem("userId"),
    // };
    // console.log(data);
    // await fetch("http://localhost:2000/users", {
    //   method: "POST",
    //   body: {
    //     userId: window.localStorage.getItem("userId"),
    //     points: Math.floor(price / 10),
    //   },
    // })
    //   .then((res) => {
    //     console.log("res", res);
    //   })
    //   .catch((err) => console.log(err));
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      userId: "44",
      points: 5,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:2000/users", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result.body))
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="relative">
      <Header />
      <div
        className="imgContainer"
        style={{ height: "16rem", position: "relative" }}
      >
        {foodItem && foodItem.image ? (
          <Image src={foodItem.image} layout="fill" objectFit="cover" />
        ) : (
          <Image src="/assets/img1.png" layout="fill" objectFit="cover" />
        )}
      </div>
      <div className="p-5">
        <p className="text-lg ">{foodItem.name}</p>
        <p className="mb-5">Rs.{foodItem.price}</p>
        <button
          className="bg-green-500 font-bold text-lg text-white rounded px-12 py-3 mx-auto w-36"
          onClick={() => {
            handleBuy(foodItem.price);
          }}
        >
          Buy!
        </button>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  return { props: { foodItemId: context.params.id } };
}
