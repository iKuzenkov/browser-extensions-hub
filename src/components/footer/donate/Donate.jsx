import "./Donate.css";
import { Link } from "react-router-dom";

function Donate({ data: { paypal, crypto, btnBack } }) {
  return (
    <>
      <div className="donate-container">
        <div className="donate-back">
          <h3>
            <Link to="..">{btnBack}</Link>
          </h3>
        </div>
        <section className="paypal-address">
          <h3>{paypal}</h3>
        </section>
        <section className="crypto-address">
          <h3>{crypto}</h3>
        </section>
      </div>
    </>
  );
}

export default Donate;
