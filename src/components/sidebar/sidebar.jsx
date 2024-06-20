import { useState, useContext, useEffect } from "react";
import { StateContext, ConfigContext, MainContext } from "../../contexts/contexts";

import SelectOptions from "../../ui/select-options/select-options";
import RadioGroup from "../../ui/radio-group/radio-group";
import ButtonsCounter from "../../ui/buttons-counter/buttons-counter";
import TextInput from "../../ui/text-input/text-input";
import CheckBox from "../../ui/check-box/check-box";
import NotifyMessage from "../../ui/notify-message/notify-message";

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
  TYPE_IMAGE_PRICES,
  TYPE_BLANK_LETTER
} from "../../contexts/constant";

const SideBar = () => {
  const config = useContext(ConfigContext);
  const data = useContext(MainContext);
  const { sharedValue, setSharedValue } = useContext(StateContext);
  
  const [logic, setLogic] = useState(false);
  const [select, setSelect] = useState({});
  const [check, setCheck] = useState({});

  const [companyName, setCompanyName] = useState(sharedValue["companyName"] || DEFAULT_NAME_COMPANY);
  const [profit, setProfit] = useState(sharedValue["profit"] || 0);
  const [round, setRound] = useState(sharedValue["round"] || false);

  const newData = transformArray(data, profit, companyName, round);
  console.log(newData)
  useEffect(() => {
    setSharedValue(prevState => ({
      ...prevState,
      check: check.value,
      companyName: companyName,
      profit: profit,
      round: round,
      logic: logic,
    }));
  }, [logic, check, companyName, profit, round, select, setSharedValue]);
  
  return (
    <aside>
      <SelectOptions 
        placeholder={PLACEHOLDER_SELECT_OPTIONS}
        optionsArray={config}
        handleSelect={setSelect}
        logic={setLogic}
      />
      {config.map((item, index) => (
        (item.value && select.value === item.value) && <RadioGroup 
          key={index}
          optionsArray={item.options}
          group={item.value}
          handleChange={setCheck}
          logic={setLogic}
        />
      ))}
      {sharedValue["logic"] && <section>
        {check.fair_rounding && <NotifyMessage />}
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
      </section>}
      {sharedValue["logic"] && <>
        {check.value === TYPE_SMALL_PRICES && <SmallPrices data={newData} />}
        {check.value === TYPE_IMAGE_PRICES && <ImagePrices data={newData} />}
        {check.value === TYPE_BLANK_LETTER && <BlankLetter context={sharedValue["companyName"]} />}
      </>}
    </aside>
  )
};

export default SideBar;