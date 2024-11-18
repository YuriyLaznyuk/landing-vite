import React, { useEffect } from "react";
import "./Hero.scss";
import Mob from "../../assets/img/Mob.png";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Hero(): React.JSX.Element {
    useEffect(()=>{
        Aos.init({duration:1000});
    })
  return (
    <section className="hero">
      <div className="hero__container wrapper">
        <div className="hero__left" data-aos="fade-right">
          <img src={Mob} alt="hero" />
        </div>
        <div className="hero__right" data-aos="zoom-in-up">
          <h1>Lorem ipsum dolor sit.</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
            qui quidem facere eius tempora enim asperiores accusamus eos ad
            harum.
          </p>
          <a href="#" className="btn">
            TRY FOR FREE
          </a>
        </div>
      </div>
    </section>
  );
}
