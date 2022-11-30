import React, { useState } from "react";
import Header from "./Header";
import style from "./Main.module.css";
import img from "../../asset/backgroundimg.jpg";
const Main = () => {
  return (
    <div className={style.outsideContainer}>
      <Header height="50px" backgroundColor="#000">
        <span>Home</span>
        <span>About</span>
        <span>Service</span>
        <span>Contact</span>
      </Header>
      <div className={style.overlay}></div>
      <div>
        
      </div>
   
    </div>
  );
};
export default Main;
