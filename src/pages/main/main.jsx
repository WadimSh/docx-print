import React from "react";
import { ConfigContext } from "../../contexts/contexts";

import SideBar from "../../components/sidebar/sidebar";
import Preview from "../../components/preview/preview";

import { config } from "../../contexts/config";

const Main = () => {

  return (
    <ConfigContext.Provider value={config}>
      <SideBar />
      <Preview />
    </ConfigContext.Provider>
  );
};

export default Main;