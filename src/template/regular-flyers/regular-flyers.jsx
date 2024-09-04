import React, { useState } from 'react';
import { Document, Packer, Header, Footer, PageOrientation, HeadingLevel, AlignmentType, Paragraph, TextRun } from "docx";
import { saveAs } from 'file-saver';

import CreateButton from '../../ui/create-button/create-button';
import { LABEL_CREATE_BUTTON, LABEL_DISABLED_BUTTON } from '../../contexts/constant';
import createTable from './create-table';

const RegularFlyers = ({ data }) => {
  const [disabled, setDisabled] = useState(false);
  const generateWordDocument = (dataObject) => {
    const doc = new Document({
      sections: [{
        properties: {
          titlePage: true,
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
          },
        },
        headers: {
          default: new Header({
            children: [
              new Paragraph({
                text: "",
                spacing: { before: 600, after: 500 }, // Устанавливает отступ перед абзацем
                alignment: AlignmentType.CENTER,
                heading: HeadingLevel.HEADING_1,
              }),
            ],
          }),
          first: new Header({
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                spacing: { before: 400, after: 500 },
                children: [
                  new TextRun({
                    text: 'Текст для первой страницы',
                    size: 48,
                    font: "Roboto Black",
                    bold: true,
                  }),
                ],
              }),
            ],
          }),
        },
        footers: {
            default: new Footer({
                children: [new Paragraph("Footer text")],
            }),
            first: new Footer({
              children: [new Paragraph("Footer text")],
            }),
        },
        children: createTable(dataObject)
      }]
    });

    Packer.toBlob(doc).then(blob => {
      saveAs(blob, "regular-flyers.docx");
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

export default RegularFlyers;