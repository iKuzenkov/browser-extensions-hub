import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import generalData from "./data/general-data";
import autoClickerData from "./data/auto-clicker-data";
import toDoData from "./data/to-do-data";
import footerData from "./data/footer-data";

import Home from "./components/home/Home";
import AutoClicker from "./components/auto-clicker/AutoClicker";
import ToDo from "./components/to-do/ToDo";
import Footer from "./components/footer/Footer";
import Terms from "./components/footer/terms/TermsOfService";
import PrivacyPolicy from "./components/footer/privacy-policy/PrivacyPolicy";
import Contact from "./components/footer/contact/Contact";
import Donate from "./components/footer/donate/Donate";
import Error404 from "./components/error/Error404";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home data={generalData} />} />
        <Route
          path="/auto-clicker"
          element={<AutoClicker data={autoClickerData} />}
        />
        <Route path="/to-do" element={<ToDo data={toDoData} />} />
        <Route path="/footer" element={<Footer data={footerData} />} />
        <Route
          path="/terms-of-service"
          element={<Terms data={footerData.terms} />}
        />
        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy data={footerData.policy} />}
        />
        <Route
          path="/contact"
          element={<Contact data={footerData.contact} />}
        />
        <Route path="/donate" element={<Donate data={footerData.donate} />} />
        <Route path="*" element={<Error404 data={generalData} />} />
      </Routes>
    </Router>
  );
}

export default App;
