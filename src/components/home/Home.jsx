import "./Home.css";
import { Link } from "react-router-dom";

function Home({ data: { autoClickName, toDoName } }) {
  return (
    <>
      <h1>Choose your app</h1>
      <nav>
        <ul>
          <li>
            <Link to="/auto-clicker">{autoClickName}</Link>
          </li>
          <li>
            <Link to="/to-do">{toDoName}</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Home;
