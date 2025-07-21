import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="info">
        <Link to={"/terms-of-service"}>Terms of Service</Link>
        <Link to={"/privacy-policy"}>Privacy Policy</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/donate"}>Donate</Link>
      </footer>
    </>
  );
}

export default Footer;
