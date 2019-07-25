import React from "react";
import AppProvider from "../components/providers/AppProvider";
import About from "../components/routes/About";
import Articles from "../components/routes/Articles";
import Projects from "../components/routes/Projects";
import Talks from "../components/routes/Talks";
import Header from "../components/ui/header/Header";

function App() {
  return (
    <AppProvider>
      <Header></Header>
      <main>
        <About />
        <Articles />
        <Projects />
        <Talks />
      </main>
    </AppProvider>
  );
}

export default App;
