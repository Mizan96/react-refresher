import React from "react";
import "./App.css";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";

const App = () => {
  const users = [
    {
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color:'blue',
      intro:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti officia et voluptatem voluptatibus quis ab!",
      tag: "Satisfied",
    },
    {
      img: "https://images.unsplash.com/photo-1589386417686-0d34b5903d23?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color:'orange',
      intro:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti officia et voluptatem voluptatibus quis ab!",
      tag: "Underserved",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1682096592504-5bc960bea6d7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color:'royalblue',
      intro:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti officia et voluptatem voluptatibus quis ab!",
      tag: "Underbanking",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1658506615399-d1280310ad6c?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color:'amber',
      intro:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti officia et voluptatem voluptatibus quis ab!",
      tag: "Satisfied",
    },
    ,
    {
      img: "https://plus.unsplash.com/premium_photo-1682092105693-1a2566cf2ee1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color:'olive',
      intro:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti officia et voluptatem voluptatibus quis ab!",
      tag: "Average",
    },
  ];
  return (
    <>
      <Section1 users={users} />
      <Section2 />
    </>
  );
};

export default App;
