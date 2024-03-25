import React from "react";

import Header from "./components/header/header";
import SideBar from "./components/sidebar/sidebar";
import Preview from "./components/preview/preview";
//import Modal from "./components/modal/modal";

import { config } from "./contexts/config";

const App = () => {
  console.log(config);
  return (
    <div className="page">
      <Header />
      <SideBar />
      <Preview />
    </div>
  );
}

export default App;
