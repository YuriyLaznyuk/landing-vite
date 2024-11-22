import React, { useEffect } from "react";
import "./Status.scss";
import StatusImg from "../../assets/img/status.png";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Status(): React.JSX.Element {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <section className="status">
      <div className="status__container wrapper">
       <div className="status__left" data-aos="zoom-in-up">
       <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          dolor veritatis optio, magni quaerat adipisci doloribus esse facilis
          dicta sed!
        </p>
        <a href="#" className="btn">KNOW MORE</a>
       </div>
       <div className="status__right" data-aos="zoom-in-down">
        <img src={StatusImg} alt="status" />
       </div>
      </div>
    </section>
  );
}
