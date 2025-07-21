import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="info">
        <Link to={"/terms/TermsOfService"}>Terms of Service</Link>
        <Link to={"/terms/PrivacyPolicy"}>Privacy Policy</Link>
        <Link to={"/terms/Contact"}>Contact</Link>
        <Link to={"/terms/Donate"}>Donate</Link>
      </footer>
    </>
  );
}

export default Footer;
