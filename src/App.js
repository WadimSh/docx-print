import React, { useEffect, useState } from "react";
import { StateProvider, ConfigContext, MainContext } from "./contexts/contexts";

import Header from "./components/header/header";
import SideBar from "./components/sidebar/sidebar";
import Preview from "./components/preview/preview";

import api from "./utils/api/api";
//import { data } from "./contexts/data";
import { config } from "./contexts/config";

const App = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const param1 = urlParams.get('ids');
  const param2 = urlParams.get('type');
  console.log(param2, param1)
  const [data, setData] = useState([]);
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