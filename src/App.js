import React, { useEffect, useState } from "react";
import { StateProvider, ConfigContext, MainContext } from "./contexts/contexts";

import NoFound from "./pages/no-found/no-found";

import Header from "./components/header/header";
import SideBar from "./components/sidebar/sidebar";
import Preview from "./components/preview/preview";

import api from "./utils/api/api";
import { data } from "./contexts/data";
import { config } from "./contexts/config";

const App = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const type = urlParams.get('type');
  const ids = urlParams.get('ids');
  
  // Это для получения параметров запроса из url -  http://localhost:3000/?param1=value1&param2=value2
  //const URLParams = () => {
  //  const urlParams = new URLSearchParams(window.location.search);
  //  const param1 = urlParams.get('param1');
  //  const param2 = urlParams.get('param2');
  //}
  // или так если перечислены через + -  http://localhost:3000/?param1=value1+value2+value3
  //useEffect(() => {
  //  const searchParams = new URLSearchParams(window.location.search);
  //  const params = {};
  //  for (let [key, value] of searchParams) {
  //      params[key] = value.split('+');
  //  }
  //  console.log(params);
  //}, []);
  //const ids = '77375,77380,77381,77382,77383,77385,77386,77416,77434,77435,77436,77438,77439,77443,77444,77445,77447,77448,77449,77450'
  //const [data, setData] = useState([]);
  //useEffect(() => {
  //  api.get(ids)
  //    .then((res) => {
  //      setData(res);
  //    })
  //    .catch((error) => {
  //      console.log(error);
  //    })
  //}, [])
  
  return (
    //<NoFound />
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