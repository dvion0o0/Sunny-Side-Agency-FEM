import React from "react";
import Emily from "../images/image-emily.jpg";
import Thomas from "../images/image-thomas.jpg";
import Jennie from "../images/image-jennie.jpg";

function Testimonial() {
  return (
    <section className="testimonials">
      <h3>CLIENT TESTIMONIALS</h3>
      <div className="testimonials-center">
        <article className="testimonial">
          <img src={Emily} alt="emily" />
          <p>
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <h4>Emily R.</h4>
          <h5>Marketing Director</h5>
        </article>
        <article className="testimonial">
          <img src={Thomas} alt="thomas" />
          <p>
            Sunnyside’s enthusiasm coupled with their keen interest in our
            brand’s success made it a satisfying and enjoyable experience.
          </p>
          <h4>Thomas S.</h4>
          <h5>Chief Operating Officer</h5>
        </article>
        <article className="testimonial">
          <img src={Jennie} alt="jennie" />
          <p>
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <h4>Jennie F.</h4>
          <h5>Business Owner</h5>
        </article>
      </div>
    </section>
  );
}

export default Testimonial;
