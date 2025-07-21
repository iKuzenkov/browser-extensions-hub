import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import generalData from "./data/generalData";
import autoClickerData from "./data/autoClickerData";
import toDoData from "./data/toDoData";
import footerData from "./data/footerData";

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
        <Route path="/terms/TermsOfService" element={<Terms />} />
        <Route path="/terms/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/terms/Contact" element={<Contact />} />
        <Route path="/terms/Donate" element={<Donate />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
