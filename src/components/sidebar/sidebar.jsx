import { useState, useContext, useEffect } from "react";
import { StateContext, ConfigContext, MainContext } from "../../contexts/contexts";

import SelectOptions from "../../ui/select-options/select-options";
import RadioGroup from "../../ui/radio-group/radio-group";
import ButtonsCounter from "../../ui/buttons-counter/buttons-counter";
import TextInput from "../../ui/text-input/text-input";
import CheckBox from "../../ui/check-box/check-box";
import NotifyMessage from "../../ui/notify-message/notify-message";
import Textarea from "../../ui/textarea/textarea";

import Prices from "../../template/prices/prices";
import Flyers from "../../template/flyers/flyers";

import transformArray from "../../utils/transform-array/transform-array";
import { 
  DEFAULT_NAME_COMPANY, 
  LABEL_CHECKBOX_ROUND,
  LABEL_BUTTONS_COUNTER,
  LABEL_TEXT_INPUT,
  PLACEHOLDER_SELECT_OPTIONS,
  TYPE_PRICES,
  TYPE_FLYERS,
  LABEL_INPUT_COMPANY,
  LABEL_INPUT_REQUISITES,
  LABEL_RUNNING_TITLE,
  DEFAULT_RUNNING_TITLE,
  DEFAULT_INPUT_COMPANY,
  DEFAULT_INPUT_REQUISITES
} from "../../contexts/constant";

const defaultValues = {
  companyName: DEFAULT_NAME_COMPANY,
  profit: 0,
  round: false,
  titleLabel: "",
  companyLabel: "",
  requisitesLabel: "",
};

const SideBar = () => {
  const config = useContext(ConfigContext);
  const data = useContext(MainContext);
  const { sharedValue, setSharedValue } = useContext(StateContext);
  
  const [logic, setLogic] = useState(false);
  const [select, setSelect] = useState({});
  const [check, setCheck] = useState({});

  const [companyName, setCompanyName] = useState(sharedValue.companyName || defaultValues.companyName);
  const [profit, setProfit] = useState(sharedValue.profit || defaultValues.profit);
  const [round, setRound] = useState(sharedValue.round || defaultValues.round);
  const [titleLabel, setTitleLabel] = useState(sharedValue.title || defaultValues.title);
  const [companyLabel, setCompanyLabel] = useState(sharedValue.company || defaultValues.company);
  const [requisitesLabel, setRequisitesLabel] = useState(sharedValue.requisites || defaultValues.requisites);
  
  const [newData, setNewData] = useState([]);
  const [metaData, setMetaData] = useState({});

  useEffect(() => {
    const transformedData = transformArray(data, profit, companyName, round);
    setNewData(transformedData);
  }, [data, profit, companyName, round]);

  useEffect(() => {
    setMetaData({
      title: titleLabel,
      company: companyLabel,
      requisites: requisitesLabel,
    })
  }, [titleLabel, companyLabel, requisitesLabel])
    
  useEffect(() => {
    setSharedValue(prevState => ({
      ...prevState,
      check: check.value,
      companyName: companyName,
      profit: profit,
      round: round,
      logic: logic,
      title: titleLabel,
      company: companyLabel,
      requisites: requisitesLabel,
    }));
  }, [logic, check, companyName, profit, round, select, titleLabel, companyLabel, requisitesLabel, setSharedValue]);
 
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
      {sharedValue.logic && <section>
        {check.title_flyers && <TextInput 
                                  label={LABEL_RUNNING_TITLE}
                                  defaultValue={titleLabel} 
                                  handleName={setTitleLabel} 
                                  placeholder={DEFAULT_RUNNING_TITLE}
                                />}
        {check.label_company && <TextInput 
                                  label={LABEL_INPUT_COMPANY}
                                  defaultValue={companyLabel} 
                                  handleName={setCompanyLabel} 
                                  maxLength={25}
                                  placeholder={DEFAULT_INPUT_COMPANY}
                                />}
        {check.label_requisites && <Textarea 
                                  label={LABEL_INPUT_REQUISITES}
                                  defaultValue={requisitesLabel} 
                                  handleName={setRequisitesLabel} 
                                  placeholder={DEFAULT_INPUT_REQUISITES}
                                />}
        {check.fair_rounding && <NotifyMessage />}
        {check.company_name && <TextInput 
                                  label={LABEL_TEXT_INPUT}
                                  defaultValue={companyName} 
                                  handleName={setCompanyName} 
                                  maxLength={25}
                                />}
        {check.extra_charge && <ButtonsCounter 
                                  label={LABEL_BUTTONS_COUNTER}
                                  defaultValue={profit} 
                                  handleProfit={setProfit} 
                                />}
        {check.round_price && <CheckBox 
                                label={LABEL_CHECKBOX_ROUND}
                                checked={round}
                                onChange={setRound}
                              />}
      </section>}
      {sharedValue.logic && <>
        {select.value === TYPE_PRICES && <Prices data={newData} value={check} />}
        {select.value === TYPE_FLYERS && <Flyers data={newData} meta={metaData} value={check}/>}
      </>}
    </aside>
  )
};

export default SideBar;