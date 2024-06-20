import React, { useEffect, useState } from "react";
import { StateProvider, MainContext } from "./contexts/contexts";

import Header from "./components/header/header";
import NoFound from "./pages/no-found/no-found";
import Main from "./pages/main/main";

import api from "./utils/api/api";
//import { data } from "./contexts/data";

const App = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const type = urlParams.get('type');
  const ids = urlParams.get('ids');

  const [data, setData] = useState([]);
  useEffect(() => {
    if (ids && type) {
      api.get(type, ids)
      .then((res) => {
        setData(res);
      })
      .catch((error) => {
        console.log(error);
      })
    }
  }, [type, ids])
  
  return (
    <StateProvider>
      <MainContext.Provider value={data}>
        <Header 
          type={type}
        />
        {(!ids || !type) ? <NoFound /> : <Main />}
      </MainContext.Provider>
    </StateProvider>  
  );
}

export default App;