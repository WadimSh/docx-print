import React, { useState } from 'react';
import { Document, Packer, Header, Footer, PageOrientation, HeightRule, BorderStyle, AlignmentType, Paragraph, TextRun, Table, TableRow, TableCell, WidthType } from "docx";
import { saveAs } from 'file-saver';

import CreateButton from '../../ui/create-button/create-button';
import { 
  LABEL_CREATE_BUTTON, 
  LABEL_DISABLED_BUTTON,
  DEFAULT_RUNNING_TITLE,
  DEFAULT_INPUT_COMPANY,
  DEFAULT_INPUT_REQUISITES 
} from '../../contexts/constant';
import createTable from './create-table';

const Flyers = ({ data, meta, value }) => {
  const { title, company, requisites } = meta;
  const [disabled, setDisabled] = useState(false);
  const generateWordDocument = (dataObject, valueObject) => {
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
          },
        },
        headers: {
          default: new Header({
            height: { value: 1000, rule: HeightRule.ATLEAST },
            children: [
              new Table({
                width: {
                  size: 11336,
                  type: WidthType.DXA,
                },
                rows: [
                  new TableRow({
                    children: [
                      new TableCell({
                        width: {
                          size: 11336,
                          type: WidthType.DXA,
                        },
                        children: [
                          new Paragraph({
                            spacing: { after: 300 },
                            indent: { left: 300, right: 300 },
                            alignment: AlignmentType.CENTER,
                            children: [
                              new TextRun({
                                text: title || DEFAULT_RUNNING_TITLE,
                                size: 32,
                                font: "Roboto",
                              }),
                            ],
                          }),
                        ],
                        borders: {
                          left: { size: 0, color: "FFFFFF" },
                          right: { size: 0, color: "FFFFFF" },
                          top: { size: 0, color: "FFFFFF" },
                          bottom: { style: BorderStyle.DOUBLE, size: 12, color: "396EC5" },
                        },
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        },
        footers: {
          default: new Footer({
            children: [
              new Table({
                width: {
                  size: 11336,
                  type: WidthType.DXA,
                },
                rows: [
                  new TableRow({
                    height: { value: 1000, rule: HeightRule.EXACT },
                    children: [
                      new TableCell({
                        width: {
                          size: 3630,
                          type: WidthType.DXA,
                        },
                        borders: {
                          left: { size: 0, color: "FFFFFF" },
                          right: { size: 0, color: "FFFFFF" },
                          top: { style: BorderStyle.DOUBLE, size: 12, color: "396EC5" },
                          bottom: { size: 0, color: "FFFFFF" },
                        },
                        children: [
                          new Paragraph({
                            spacing: { before: 50 },
                            indent: { left: 300 },
                            alignment: AlignmentType.LEFT,
                            children: [
                              new TextRun({
                                text: company || DEFAULT_INPUT_COMPANY,
                                size: 24,
                                font: "Roboto",
                                bold: true,
                              }),
                            ],
                          })
                        ],
                      }),
                      new TableCell({
                        width: {
                          size: 7690,
                          type: WidthType.DXA,
                        },
                        borders: {
                          left: { size: 0, color: "FFFFFF" },
                          right: { size: 0, color: "FFFFFF" },
                          top: { style: BorderStyle.DOUBLE, size: 12, color: "396EC5" },
                          bottom: { size: 0, color: "FFFFFF" },
                        },
                        children: [
                          new Paragraph({
                            alignment: AlignmentType.RIGHT,
                            spacing: { before: 50 },
                            //indent: { left: 1500 },
                            children: [
                              new TextRun({
                                text: requisites || DEFAULT_INPUT_REQUISITES,
                                font: "Roboto",
                                size: 20,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        },
        children: createTable(dataObject, valueObject)
      }]
    });

    Packer.toBlob(doc).then(blob => {
      saveAs(blob, `${value.value}.docx`);
      setDisabled(false);
    });
  };

  const handleDoc = () => {
    setDisabled(true);
    generateWordDocument(data, value);
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

export default Flyers;