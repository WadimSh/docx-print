import React, { useState } from 'react';
import { Document, Packer, Header, Footer, PageOrientation, HeightRule, BorderStyle, ImageRun, AlignmentType, Paragraph, TextRun, Table, TableRow, TableCell, WidthType } from "docx";
import { saveAs } from 'file-saver';

import CreateButton from '../../ui/create-button/create-button';
import { LABEL_CREATE_BUTTON, LABEL_DISABLED_BUTTON } from '../../contexts/constant';
import createTable from './create-table';

import logo from '../../assets/images/logo.png';

const Flyers = ({ data, value }) => {
  const blob = fetch(logo).then(r => r.blob());
  const [disabled, setDisabled] = useState(false);
  const generateWordDocument = (dataObject, valueObject) => {
    const doc = new Document({
      sections: [{
        properties: {
          //titlePage: true,
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
                          size: 8490,
                          type: WidthType.DXA,
                        },
                        children: [
                          new Paragraph({
                            spacing: { after: 300 },
                            indent: { left: 300 },
                            alignment: AlignmentType.LEFT,
                            children: [
                              new TextRun({
                                text: 'CАМЫЕ КРУТЫЕ ШАРЫ В РОССИИ',
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
                      new TableCell({
                        width: {
                          size: 2830,
                          type: WidthType.DXA,
                        },
                        children: [
                          new Paragraph({
                            spacing: { after: 350 },
                            alignment: AlignmentType.CENTER,
                            children: [
                              new ImageRun({
                                data: blob,
                                transformation: {
                                  width: 100,
                                  height: 25,
                                },
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
          //first: new Header({
          //  children: [
          //    new Paragraph({
          //      alignment: AlignmentType.CENTER,
          //      spacing: { before: 400, after: 500 },
          //      children: [
          //        new TextRun({
          //          text: 'Рекламная листовка',
          //          size: 48,
          //          font: "Roboto Black",
          //          bold: true,
          //          color: '#035bcb',
          //        }),
          //      ],
          //    }),
          //  ],
          //}),
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
                                spacing: { before: 100 },
                                indent: { left: 300 },
                                alignment: AlignmentType.LEFT,
                                children: [
                                  new TextRun({
                                    text: "2024г. АО 'Европа уно трейд'",
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
                                alignment: AlignmentType.LEFT,
                                spacing: { before: 100 },
                                indent: { left: 1500 },
                                children: [
                                  new TextRun({
                                    text: "124365, г.Москва, Зеленоград, ул.Заводская, 18, стр.9 тел.:(495) 748-0176, 748-0177, 530-8460, 8-800-200-00-14 факс:(495) 748-0178, 742-9525, e-mail: order@balloons.ru",
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
            //first: new Footer({
            //  children: [
            //    new Table({
            //      width: {
            //        size: 11336,
            //        type: WidthType.DXA,
            //      },
            //      borders: {
            //        left: { size: 0, color: "FFFFFF" },
            //        right: { size: 0, color: "FFFFFF" },
            //        top: { style: BorderStyle.DOUBLE, size: 12, color: "396EC5" },
            //        bottom: { size: 0, color: "FFFFFF" },
            //      },
            //      rows: [
            //        new TableRow({
            //          children: [
            //            new TableCell({
            //              width: {
            //                size: 11336,
            //                type: WidthType.DXA,
            //              },
            //              borders: {
            //                left: { size: 0, color: "FFFFFF" },
            //                right: { size: 0, color: "FFFFFF" },
            //                top: { style: BorderStyle.SINGLE, size: 12, color: "396EC5" },
            //                bottom: { size: 0, color: "FFFFFF" },
            //              },
            //              children: [
            //                new Paragraph({
            //                  indent: { left: 300 },
            //                  alignment: AlignmentType.LEFT,
            //                  children: [
            //                    new TextRun({
            //                      text: "АО 'Европа уно трейд'",
            //                      size: 24,
            //                      font: "Roboto",
            //                      bold: true,
            //                    }),
            //                  ],
            //                })
            //              ],
            //            }),
            //          ],
            //        }),
            //      ],
            //    }),
            //  ],
            //}),
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