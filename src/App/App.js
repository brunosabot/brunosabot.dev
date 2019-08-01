import React from "react";
import AppProvider from "../components/providers/AppProvider";
import Header from "../components/ui/header/Header";
import styles from "./App.module.css";
import Pages from "./Pages";

function App() {
  return (
    <AppProvider>
      <div className={styles.App}>
        <Header></Header>
        <main>
          <Pages />
        </main>
      </div>
    </AppProvider>
  );
}

export default App;
