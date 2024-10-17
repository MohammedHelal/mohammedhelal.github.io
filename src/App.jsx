import Hero from "./components/home/Hero";
import About from "./components/home/About";
import Projects from "./components/portfolio/ProjectsList";
import NavBar from "./components/nav/NavBar";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <NavBar />
        <Hero />
      </header>
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
