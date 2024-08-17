"use client";

import React, { useState } from "react";
import Input from "../../../components/form/Input";
import Textarea from "../../../components/form/Textarea";
import Label from "../../../components/form/Label";
import Button from "../../../components/form/Button";
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
      <Label label="Your name">
        <Input
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
          id="name"
          enterKeyHint="done"
          value={name}
        />
      </Label>

      <Label label="Your email">
        <Input
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          type="email"
          id="email"
          enterKeyHint="done"
          value={email}
        />
      </Label>

      <Label label="Your message">
        <Textarea
          rows={5}
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </Label>

      <div style={{ paddingTop: "32px" }}>
        <Button type="submit" onClick={() => {}}>
          Send an email
        </Button>
      </div>
    </form>
  );
}
