import React from "react";
import SEO from "../components/Seo";
import DefaultLayout from "../components/layout/DefaultLayout";
import Input from "../components/form/Input";
import Textarea from "../components/form/Textarea";
import Label from "../components/form/Label";
import Button from "../components/form/Button";
import PageTitle from "../components/typography/PageTitle";
import SimpleCard from "../components/card/SimpleCard";

interface Props {
  [key: string]: never;
}

const About: React.FC<Props> = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch("/api/contact", {
      body: JSON.stringify({ name, email, message }),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    });
  };

  return (
    <DefaultLayout type="short">
      <SEO
        description="I am Bruno Sabot, a Front-end developer currently living in Bordeaux, France."
        title="Contact - Bruno Sabot"
      />
      <PageTitle>Contact me</PageTitle>

      <SimpleCard>
        If you want to reach me, feel free to use the form below or any social
        media available in the page footer.
      </SimpleCard>

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
    </DefaultLayout>
  );
};

export default About;
