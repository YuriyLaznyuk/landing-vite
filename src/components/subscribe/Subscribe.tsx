import React, { useEffect } from "react";
import "./Subscribe.scss";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Subscribe(): React.JSX.Element {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <section className="subscribe">
      <div className="subscribe__container wrapper">
        <h2 data-aos="fade-up">Subscribe: Lorem ipsum, dolor sit amet</h2>
        <p data-aos="fade-up">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus optio
          dolorem recusandae rerum est, voluptatibus ullam praesentium nulla
          velit aliquam.
        </p>
        <form action="#" data-aos='fade-up'>
            <input type="email" placeholder="Write Your Email Here" />
            <a href="" className="btn">Subscribe</a>
        </form>
      </div>
    </section>
  );
}
