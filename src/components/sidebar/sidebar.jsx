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
  const { setSharedValue } = useContext(StateContext);

  const [profit, setProfit] = useState(0);
  const [companyName, setCompanyName] = useState('');
  const [round, setRound] = useState(false);

  const [select, setSelect] = useState('');
  const [chack, setChack] = useState({});

  const newData = transformArray(data, profit, companyName, round);

  useEffect(() => {
    setSharedValue(chack.value)
  }, [chack, setSharedValue]);
  
  return (
    <aside>
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