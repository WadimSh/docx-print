import React from 'react';
import { Document, Packer, WidthType, Paragraph, Table, TableCell, TableRow } from "docx";
import { saveAs } from 'file-saver';

import createSmallPrice from './create-smallprice';

const SmallPrices = ({ data }) => {

  const createTableRow = (tab) => {
    const rows = [];
    for (let i = 0; i < tab.length; i += 4) {
      const row = [];
      for (let j = 0; j < 4; j++) {
        if (tab[i + j]) {
          row.push(
            createSmallPrice(tab[i + j])
          );
        } else {
          row.push(new TableCell());
        }
      }
      rows.push(new TableRow({ 
        children: row 
      }));
    }
    return rows;
  };

  const createTable = (tab) => {
    const childrens = [];
    const pages = Math.ceil(tab.length / 28);
    for (let pageIndex = 0; pageIndex < pages; pageIndex++) {
      const pageData = tab.slice(pageIndex * 28, (pageIndex + 1) * 28);
      childrens.push(
        new Table({
          width: {
            size: 11336,
            type: WidthType.DXA,
          },
          rows: createTableRow(pageData)
        }), 
        new Paragraph(" "),
      );
    }
    return childrens;
  };

  const generateWordDocument = (tab) => {
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
        children: createTable(tab)
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
    <button onClick={() => handleDoc()}>Generate Small Price</button>
  );
};

export default SmallPrices;