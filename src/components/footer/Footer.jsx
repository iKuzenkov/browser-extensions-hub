import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="info">
        <Link to={"/terms/terms-of-service"}>Terms of Service</Link>
        <Link to={"/terms/privacy-policy"}>Privacy Policy</Link>
        <Link to={"/terms/contact"}>Contact</Link>
        <Link to={"/terms/donate"}>Donate</Link>
      </footer>
    </>
  );
}

export default Footer;
