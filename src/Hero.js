import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="hero">
          <div id="main_hero">
            <div className="hero-text">
              <h2>Hi there, my name is Shimanti</h2>
              <h2>
                I am a&nbsp;
                <span className="fw-bold" style={{ color: "blueviolet" }}>
                  <Typewriter
                    loop
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                    deleteSpeed={70}
                    delaySpeed={1000}
                    words={["Full Stack Developer", "Website Creator", "React Developer", "Freelancer"]}
                  />
                </span>
              </h2>
            </div>
            <div className="hero-image" id="image_hero">
              <img src="./images/hero.png" height="200px" alt="Shimanti with glasses"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
  
export default Hero;