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
  
  return (
    <section>
      {check.title_flyers && (
        <TextInput
          label={LABEL_RUNNING_TITLE}
          defaultValue={titleLabel}
          handleName={setTitleLabel}
          placeholder={DEFAULT_RUNNING_TITLE}
        />
      )}
      {check.label_company && (
        <TextInput
          label={LABEL_INPUT_COMPANY}
          defaultValue={companyLabel}
          handleName={setCompanyLabel}
          maxLength={25}
          placeholder={DEFAULT_INPUT_COMPANY}
        />
      )}
      {check.label_requisites && (
        <Textarea
          label={LABEL_INPUT_REQUISITES}
          defaultValue={requisitesLabel}
          handleName={setRequisitesLabel}
          placeholder={DEFAULT_INPUT_REQUISITES}
        />
      )}
      {check.fair_rounding && <NotifyMessage />}
      {check.company_name && (
        <TextInput
          label={LABEL_TEXT_INPUT}
          defaultValue={companyName}
          handleName={setCompanyName}
          maxLength={25}
        />
      )}
      {check.extra_charge && (
        <ButtonsCounter
          label={LABEL_BUTTONS_COUNTER}
          defaultValue={profit}
          handleProfit={setProfit}
        />
      )}
      {check.round_price && (
        <CheckBox
          label={LABEL_CHECKBOX_ROUND}
          checked={round}
          onChange={setRound}
        />
      )}
    </section>
  );
};

export default ConfigSection;