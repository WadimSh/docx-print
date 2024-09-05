import React, { useState } from 'react';
import { Document, Packer, PageOrientation } from "docx";
import { saveAs } from 'file-saver';

import createTable from './create-table';
import CreateButton from '../../../ui/create-button/create-button';
import { LABEL_CREATE_BUTTON, LABEL_DISABLED_BUTTON } from '../../../contexts/constant';

const ImagePrices = ({ data }) => {
  const [disabled, setDisabled] = useState(false);
  const generateWordDocument = (dataContent) => {
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
              top: 250,
              left: 250,
              bottom: 100,
              right: 250,
            },
          }
        },
        children: createTable(dataContent),
      }]
    });

    Packer.toBlob(doc).then(blob => {
      saveAs(blob, "image-prices.docx");
      setDisabled(false);
    });
  };

  const handleDoc = () => {
    setDisabled(true);
    generateWordDocument(data);
  };

  return (
    <CreateButton 
      disabled={disabled}
      handleDoc={handleDoc} 
      labelCreate={LABEL_CREATE_BUTTON}
      labelDisabled={LABEL_DISABLED_BUTTON}
    />
  );
};

export default ImagePrices;