"use client";

import React, { useState } from "react";

import Button from "../../../generic/common/Button";
import InputEmail from "../../../generic/form/InputEmail";
import InputText from "../../../generic/form/InputText";
import InputTextarea from "../../../generic/form/InputTextarea";
import { sendContactEmail } from "../../actions/contact";

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
        autoComplete="name"
        enterKeyHint="done"
        label="Your name"
        name="name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />

      <InputEmail
        autoComplete="email"
        enterKeyHint="done"
        label="Your email"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        value={email}
      />

      <InputTextarea
        id="message"
        label="Your message"
        onChange={(e) => setMessage(e.target.value)}
        rows={7}
        value={message}
      />

      <div style={{ paddingTop: "32px" }}>
        <Button type="submit">Send an email</Button>
      </div>
    </form>
  );
}
