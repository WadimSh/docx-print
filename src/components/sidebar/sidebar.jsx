import { useState, useContext, useEffect } from "react";
import { StateContext, ConfigContext } from "../../contexts/contexts";

import SelectOptions from "../../ui/select-options/select-options";
import RadioGroup from "../../ui/radio-group/radio-group";
import ButtonsCounter from "../../ui/buttons-counter/buttons-counter";
import TextInput from "../../ui/text-input/text-input";

import SmallPrices from "../../template/small-prices/small-prices";

import transformArray from "../../utils/transform-array/transform-array";
import { data } from "../../contexts/data";
import { DEFAULT_NAME_COMPANY } from "../../contexts/constant";

const SideBar = () => {
  const config = useContext(ConfigContext);
  const { setSharedValue } = useContext(StateContext);

  const [profit, setProfit] = useState(0);
  const [companyName, setCompanyName] = useState('');

  const [select, setSelect] = useState('');
  const [chack, setChack] = useState({});

  const newData = transformArray(data, profit, companyName);

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
      {chack && <div className='block'>
        {chack.company_name && <TextInput 
                                  defaultValue={DEFAULT_NAME_COMPANY} 
                                  handleCompanyName={setCompanyName} 
                                />
        }
        {chack.extra_charge && <ButtonsCounter 
                                  handleProfit={setProfit} 
                                />
        }
        {chack.fair_rounding && <a href={window.location.origin + '/locals/LibreBarcodeEAN13Text-Regular.ttf'} download>ссылка</a>}
      </div>}
      {select && <div className='block-button'>
        {(!chack.value || chack.value !== 'small-prices') && <div className='defolt'>Создать документ</div>}
        {chack.value === 'small-prices' && <SmallPrices data={newData} />}
      </div>}
    </aside>
  )
};

export default SideBar;