"use client";

import { useState } from "react";

import { sendNonowConsultingEmail } from "../../actions/nonow-consulting";
import classes from "./Contact.module.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (message !== "" && name !== "" && email !== "") {
      await sendNonowConsultingEmail(email, name, message);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }
  };

  return (
    <>
      {submitted ? (
        <div className={classes.SubmittedWrapper}>
          <div className={classes.Submitted}>
            Merci, votre message a bien été envoyé !
          </div>
        </div>
      ) : null}

      <form onSubmit={handleSubmit}>
        <h2 className={classes.Title}>Vous souhaitez me contacter ?</h2>
        <div className={classes.AutoGrow} data-replicated-value={message}>
          <textarea
            className={classes.Input}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Votre message"
            value={message}
          />
        </div>
        {message !== "" ? (
          <div className={classes.NoGrow}>
            <input
              className={classes.Input}
              onChange={(e) => setName(e.target.value)}
              placeholder="Votre nom"
              type="text"
              value={name}
            />
          </div>
        ) : null}
        {message !== "" && name !== "" ? (
          <div className={classes.NoGrow}>
            <input
              className={classes.Input}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre email"
              type="email"
              value={email}
            />
          </div>
        ) : null}
        {message !== "" && name !== "" && email !== "" ? (
          <div className={classes.NoGrow}>
            <button className={classes.Submit} type="submit">
              Envoyer le message
            </button>
          </div>
        ) : null}
      </form>
    </>
  );
}
