import { useState, useContext, useEffect } from "react";
import { StateContext, ConfigContext } from "../../contexts/contexts";

import SelectOptions from "../../ui/select-options/select-options";
import RadioGroup from "../../ui/radio-group/radio-group";
import SmallPrices from "../../template/small-prices/small-prices";

import transformArray from "../../utils/transform-array/transform-array";
import { data } from "../../contexts/data";

const SideBar = () => {
  const config = useContext(ConfigContext);
  const [select, setSelect] = useState('');
  const [chack, setChack] = useState({});
  const { setSharedValue } = useContext(StateContext);

  const newData = transformArray(data);

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
      <div className='block'>
       {chack.company_name && <div>1</div>}
       {chack.extra_charge && <div>2</div>}
       {chack.fair_rounding && <div>3</div>}
      </div>
      {select && <div className='block-button'>
        {(!chack.value || chack.value !== 'small-prices') && <div className='defolt'>Создать документ</div>}
        {chack.value === 'small-prices' && <SmallPrices data={newData} />}
      </div>}
    </aside>
  )
};

export default SideBar;