import React from "react";
import Card from "../Components/Card";
import "../Components/Showcase.css";
import show_1 from "../img/showcase_1.png";
import show_2 from "../img/showcase_2.jpg";


const Showcase = () => {
  return (
    <>
      <div className="showcase">
        <Card show={show_1}
          head="Check out the store !!"
          para="Lorem ipsum dolor sit amet."
        />
        <Card show={show_2}
          head="Check out the Events !!"
          para="Lorem ipsum dolor sit amet."
        />
        <Card show={show_2}
          head="Check out the Games !!"
          para="Lorem ipsum dolor sit amet."
        />
        <Card show={show_1}
          head="Check out the Videos !!"
          para="Lorem ipsum dolor sit amet."
        />
      </div>
    </>
  );
};

export default Showcase;
