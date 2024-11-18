import React, { useEffect } from "react";
import "./Companies.scss";
import { companyInfo } from "../../assets/data/Data";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Companies(): React.JSX.Element {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <section className="companies">
      <div className="companies__container wrapper" data-aos="fade-up">
        {companyInfo.map((el: { id: number; img: string }) => (
          <img src={el.img} alt="company" key={el.id} />
        ))}
      </div>
    </section>
  );
}
