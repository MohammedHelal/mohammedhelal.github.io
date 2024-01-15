import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const styles = {
  width: "100vw",
  padding: "0 213px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
};

function ErrorPage() {
  return (
    <>
      <NavBar />
      <main style={styles}>
        <article>
          <h1>An error has occurred!</h1>
          <h2>Page not found! Please check if url entered is correct</h2>
        </article>
      </main>
      <Footer />
    </>
  );
}

export default ErrorPage;
