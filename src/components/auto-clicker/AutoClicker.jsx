import "./AutoClicker.css";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";

import img1 from "../../images/autoclicker/in-progress-white-theme.png";
import img2 from "../../images/autoclicker/start-black-theme.png";
import img3 from "../../images/autoclicker/start-white-theme.png";

function AutoClicker({ data: { name, description, label, usage, btnBack } }) {
  return (
    <>
      <div className="ac-container">
        <div className="ac-back">
          <h3>
            <Link to="..">{btnBack}</Link>
          </h3>
        </div>
        <section className="ac-title">
          <h2>{name}</h2>
          <h4 className="ac-description">{description}</h4>
        </section>
        <section className="ac-responsive-iframe">
          <iframe
            src="https://www.youtube.com/embed/iBWH1rpaoWM"
            title="Safe Auto Clicker"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </section>
        <section className="ac-images-wrapper">
          <img src={img1} alt="progress-white-theme" />
          <img src={img2} alt="start-black-theme" />
          <img src={img3} alt="start-white-theme" />
        </section>
        <section className="ac-usage">
          <h2>{label}</h2>
          <ol>
            {usage.map((elem, index) => {
              return <li key={index}>{elem}</li>;
            })}
          </ol>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default AutoClicker;
