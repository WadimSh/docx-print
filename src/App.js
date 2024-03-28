import { useEffect, useState } from "react";

import Header from "./components/header/header";
import SideBar from "./components/sidebar/sidebar";
import Preview from "./components/preview/preview";
import { StateProvider, ConfigContext } from "./contexts/contexts";

import api from "./utils/api/api";

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
