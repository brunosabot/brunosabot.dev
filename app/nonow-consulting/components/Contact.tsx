"use client";

import { useState } from "react";
import classes from "./Contact.module.css";
import { sendNonowConsultingEmail } from "../../actions/nonow-consulting";

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
        <div className={classes.Title}>Vous souhaitez me contacter ?</div>
        <div className={classes.AutoGrow} data-replicated-value={message}>
          <textarea
            placeholder="Votre message"
            className={classes.Input}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        {message !== "" ? (
          <div className={classes.NoGrow}>
            <input
              type="text"
              placeholder="Votre nom"
              className={classes.Input}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        ) : null}
        {message !== "" && name !== "" ? (
          <div className={classes.NoGrow}>
            <input
              type="email"
              placeholder="Votre email"
              className={classes.Input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        ) : null}
        {message !== "" && name !== "" && email !== "" ? (
          <div className={classes.NoGrow}>
            <button type="submit" className={classes.Submit}>
              Envoyer le message
            </button>
          </div>
        ) : null}
      </form>
    </>
  );
}
