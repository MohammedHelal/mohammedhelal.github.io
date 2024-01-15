import { useState } from "react";
import Button from "../../utils/Button";

function Form() {
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [nameErrors, setNameErrors] = useState("");
  const [emailErrors, setEmailErrors] = useState("");
  const [messageErrors, setMessageErrors] = useState("");

  function inputChangeHandler(e) {
    let id = e.target.id;

    if (id === "name") {
      setNameErrors("");
      setFormInput((prevState) => {
        return {
          ...prevState,
          name: e.target.value,
        };
      });
    }

    if (id === "email") {
      setEmailErrors("");
      setFormInput((prevState) => {
        return {
          ...prevState,
          email: e.target.value,
        };
      });
    }

    if (id === "message") {
      setMessageErrors("");
      setFormInput((prevState) => {
        return {
          ...prevState,
          message: e.target.value,
        };
      });
    }
  }

  function emailBlurHandler() {
    let regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (!regex.test(formInput.email)) {
      setEmailErrors("Email address appears to be invalid");
    }
  }

  function submiteHandler(e) {
    e.preventDefault();

    if (!formInput.name || !formInput.email || !formInput.message) {
      if (!formInput.name) {
        setNameErrors("This field is required");
      }

      if (!formInput.email) {
        setEmailErrors("This field is required");
      }

      if (!formInput.message) {
        setMessageErrors("This field is required");
      }
      return;
    }

    console.log(formInput);
    setFormInput({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <form className="contact-form" onSubmit={submiteHandler}>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          type="text"
          className={nameErrors ? "input-error" : ""}
          placeholder="Jane Appleseed"
          value={formInput.name}
          onChange={inputChangeHandler}
        />
        {nameErrors && <p className="input-error-msg">{nameErrors}</p>}
      </div>
      <div>
        <label htmlFor="email">Email Address: </label>
        <input
          id="email"
          type="email"
          placeholder="email@example.com"
          className={emailErrors ? "input-error" : ""}
          value={formInput.email}
          onChange={inputChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailErrors && <p className="input-error-msg">{emailErrors}</p>}
      </div>
      <div>
        <label htmlFor="message">Message: </label>
        <textarea
          id="message"
          type="text"
          className={messageErrors ? "input-error" : ""}
          rows="4"
          placeholder="How can I help?"
          value={formInput.message}
          onChange={inputChangeHandler}
        />
        {messageErrors && (
          <p className="input-error-msg msg-error">{messageErrors}</p>
        )}
      </div>
      <Button text="SEND MESSAGE" />
    </form>
  );
}

export default Form;
