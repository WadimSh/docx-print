import React from 'react';
import { Document, Packer, WidthType, Paragraph, Table, TableRow } from "docx";
import { saveAs } from 'file-saver';

import createSmallPrice from './create-smallprice';
import NoneCell from './none-cell';

const SmallPrices = ({ data }) => {

  const createTableRow = (trows) => {
    const rows = [];
    for (let i = 0; i < trows.length; i += 4) {
      const row = [];
      for (let j = 0; j < 4; j++) {
        if (trows[i + j]) {
          row.push(
            createSmallPrice(trows[i + j])
          );
        } else {
          row.push(
            NoneCell()
          );
        }
      }
      rows.push(new TableRow({ 
        children: row 
      }));
    }
    return rows;
  };

  const createTable = (table) => {
    const childrens = [];
    const pages = Math.ceil(table.length / 28);
    for (let pageIndex = 0; pageIndex < pages; pageIndex++) {
      const pageData = table.slice(pageIndex * 28, (pageIndex + 1) * 28);
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

  const generateWordDocument = (object) => {
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
        children: createTable(object)
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
    <button onClick={() => handleDoc()}>Создать документ</button>
  );
};

export default SmallPrices;