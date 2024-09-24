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
  const [log, setLog] = useState({
    event: true,
    error: '',
  });

  useEffect(() => {
    if (ids && type) {
      setLog(prevLog => ({
        ...prevLog,
        event: false
      }));
      api.get(type, ids)
      .then((res) => {
        setData(res);
        setLog(prevLog => ({
          ...prevLog,
          event: true
        }));
      })
      .catch((error) => {
        const errorMessage = error.toString().replace('TypeError: ', '');
        setLog(prevLog => ({
          ...prevLog,
          error: `Произошла ошибка: ${errorMessage}`
        }));
      })
    }
  }, [type, ids]);

 return (
    <StateProvider>
      <MainContext.Provider value={data}>
        <Header 
          type={type}
          log={log}
        />
        {(!ids || !type) ? <NoFound /> : <Main />}
      </MainContext.Provider>
    </StateProvider>  
  );
}

export default App;