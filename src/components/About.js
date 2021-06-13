import React from "react";
import Img1 from "../images/mobile/image-transform.jpg";
import Img2 from "../images/mobile/image-stand-out.jpg";

function About() {
  return (
    <section className="about">
      <div className="content_1">
        <img src={Img1} alt="image1" />
        <div className="about-content">
          <h2>Transform your brand</h2>
          <p>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visual that do
            most of the marketing for you.
          </p>
          <button className="about-btn">LEARN MORE</button>
        </div>
      </div>
      <div className="content_1 content_2">
        <img src={Img2} alt="image2" />
        <div className="about-content">
          <h2>Stand out to the right audience</h2>
          <p>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <button className="about-btn about-btn-2">LEARN MORE</button>
        </div>
      </div>
    </section>
  );
}

export default About;
