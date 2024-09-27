import React from 'react';

import ButtonsCounter from "../../ui/buttons-counter/buttons-counter";
import TextInput from "../../ui/text-input/text-input";
import CheckBox from "../../ui/check-box/check-box";
import NotifyMessage from "../../ui/notify-message/notify-message";
import Textarea from "../../ui/textarea/textarea";

import { 
  LABEL_CHECKBOX_ROUND,
  LABEL_BUTTONS_COUNTER,
  LABEL_TEXT_INPUT,
  LABEL_INPUT_COMPANY,
  LABEL_INPUT_REQUISITES,
  LABEL_RUNNING_TITLE,
  DEFAULT_RUNNING_TITLE,
  DEFAULT_INPUT_COMPANY,
  DEFAULT_INPUT_REQUISITES
} from "../../contexts/constant";

const ConfigSection = ({
  state,
  handleChange,
}) => {

  const {
    title_flyers = false,
    label_company = false,
    label_requisites = false,
    fair_rounding = false,
    company_name = false,
    extra_charge = false,
    round_price = false,
  } = state.check;

  const inputs = [
    {
      label: LABEL_RUNNING_TITLE,
      defaultValue: state.titleLabel,
      handleName: handleChange("titleLabel"),
      placeholder: DEFAULT_RUNNING_TITLE,
    },
    {
      label: LABEL_INPUT_COMPANY,
      defaultValue: state.companyLabel,
      handleName: handleChange("companyLabel"),
      maxLength: 25,
      placeholder: DEFAULT_INPUT_COMPANY,
    },
    {
      label: LABEL_INPUT_REQUISITES,
      defaultValue: state.requisitesLabel,
      handleName: handleChange("requisitesLabel"),
      placeholder: DEFAULT_INPUT_REQUISITES,
    },
    {
      label: LABEL_TEXT_INPUT,
      defaultValue: state.companyName,
      handleName: handleChange("companyName"),
      maxLength: 25,
    },
  ];

  const checkboxes = [
    {
      label: LABEL_CHECKBOX_ROUND,
      checked: state.round,
      onChange: handleChange("round"),
    },
  ];

  const buttons = [
    {
      label: LABEL_BUTTONS_COUNTER,
      defaultValue: state.profit,
      handleProfit: handleChange("profit"),
    },
  ];
  
  return (
    <section>
      {title_flyers && <TextInput {...inputs[0]} />}
      {label_company && <TextInput {...inputs[1]} />}
      {label_requisites && <Textarea {...inputs[2]} />}
      {fair_rounding && <NotifyMessage />}
      {company_name && <TextInput {...inputs[3]} />}
      {extra_charge && <ButtonsCounter {...buttons[0]} />}
      {round_price && <CheckBox {...checkboxes[0]} />}
    </section>
  );
};

export default ConfigSection;