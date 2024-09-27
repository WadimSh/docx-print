import React from "react";

import Prices from "../../template/prices/prices";
import Flyers from "../../template/flyers/flyers";

import { TYPE_PRICES, TYPE_FLYERS } from "../../contexts/constant";

const CreateDocument = ({ state, newData, metaData }) => {
  return (
    <>
      {state.select.value === TYPE_PRICES && <Prices data={newData} value={state.check} />}
      {state.select.value === TYPE_FLYERS && <Flyers data={newData} meta={metaData} value={state.check} />}
    </>
  );
};

export default CreateDocument;