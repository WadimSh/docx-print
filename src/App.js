import { useEffect, useState } from "react";
import { StateProvider, ConfigContext, MainContext } from "./contexts/contexts";

import Header from "./components/header/header";
import SideBar from "./components/sidebar/sidebar";
import Preview from "./components/preview/preview";

import api from "./utils/api/api";
import { data } from "./contexts/data";
import { config } from "./contexts/config";

const App = () => {

  const [dat, setDat] = useState([]);
  useEffect(() => {
    api.get()
      .then((data) => {
        setDat(data);
      })
      .catch(err => {
        console.log(err)
      })
  }, []);
  console.log(dat)

  return (
    <div className="page">
      <MainContext.Provider value={data}>
        <Header />
        <ConfigContext.Provider value={config}>
          <StateProvider>
            <SideBar />
            <Preview />
          </StateProvider>
        </ConfigContext.Provider>
      </MainContext.Provider>
    </div>
  );
}

export default App;
