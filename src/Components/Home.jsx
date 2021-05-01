import React from "react";
import "../Components/Home.css";
import home1 from "../img/tsuneo.png";
import home2 from "../img/dorami.png";
import dore from "../img/dore.jpg";
import home3 from "../img/nobita.png";
import home4 from "../img/doraemon.png";
import home5 from "../img/shizuka.png";
import home6 from "../img/gegant.png";

const Home = () => {
  return (
    <>
      <div className="home">
        <img src={home3} alt="home" className="img_1" />
        <img src={home2} alt="home" className="img_2" />
        <img src={home1} alt="home" className="img_3" />
        <img src={home4} alt="home" className="img_4" />
        <img src={home6} alt="home" className="img_5" />
        <img src={home5} alt="home" className="img_6" />
        <div className="intro">
          <h3>Doremon World</h3>
          <img src={dore} alt="" className="doremon" />
        </div>
        
      </div>
    </>
  );
};

export default Home;
