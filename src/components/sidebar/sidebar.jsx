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
      {config.map((item, index) => (
        (select === item.name) && <RadioGroup 
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
    </aside>
  )
};

export default SideBar;