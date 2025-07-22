import "./ToDo.css";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";

import img1 from "../../images/todo/initial-state.png";
import img2 from "../../images/todo/no-edit-tasks.png";
import img3 from "../../images/todo/edit-tasks.png";

function toDo({ data: { name, description, label, usage, btnBack } }) {
  return (
    <>
      <main className="td-container">
        <div className="td-back">
          <h3>
            <Link to="..">{btnBack}</Link>
          </h3>
        </div>
        <section className="td-title">
          <h2>{name}</h2>
          <h4 className="td-description">{description}</h4>
        </section>
        <section className="td-responsive-iframe">
          <iframe
            src="https://www.youtube.com/embed/rRX_7-3QiVo"
            title="Safe Auto Clicker"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </section>
        <section className="td-images-wrapper">
          <img src={img1} alt="initial-state" />
          <img src={img2} alt="no-edit-tasks" />
          <img src={img3} alt="edit-tasks" />
        </section>
        <section className="td-usage">
          <h2>{label}</h2>
          <ol>
            {usage.map((elem, index) => {
              return <li key={index}>{elem}</li>;
            })}
          </ol>
        </section>

        <Footer />
      </main>
    </>
  );
}

export default toDo;
