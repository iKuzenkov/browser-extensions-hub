import "./Home.css";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";

function Home({ data: { autoClickerName, toDoName } }) {
  return (
    <>
      <div className="container">
        <main>
          <Link to="/auto-clicker">
            <section className="autoclicker-container">
              <h2>{autoClickerName}</h2>
            </section>
          </Link>
          <Link to="/to-do">
            <section className="to-do-container">
              <h2>{toDoName}</h2>
            </section>
          </Link>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Home;
