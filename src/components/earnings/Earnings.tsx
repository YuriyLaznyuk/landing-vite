import React, { useEffect } from "react";
import "./Earnings.scss";
import Img from "../../assets/img/earnings.png";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Earnings(): React.JSX.Element {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <section className="earnings">
      <div className="earnings__container wrapper">
        <div className="earnings__left">
          <img src={Img} alt="earnings" data-aos="fade-right" />
        </div>
        <div className="earnings__right" data-aos="zoom-in-up">
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            ullam soluta perferendis excepturi dolore doloremque.
          </p>
          <a href="#" className="btn">
            GET STARTED
          </a>
        </div>
      </div>
    </section>
  );
}
