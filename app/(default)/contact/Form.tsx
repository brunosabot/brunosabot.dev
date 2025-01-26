"use client";

import React, { useState } from "react";
import { sendContactEmail } from "../../actions/contact";
import InputText from "../../../generic/form/InputText";
import InputEmail from "../../../generic/form/InputEmail";
import InputTextarea from "../../../generic/form/InputTextarea";
import Button from "../../../generic/common/Button";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    sendContactEmail(email, name, message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputText
        label="Your name"
        onChange={(e) => setName(e.target.value)}
        autoComplete="name"
        name="name"
        enterKeyHint="done"
        value={name}
      />

      <InputEmail
        label="Your email"
        onChange={(e) => setEmail(e.target.value)}
        autoComplete="email"
        type="email"
        name="email"
        enterKeyHint="done"
        value={email}
      />

      <InputTextarea
        label="Your message"
        rows={7}
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <div style={{ paddingTop: "32px" }}>
        <Button type="submit">Send an email</Button>
      </div>
    </form>
  );
}
