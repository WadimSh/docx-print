import React, { useState } from 'react';
import { Document, Packer, PageOrientation } from "docx";
import { saveAs } from 'file-saver';

import CreateButton from '../../ui/create-button/create-button';
import { LABEL_CREATE_BUTTON } from '../../contexts/constant';
import createTable from './create-table';

const SmallPrices = ({ data }) => {
  const [disabled, setDisabled] = useState(false);
  const generateWordDocument = (dataObject) => {
    const doc = new Document({
      sections: [{
        properties: {
          page: {
            size: {
              width: 11906,
              height: 16838,
              orientation: PageOrientation.PORTRAIT,
            },
            margin: {
              top: 300,
              left: 250,
              bottom: 300,
              right: 250,
            },
          },
        },
        children: createTable(dataObject)
      }]
    });

    Packer.toBlob(doc).then(blob => {
      saveAs(blob, "small-prices.docx");
      console.log("Document created successfully");
    });
  };

  const handleDoc = () => {
    setDisabled(true);
    generateWordDocument(data);
    setTimeout(() =>{
      setDisabled(false);
    }, 1000)
  }

  return (
    <CreateButton 
      disabled={disabled}
      handleDoc={handleDoc} 
      label={LABEL_CREATE_BUTTON}
    />
  );
};

export default SmallPrices;