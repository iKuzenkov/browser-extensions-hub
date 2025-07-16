import "./Home.css";
import { Link } from "react-router-dom";

function Home({ data: { autoClickName, toDoName } }) {
  return (
    <>
      <div className="container">
        <Link to="/auto-clicker">
          <section className="autoclicker-container">
            <h2>{autoClickName}</h2>
          </section>
        </Link>
        <Link to="/to-do">
          <section className="to-do-container">
            <h2>{toDoName}</h2>
          </section>
        </Link>
      </div>
    </>
  );
}

export default Home;
