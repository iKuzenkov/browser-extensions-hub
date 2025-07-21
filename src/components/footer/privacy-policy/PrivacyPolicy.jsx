import "./PrivacyPolicy.css";
import { Link } from "react-router-dom";

function PrivacyPolicy({ data: { title, description, btnBack } }) {
  return (
    <>
      <div className="policy-container">
        <div className="policy-back">
          <h3>
            <Link to="..">{btnBack}</Link>
          </h3>
        </div>
        <section className="policy-title">
          <h2>{title}</h2>
        </section>
        <section className="policy-description">
          <h4>{description}</h4>
        </section>
      </div>
    </>
  );
}

export default PrivacyPolicy;
