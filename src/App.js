import React from "react";

import Header from "./components/header/header";
import SideBar from "./components/sidebar/sidebar";
import Preview from "./components/preview/preview";
import { StateProvider, ConfigContext } from "./contexts/contexts";
//import Modal from "./components/modal/modal";

import { config } from "./contexts/config";

const App = () => {
  
  return (
    <div className="page">
      <ConfigContext.Provider value={config}>
        <Header />
        <StateProvider>
          <SideBar />
          <Preview />
        </StateProvider>
      </ConfigContext.Provider>
      
    </div>
  );
}

export default App;
