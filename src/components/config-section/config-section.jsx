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
  check,
  titleLabel,
  setTitleLabel,
  companyLabel,
  setCompanyLabel,
  requisitesLabel,
  setRequisitesLabel,
  companyName,
  setCompanyName,
  profit,
  setProfit,
  round,
  setRound,
}) => {

  const inputs = [
    {
      label: LABEL_RUNNING_TITLE,
      defaultValue: titleLabel,
      handleName: setTitleLabel,
      placeholder: DEFAULT_RUNNING_TITLE,
    },
    {
      label: LABEL_INPUT_COMPANY,
      defaultValue: companyLabel,
      handleName: setCompanyLabel,
      maxLength: 25,
      placeholder: DEFAULT_INPUT_COMPANY,
    },
    {
      label: LABEL_INPUT_REQUISITES,
      defaultValue: requisitesLabel,
      handleName: setRequisitesLabel,
      placeholder: DEFAULT_INPUT_REQUISITES,
    },
    {
      label: LABEL_TEXT_INPUT,
      defaultValue: companyName,
      handleName: setCompanyName,
      maxLength: 25,
    },
  ];

  const checkboxes = [
    {
      label: LABEL_CHECKBOX_ROUND,
      checked: round,
      onChange: setRound,
    },
  ];

  const buttons = [
    {
      label: LABEL_BUTTONS_COUNTER,
      defaultValue: profit,
      handleProfit: setProfit,
    },
  ];
  
  return (
    <section>
      {check.title_flyers && <TextInput {...inputs[0]} />}
      {check.label_company && <TextInput {...inputs[1]} />}
      {check.label_requisites && <Textarea {...inputs[2]} />}
      {check.fair_rounding && <NotifyMessage />}
      {check.company_name && <TextInput {...inputs[3]} />}
      {check.extra_charge && <ButtonsCounter {...buttons[0]} />}
      {check.round_price && <CheckBox {...checkboxes[0]} />}
    </section>
  );
};

export default ConfigSection;