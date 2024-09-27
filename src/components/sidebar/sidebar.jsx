import React, { useState, useContext, useEffect, useMemo } from "react";
import { StateContext, ConfigContext, MainContext } from "../../contexts/contexts";

import SelectOptions from "../../ui/select-options/select-options";
import RadioGroup from "../../ui/radio-group/radio-group";
import ConfigSection from "../config-section/config-section";
import CreateDocument from "../create-document/create-document";

import transformArray from "../../utils/transform-array/transform-array";
import { 
  DEFAULT_NAME_COMPANY, 
  PLACEHOLDER_SELECT_OPTIONS,
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

  const handleChange = (key) => (value) => {
    setState((prevState) => ({ ...prevState, [key]: value }));
  };

  return (
    <aside>
      <SelectOptions
        placeholder={PLACEHOLDER_SELECT_OPTIONS}
        optionsArray={config}
        handleSelect={handleChange("select")}
        logic={handleChange("logic")}
      />
      {config.map((item, index) => (
        (item.value && state.select.value === item.value) && (
          <RadioGroup
            key={index}
            optionsArray={item.options}
            group={item.value}
            handleChange={handleChange("check")}
            logic={handleChange("logic")}
          />
        )
      ))}
      {sharedValue.logic && <ConfigSection state={state} handleChange={handleChange} />}
      {sharedValue.logic && <CreateDocument state={state} newData={newData} metaData={metaData} />}
    </aside>
  );
};

export default SideBar;