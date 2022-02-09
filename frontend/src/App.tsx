import React from "react";
import "./App.css";
import { DAppProvider, ChainId } from "@usedapp/core";
import { Header } from "./components/Header";
import { Container } from "@mui/material";
import { Main } from "./components/Main";

function App() {
  return (
    <DAppProvider
      config={{
        supportedChains: [ChainId.Kovan, ChainId.Rinkeby],
        notifications: {
          expirationPeriod: 1000,
          checkInterval: 1000,
        },
      }}
    >
      <div className="App">
        <Header />
        <Container>
          Hello
          <Main />
        </Container>
      </div>
    </DAppProvider>
  );
}

export default App;
