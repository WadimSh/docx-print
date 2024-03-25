import { useState } from "react";

import SelectOptions from "../../ui/select-options/select-options";
import RadioGroup from "../../ui/radio-group/radio-group";

import { config } from "../../contexts/config";

const SideBar = () => {
  const [select, setSelect] = useState('');
  const [chack, setChack] = useState('');
  
  return (
    <aside className="sidebar">
      <SelectOptions 
        optionsArray={config}
        handleSelect={setSelect}
      />
      { config.map((item, index) => (
        (select === item.name) && <RadioGroup 
          key={index}
          optionsArray={item.options}
          group={item.value}
          handleChange={setChack}
        />
      ))}
      {chack}
    </aside>
  )
};

export default SideBar;