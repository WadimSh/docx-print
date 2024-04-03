import { useEffect, useState } from "react";
import { StateProvider, ConfigContext, MainContext } from "./contexts/contexts";

import Header from "./components/header/header";
import SideBar from "./components/sidebar/sidebar";
import Preview from "./components/preview/preview";

//import api from "./utils/api/api";
import { data } from "./contexts/data";
import { config } from "./contexts/config";

const App = () => {
  const [buttonToggle, setButtonToggle] = useState(1);

  //const [dat, setDat] = useState([]);
  useEffect(() => {
    //api.get()
    //  .then((data) => {
    //    setDat(data);
    //  })
    //  .catch(err => {
    //    console.log(err)
    //  })
  }, []);
  
  return (
    <StateProvider>
      <MainContext.Provider value={data}>
        <Header 
          buttonToggle={buttonToggle} 
          setButtonToggle={setButtonToggle}
        />
        <ConfigContext.Provider value={config}>
          {buttonToggle === 1 && <SideBar />}
          {buttonToggle === 2 && <Preview />}
        </ConfigContext.Provider>
      </MainContext.Provider>
    </StateProvider>  
  );
}

export default App;
