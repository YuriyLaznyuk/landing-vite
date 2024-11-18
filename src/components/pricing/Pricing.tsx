import React, { useEffect } from "react";
import "./Pricing.scss";
import { pricingInfo } from "../../assets/data/Data";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Pricing(): React.JSX.Element {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <section className="pricing">
      <h2 data-aos="fade-up">Lorem, ipsum dolor.</h2>
      <div className="pricing__container wrapper">
        {pricingInfo.map(
          (el: { id: number; image: string; name: string; price: string }) => (
            <div className="pricing__card" key={el.id}>
              <img data-aos="fade-up" src={el.image} alt={el.name} />
              <h3>{el.name}</h3>
              <span>{el.price}</span>
              <a href="#" className="btn">
                Buy It Now
              </a>
            </div>
          )
        )}
      </div>
    </section>
  );
}
