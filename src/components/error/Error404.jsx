import "./Error404.css";
import { Link } from "react-router-dom";

function Error404({ data: { error, btnBack } }) {
  return (
    <>
      <div className="error-container">
        <div className="error-back">
          <h3>
            <Link to="..">{btnBack}</Link>
          </h3>
        </div>
        <p className="error-title">{error}</p>
      </div>
    </>
  );
}

export default Error404;
