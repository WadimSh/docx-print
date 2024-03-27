import { useState, useContext, useEffect } from "react";
import { StateContext, ConfigContext } from "../../contexts/contexts";

import SelectOptions from "../../ui/select-options/select-options";
import RadioGroup from "../../ui/radio-group/radio-group";
import ButtonsCounter from "../../ui/buttons-counter/buttons-counter";
import TextInput from "../../ui/text-input/text-input";

import SmallPrices from "../../template/small-prices/small-prices";

import transformArray from "../../utils/transform-array/transform-array";
import { data } from "../../contexts/data";

const SideBar = () => {
  const [profit, setProfit] = useState(0);
  const [companyName, setCompanyName] = useState('АО "Европа уно трейд"');

  const config = useContext(ConfigContext);
  const [select, setSelect] = useState('');
  const [chack, setChack] = useState({});
  const { setSharedValue } = useContext(StateContext);

  const newData = transformArray(data, profit, companyName);

  useEffect(() => {
    setSharedValue(chack.value)
  }, [chack, setSharedValue]);
  console.log(profit);
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
      {chack && <div className='block'>
       {chack.company_name && <TextInput handleCompanyName={setCompanyName} />}
       {chack.extra_charge && <ButtonsCounter handleProfit={setProfit} />}
       {chack.fair_rounding && <div>3</div>}
      </div>}
      {select && <div className='block-button'>
        {(!chack.value || chack.value !== 'small-prices') && <div className='defolt'>Создать документ</div>}
        {chack.value === 'small-prices' && <SmallPrices data={newData} />}
      </div>}
    </aside>
  )
};

export default SideBar;