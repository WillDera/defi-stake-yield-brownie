import React from 'react';
import './App.css';
import { DAppProvider, ChainId } from "@usedapp/core"

function App() {
  return (
    <DAppProvider config={{
      supportedChains: [ChainId.Kovan, ChainId.Rinkeby]
    }}>
      <div className="App">
        Hello
      </div>
    </DAppProvider>
  );
}

export default App;
