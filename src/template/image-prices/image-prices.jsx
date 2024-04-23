import React from 'react';
import { Document, Packer, PageOrientation } from "docx";
import { saveAs } from 'file-saver';

import createTable from './create-table';
import CreateButton from '../../ui/create-button/create-button';
import { LABEL_CREATE_BUTTON } from '../../contexts/constant';

const ImagePrices = ({ data }) => {
  const generateWordDocument = (dataContent) => {
    const doc = new Document({
      sections: [{
        properties: {
          page: {
            size: {
              width: 11906,
              height: 16838,
              orientation: PageOrientation.LANDSCAPE,
            },
            margin: {
              top: 300,
              left: 500,
              bottom: 300,
              right: 500,
            },
          }
        },
        children: createTable(dataContent),
      }]
    });

    Packer.toBlob(doc).then(blob => {
      saveAs(blob, "image-prices.docx");
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

export default ImagePrices;