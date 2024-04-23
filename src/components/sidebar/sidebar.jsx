import { useState, useContext, useEffect } from "react";
import { StateContext, ConfigContext, MainContext } from "../../contexts/contexts";

import SelectOptions from "../../ui/select-options/select-options";
import RadioGroup from "../../ui/radio-group/radio-group";
import ButtonsCounter from "../../ui/buttons-counter/buttons-counter";
import TextInput from "../../ui/text-input/text-input";
import CheckBox from "../../ui/check-box/check-box";

import SmallPrices from "../../template/small-prices/small-prices";
import ImagePrices from "../../template/image-prices/image-prices";
import BlankLetter from "../../template/blank-lеtter/blank-letter";

import transformArray from "../../utils/transform-array/transform-array";
import { 
  DEFAULT_NAME_COMPANY, 
  LABEL_CHECKBOX_ROUND,
  LABEL_BUTTONS_COUNTER,
  LABEL_TEXT_INPUT,
  PLACEHOLDER_SELECT_OPTIONS,
  TYPE_SMALL_PRICES,
  TYPE_IMAGE_PRICES 
} from "../../contexts/constant";

const SideBar = () => {
  const config = useContext(ConfigContext);
  const data = useContext(MainContext);
  const { sharedValue, setSharedValue } = useContext(StateContext);
  
  const [select, setSelect] = useState({});
  const [check, setCheck] = useState({});

  const [companyName, setCompanyName] = useState(sharedValue["companyName"] || DEFAULT_NAME_COMPANY);
  const [profit, setProfit] = useState(sharedValue["profit"] || 0);
  const [round, setRound] = useState(sharedValue["round"] || false);

  const newData = transformArray(data, profit, companyName, round);
  
  useEffect(() => {
    setSharedValue(prevState => ({
      ...prevState,
      check: check.value,
      companyName: companyName,
      profit: profit,
      round: round,
    }));
  }, [check, companyName, profit, round, select, setSharedValue]);
  
  return (
    <aside>
      <SelectOptions 
        placeholder={PLACEHOLDER_SELECT_OPTIONS}
        optionsArray={config}
        handleSelect={setSelect}
      />
      {config.map((item, index) => (
        (select.value === item.value) && <RadioGroup 
          key={index}
          optionsArray={item.options}
          group={item.value}
          handleChange={setCheck}
        />
      ))}
      <section>
        {check.fair_rounding && <a href={window.location.origin + '/locals/LibreBarcodeEAN13Text-Regular.ttf'} download='LibreBarcodeEAN13Text-Regular.ttf'>ссылка</a>}
        {check.company_name && <TextInput 
                                  label={LABEL_TEXT_INPUT}
                                  defaultValue={companyName} 
                                  handleCompanyName={setCompanyName} 
                                />
        }
        {check.extra_charge && <ButtonsCounter 
                                  label={LABEL_BUTTONS_COUNTER}
                                  defaultValue={profit} 
                                  handleProfit={setProfit} 
                                />
        }
        {check.round_price && <CheckBox 
                                label={LABEL_CHECKBOX_ROUND}
                                checked={round}
                                onChange={setRound}
                              />
        }
      </section>
      {check.value === TYPE_SMALL_PRICES && <SmallPrices data={newData} />}
      {check.value === TYPE_IMAGE_PRICES && <ImagePrices data={newData} />}
    </aside>
  )
};

export default SideBar;