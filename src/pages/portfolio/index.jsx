import Interested from "../../components/Interested";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";
import "./Portfolio.css";

function Portfolio() {
  return (
    <main>
      <div className="port-navbar">
        <NavBar />
      </div>
      <Outlet />
      <Interested />
    </main>
  );
}

export default Portfolio;
