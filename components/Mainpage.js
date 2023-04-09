import Image from "next/image";
import React, { useEffect, useState } from "react";
import sideimage from "../public/assets/sideimage.jpg";

export default function Mainpage({ data }) {
  const apiUrl = "https://jsonplaceholder.typicode.com/todos";

  const [posts, setPosts] = useState();

  let displayData;

  // function pullJson() {
  //   fetch(apiUrl)
  //     .then(res => res.json())
  //     .then(resData => {
  // displayData = resData.map(function (todo) {
  //   return (
  //     <p key={todo.id}>{todo.title}</p>
  //   )
  // })
  // setPosts(displayData)
  //     })
  // }
  // async function pullJson() {
  //   const res = await fetch(apiUrl)

  //   const resData = await res.json()
  //   displayData = resData.map(function (todo) {
  //     return (
  //       <p key={todo.id}>{todo.title}</p>
  //     )
  //   })
  //   setPosts(displayData)
  // }
  // displayData = data.map(function (todo) {
  //   return (
  //     <p key={todo.id}>{todo.title}</p>
  //   )
  // })
  useEffect(() => {
    // pullJson()
  }, []);

  return (
    <div className="w-full space-y-2">
      <Image src={sideimage} width={120} height={120} className="w-20" cover />
      {/* {
        data.map(function (todo) {
          return (
            <p key={todo.id}>{todo.title}</p>
          )
        })

      } */}
    </div>
  );
}

// export async function getServerSideProps() {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/todos/`)
//   const data = await res.json()
//   return { props: { data } }

// }

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  return {
    props: { data }, // will be passed to the page component as props
  };
}
