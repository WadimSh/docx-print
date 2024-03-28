import React from 'react';
import { Document, Packer } from "docx";
import { saveAs } from 'file-saver';

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
    <button className="btn" type="button" onClick={() => handleDoc()}>Создать документ</button>
  );
};

export default SmallPrices;