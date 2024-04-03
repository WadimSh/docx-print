import { useState, useContext, useEffect } from "react";
import { StateContext, ConfigContext, MainContext } from "../../contexts/contexts";

import SelectOptions from "../../ui/select-options/select-options";
import RadioGroup from "../../ui/radio-group/radio-group";
import ButtonsCounter from "../../ui/buttons-counter/buttons-counter";
import TextInput from "../../ui/text-input/text-input";
import CheckBox from "../../ui/check-box/check-box";

import SmallPrices from "../../template/small-prices/small-prices";
import BlankLetter from "../../template/blank-lеtter/blank-letter";

import transformArray from "../../utils/transform-array/transform-array";
import { DEFAULT_NAME_COMPANY } from "../../contexts/constant";

const SideBar = () => {
  const config = useContext(ConfigContext);
  const data = useContext(MainContext);
  const { sharedValue, setSharedValue } = useContext(StateContext);
  
  const [select, setSelect] = useState({});
  const [chack, setChack] = useState({});

  const [companyName, setCompanyName] = useState(sharedValue["companyName"] || DEFAULT_NAME_COMPANY);
  const [profit, setProfit] = useState(sharedValue["profit"] || 0);
  const [round, setRound] = useState(sharedValue["round"] || false);

  const newData = transformArray(data, profit, companyName, round);

  useEffect(() => {
    setSharedValue(prevState => ({
      ...prevState,
      chack: chack.value,
      companyName: companyName,
      profit: profit,
      round: round,
    }));
  }, [chack, companyName, profit, round, select, setSharedValue]);
  
  return (
    <aside>
      <SelectOptions 
        optionsArray={config}
        handleSelect={setSelect}
      />
      {config.map((item, index) => (
        (select.value === item.value) && <RadioGroup 
          key={index}
          optionsArray={item.options}
          group={item.value}
          handleChange={setChack}
        />
      ))}
      {chack && <div className='block'>
        {chack.company_name && <TextInput 
                                  defaultValue={companyName} 
                                  handleCompanyName={setCompanyName} 
                                />
        }
        {chack.extra_charge && <ButtonsCounter 
                                  defaultValue={profit} 
                                  handleProfit={setProfit} 
                                />
        }
        {chack.round_price && <CheckBox 
                                label='сделать "красивое" округление'
                                checked={round}
                                onChange={setRound}
                              />
        }
        {chack.fair_rounding && <a href={window.location.origin + '/locals/LibreBarcodeEAN13Text-Regular.ttf'} download='LibreBarcodeEAN13Text-Regular.ttf'>ссылка</a>}
      </div>}
      {chack.value && <div className='block-button'>
        {(!chack.value || chack.value === '') && <div className='defolt'>Создать документ</div>}
        {chack.value === 'small-prices' && <SmallPrices data={newData} />}
        {chack.value === 'encode-prices' && <BlankLetter context=' ' />}
      </div>}
    </aside>
  )
};

export default SideBar;