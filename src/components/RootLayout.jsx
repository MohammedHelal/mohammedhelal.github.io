import { Outlet, ScrollRestoration } from "react-router-dom";
//import NavBar from "./NavBar";
import Footer from "./Footer.jsx";

function RootLayout() {
  return (
    <>
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </>
  );
}

export default RootLayout;
