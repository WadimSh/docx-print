import { useState, useContext, useEffect } from "react";
import { StateContext, ConfigContext, MainContext } from "../../contexts/contexts";

import SelectOptions from "../../ui/select-options/select-options";
import RadioGroup from "../../ui/radio-group/radio-group";
import ConfigSection from "../config-section/config-section";

import Prices from "../../template/prices/prices";
import Flyers from "../../template/flyers/flyers";

import transformArray from "../../utils/transform-array/transform-array";
import { 
  DEFAULT_NAME_COMPANY, 
  PLACEHOLDER_SELECT_OPTIONS,
  TYPE_PRICES,
  TYPE_FLYERS,
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
      {sharedValue.logic && <ConfigSection 
        check={check}
        titleLabel={titleLabel}
        setTitleLabel={setTitleLabel}
        companyLabel={companyLabel}
        setCompanyLabel={setCompanyLabel}
        requisitesLabel={requisitesLabel}
        setRequisitesLabel={setRequisitesLabel}
        companyName={companyName}
        setCompanyName={setCompanyName}
        profit={profit}
        setProfit={setProfit}
        round={round}
        setRound={setRound}
      />}
      {sharedValue.logic && <>
        {select.value === TYPE_PRICES && <Prices data={newData} value={check} />}
        {select.value === TYPE_FLYERS && <Flyers data={newData} meta={metaData} value={check}/>}
      </>}
    </aside>
  )
};

export default SideBar;