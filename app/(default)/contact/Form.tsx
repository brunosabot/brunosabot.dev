"use client";

import { Mail, MessageSquare, User } from "lucide-react";
import React, { useState } from "react";

import Button from "../../../generic/common/Button";
import { sendContactEmail } from "../../actions/contact";
import classes from "./Form.module.css";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    sendContactEmail(email, name, message);
  };

  return (
    <form className={classes.Form} onSubmit={handleSubmit}>
      <label className={classes.InputWrapper}>
        <User size={20} strokeWidth={1.5} />
        <input
          autoComplete="name"
          className={classes.Input}
          enterKeyHint="next"
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          required
          type="text"
          value={name}
        />
      </label>

      <label className={classes.InputWrapper}>
        <Mail size={20} strokeWidth={1.5} />
        <input
          autoComplete="email"
          className={classes.Input}
          enterKeyHint="next"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          required
          type="email"
          value={email}
        />
      </label>

      <label
        className={`${classes.InputWrapper} ${classes.InputWrapperHasTextarea}`}
      >
        <MessageSquare size={20} strokeWidth={1.5} style={{ marginTop: 4 }} />
        <textarea
          className={`${classes.Input} ${classes.Textarea}`}
          id="message"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message"
          required
          value={message}
        />
      </label>

      <div className={classes.ButtonWrapper}>
        <Button type="submit">Send Message</Button>
      </div>
    </form>
  );
}
