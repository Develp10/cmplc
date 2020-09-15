import React from "react";
import preloaderSvg from "../images/PersonalArea/preloader.svg";
import "../sass/preloader.sass";
const Preloader = () => {
  return (
    <div className="preloader">
      <img src={preloaderSvg} alt="Preloader" />
    </div>
  );
};

export default Preloader;
