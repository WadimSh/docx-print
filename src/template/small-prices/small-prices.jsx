import React from 'react';
import { Document, Packer } from "docx";
import { saveAs } from 'file-saver';

import CreateButton from '../../ui/create-button/create-button';
import { LABEL_CREATE_BUTTON } from '../../contexts/constant';
import createTable from './create-table';

const SmallPrices = ({ data }) => {
  const generateWordDocument = (dataObject) => {
    const doc = new Document({
      sections: [{
        properties: {
          page: {
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
    generateWordDocument(data);
  }

  return (
    <CreateButton 
      handleDoc={handleDoc} 
      label={LABEL_CREATE_BUTTON}
    />
  );
};

export default SmallPrices;