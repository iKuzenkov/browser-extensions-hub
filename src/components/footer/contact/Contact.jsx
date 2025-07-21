import "./Contact.css";
import { Link } from "react-router-dom";

function Contact({ data: { title, description, email, btnBack } }) {
  return (
    <>
      <div className="contact-container">
        <div className="contact-back">
          <h3>
            <Link to="..">{btnBack}</Link>
          </h3>
        </div>
        <section className="contact-title">
          <h2>{title}</h2>
        </section>
        <section className="contact-description">
          <h4>{description}</h4>
        </section>
      </div>
    </>
  );
}

export default Contact;
