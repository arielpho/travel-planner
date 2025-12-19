import airplane from "./img/airplane.png";
import { Link } from "react-router-dom";

export function Sidebar({ page, setPage }) {
  return (
    <div className="sidebar">
      <Link
        to="code"
        onClick={() => {
          setPage("home");
        }}
      >
        <img id="side-logo" src={airplane} />
      </Link>
      <ul>
        <Link to="/home">
          <li>
            <a
              className={page == "home" ? "onPage" : ""}
              href="#"
              onClick={() => {
                setPage("home");
              }}
            >
              Home
            </a>
          </li>
        </Link>
        <Link to="/luggage-overview">
          <li className="blue">
            <a
              className={page == "luggage-overview" ? "onPage" : ""}
              href="#"
              onClick={() => {
                setPage("luggage-overview");
              }}
            >
              Luggage types
            </a>
          </li>
        </Link>
        <Link to="/planner">
          <li>
            <a
              className={page == "planner" ? "onPage" : ""}
              href="#"
              onClick={() => {
                setPage("planner");
              }}
            >
              Planner
            </a>
          </li>
        </Link>
        <Link to="/summary">
          <li className="blue">
            <a
              className={page == "summary" ? "onPage" : ""}
              href="#"
              onClick={() => {
                setPage("summary");
              }}
            >
              Summary
            </a>
          </li>
        </Link>
      </ul>

    </div>
  );
}
