import "./TermsOfService.css";
import { Link } from "react-router-dom";

function TermsOfService({ data: { title, description, conditions, btnBack } }) {
  return (
    <>
      <div className="terms-container">
        <div className="tos-back">
          <h3>
            <Link to="..">{btnBack}</Link>
          </h3>
        </div>
        <section className="terms-title">
          <h2>{title}</h2>
        </section>
        <section className="terms-description">
          <h4>{description}</h4>
        </section>
        <section className="terms-conditions">
          <ol>
            {conditions.map((elem, index) => {
              return <li key={index}>{elem}</li>;
            })}
          </ol>
        </section>
      </div>
    </>
  );
}

export default TermsOfService;
