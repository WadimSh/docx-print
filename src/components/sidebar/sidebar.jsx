import { useState, useContext, useEffect } from "react";
import { StateContext, ConfigContext } from "../../contexts/contexts";

import SelectOptions from "../../ui/select-options/select-options";
import RadioGroup from "../../ui/radio-group/radio-group";

const SideBar = () => {
  const config = useContext(ConfigContext);
  const [select, setSelect] = useState('');
  const [chack, setChack] = useState({});
  const { setSharedValue } = useContext(StateContext);

  useEffect(() => {
    setSharedValue(chack.value)
  }, [chack, setSharedValue]);
  
  return (
    <aside className="sidebar">
      <SelectOptions 
        optionsArray={config}
        handleSelect={setSelect}
      />
      {config.map((item, index) => (
        (select === item.value) && <RadioGroup 
          key={index}
          optionsArray={item.options}
          group={item.value}
          handleChange={setChack}
        />
      ))}
      <div>
       {chack.company_name && <div>1</div>}
       {chack.extra_charge && <div>2</div>}
       {chack.fair_rounding && <div>3</div>}
      </div>
      {chack.value}
    </aside>
  )
};

export default SideBar;