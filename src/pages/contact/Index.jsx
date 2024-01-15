import "./Contact.css";
import Form from "./Form";
import NavBar from "../../components/NavBar";

function Contact() {
  return (
    <main className="contacts">
      <NavBar />
      <article className="get-in-touch">
        <h2>Get in Touch</h2>
        <div>
          <p>
            I’d love to hear about what you’re working on and how I could help.
            I’m currently looking for a new role and am open to a wide range of
            opportunities. My preference would be to find a position in a
            company in Malaysia. But I’m also happy to hear about opportunites
            that don’t fit that description. I’m a hard-working and positive
            person who will always approach each task with a sense of purpose
            and attention to detail. Please do feel free to check out my online
            profiles below and get in touch using the form.
          </p>
          <div className="contact-icons">
            <img src="./src/assets/images/icons/github.svg" alt="" />
            <img src="./src/assets/images/icons/linkedin.svg" alt="" />
            <img src="./src/assets/images/icons/twitter.svg" alt="" />
          </div>
        </div>
      </article>
      <article className="get-in-touch">
        <h2>Contact Me</h2>
        <div>
          <Form />
        </div>
      </article>
    </main>
  );
}

export default Contact;
