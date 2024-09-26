import { useEffect, useState } from "react";
import { StateProvider, MainContext } from "./contexts/contexts";

import Header from "./components/header/header";
import NoFound from "./pages/no-found/no-found";
import Main from "./pages/main/main";

import api from "./utils/api/api";
//import { data } from "./contexts/data";

const App = () => {
  const allowedTypes = ['new', 'cash', 'fr'];
  const urlParams = new URLSearchParams(window.location.search);
  const type = allowedTypes.includes(urlParams.get('type')) ? urlParams.get('type') : 'new';
  const ids = urlParams.get('ids');

  const [data, setData] = useState([]);
  const [log, setLog] = useState({
    event: true,
    error: '',
  });

  const fetchApiData = async () => {
    setLog(prevLog => ({ ...prevLog, event: false }));
    try {
      const res = await api.get(type, ids);
      setData(res);
      setLog(prevLog => ({ ...prevLog, event: true }));
    } catch (error) {
      const errorMessage = error.toString().replace('TypeError: ', '');
      setLog(prevLog => ({ ...prevLog, error: `Произошла ошибка: ${errorMessage}` }));
    }
  };

  useEffect(() => {
    if (ids && type) {
      fetchApiData();
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