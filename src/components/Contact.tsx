import React, { useRef, useState } from "react";
import "../assets/styles/Contact.scss";
import emailjs from "@emailjs/browser";

function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef<HTMLFormElement>(null);
  const token = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
  const serviceKey = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    setNameError(name === "");
    setEmailError(email === "");
    setMessageError(message === "");

    if (name !== "" && email !== "" && message !== "") {
      const templateParams = {
        name,
        email,
        message,
      };

      emailjs.send(`${serviceKey}`, `${templateId}`, templateParams, `${token}`).then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );

      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-flex">
              <div className="form-group">
                <label>Your Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={nameError ? "error" : ""}
                  placeholder="What's your name?"
                />
                {nameError && <small>Please enter your name</small>}
              </div>

              <div className="form-group">
                <label>Email / Phone</label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={emailError ? "error" : ""}
                  placeholder="How can I reach you?"
                />
                {emailError && <small>Please enter your email or phone</small>}
              </div>
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={messageError ? "error" : ""}
                placeholder="Send me any inquiries or questions"
              />
              {messageError && <small>Please enter your message</small>}
            </div>

            <button type="submit" className="send-btn">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
