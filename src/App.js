import React, { useEffect, useState } from "react";
import { StateProvider, ConfigContext, MainContext } from "./contexts/contexts";

import Header from "./components/header/header";
import SideBar from "./components/sidebar/sidebar";
import Preview from "./components/preview/preview";

import api from "./utils/api/api";
import { data } from "./contexts/data";
import { config } from "./contexts/config";

const App = () => {
  const [dat, setData] = useState([]);
  useEffect(() => {
    api.get()
      .then((res) => {
        setData(res);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])
  
  return (
    <StateProvider>
      <MainContext.Provider value={data}>
        <Header />
        <ConfigContext.Provider value={config}>
          <SideBar />
          <Preview />
        </ConfigContext.Provider>
      </MainContext.Provider>
    </StateProvider>  
  );
}

export default App;