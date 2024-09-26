import { useState, useContext, useEffect, useMemo } from "react";
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

  const [state, setState] = useState({
    logic: false,
    select: {},
    check: {},
    companyName: sharedValue.companyName || defaultValues.companyName,
    profit: sharedValue.profit || defaultValues.profit,
    round: sharedValue.round || defaultValues.round,
    titleLabel: sharedValue.title || defaultValues.title,
    companyLabel: sharedValue.company || defaultValues.company,
    requisitesLabel: sharedValue.requisites || defaultValues.requisites,
  });

  const [newData, setNewData] = useState([]);
  const [metaData, setMetaData] = useState({});

  const transformedData = useMemo(() => transformArray(data, state.profit, state.companyName, state.round), [data, state.profit, state.companyName, state.round]);

  useEffect(() => {
    setNewData(transformedData);
  }, [transformedData]);

  useEffect(() => {
    setMetaData({
      title: state.titleLabel,
      company: state.companyLabel,
      requisites: state.requisitesLabel,
    });
  }, [state.titleLabel, state.companyLabel, state.requisitesLabel]);

  useEffect(() => {
    setSharedValue((prevState) => ({
      ...prevState,
      check: state.check.value,
      companyName: state.companyName,
      profit: state.profit,
      round: state.round,
      logic: state.logic,
      title: state.titleLabel,
      company: state.companyLabel,
      requisites: state.requisitesLabel,
    }));
  }, [state, setSharedValue]);

  const handleInputChange = (key) => (value) => {
    setState((prevState) => ({ ...prevState, [key]: value }));
  };

  return (
    <aside>
      <SelectOptions
        placeholder={PLACEHOLDER_SELECT_OPTIONS}
        optionsArray={config}
        handleSelect={handleInputChange("select")}
        logic={handleInputChange("logic")}
      />
      {config.map((item, index) => (
        (item.value && state.select.value === item.value) && (
          <RadioGroup
            key={index}
            optionsArray={item.options}
            group={item.value}
            handleChange={handleInputChange("check")}
            logic={handleInputChange("logic")}
          />
        )
      ))}
      {sharedValue.logic && (
        <ConfigSection
          check={state.check}
          titleLabel={state.titleLabel}
          setTitleLabel={handleInputChange("titleLabel")}
          companyLabel={state.companyLabel}
          setCompanyLabel={handleInputChange("companyLabel")}
          requisitesLabel={state.requisitesLabel}
          setRequisitesLabel={handleInputChange("requisitesLabel")}
          companyName={state.companyName}
          setCompanyName={handleInputChange("companyName")}
          profit={state.profit}
          setProfit={handleInputChange("profit")}
          round={state.round}
          setRound={handleInputChange("round")}
        />
      )}
      {sharedValue.logic && (
        <>
          {state.select.value === TYPE_PRICES && <Prices data={newData} value={state.check} />}
          {state.select.value === TYPE_FLYERS && <Flyers data={newData} meta={metaData} value={state.check} />}
        </>
      )}
    </aside>
  );
};

export default SideBar;