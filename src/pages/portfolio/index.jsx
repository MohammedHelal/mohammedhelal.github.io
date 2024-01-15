import Interested from "../../components/Interested";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";

function Portfolio() {
  return (
    <main>
      <div style={{ padding: "0 213px" }}>
        <NavBar />
      </div>
      <Outlet />
      <Interested />
    </main>
  );
}

export default Portfolio;
