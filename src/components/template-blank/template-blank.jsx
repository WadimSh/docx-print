import React from 'react';
import { Document, WidthType, BorderStyle, PageNumber, NumberFormat, AlignmentType, Table, TableRow, TableCell, Packer, Paragraph, TextRun, Header, Footer, ImageRun } from 'docx';
import { saveAs } from 'file-saver';

const TemplateBlank = () => {

  const generate = () => {
    const docx = new Document({
      sections: [{
        headers: {
          default: new Header({
            children: [
              
            ],
          }),
        },
        footers: {
          default: new Footer({
            children: [
              new Table({
                width: {
                  size: 10062,
                  type: WidthType.DXA,
                },
                rows: [
                  new TableRow({
                    children: [
                      new TableCell({
                        width: {
                          size: 2409,
                          type: WidthType.DXA,
                        },
                        children: [
                          new Paragraph({
                            children: [
                              new TextRun({
                                text: 'АО "Европа уно трейд"',
                                break: 1,
                                size: 16,
                                font: "Arial",
                                bold: true,
                              }),
                            ],
                          }),
                        ],
                        borders: {
                          left: {
                            size: 1,
                            color: "FFFFFF",
                          },
                          right: {
                            size: 1,
                            color: "FFFFFF",
                          },
                          top: {
                            style: BorderStyle.SINGLE,
                            size: 12,
                            color: "396EC5",
                          },
                          bottom: {
                            size: 1,
                            color: "FFFFFF",
                          },
                        },
                      }),
                      new TableCell({
                        width: {
                          size: 3543,
                          type: WidthType.DXA,
                        },
                        children: [
                          new Paragraph({
                            children: [
                              new TextRun({
                                text: "124365, г.Москва, Зеленоград, ул.Заводская, 18, стр.9",
                                size: 14,
                                break: 1,
                              }),
                              new TextRun({
                                text: "тел.:(495) 748-0176, 748-0177, 530-8460, 8-800-200-00-14",
                                size: 14,
                                break: 1,
                              }),
                              new TextRun({
                                text: "факс:(495) 748-0178, 742-9525, e-mail: order@balloons.ru",
                                size: 14,
                                break: 1,
                              }),
                            ],
                          }),
                        ],
                        borders: {
                          left: {
                            size: 1,
                            color: "FFFFFF",
                          },
                          right: {
                            size: 1,
                            color: "FFFFFF",
                          },
                          top: {
                            style: BorderStyle.SINGLE,
                            size: 12,
                            color: "396EC5",
                          },
                          bottom: {
                            size: 1,
                            color: "FFFFFF",
                          },
                        },
                      }),
                      new TableCell({
                        width: {
                          size: 4110,
                          type: WidthType.DXA,
                        },
                        children: [
                          new Paragraph({
                            children: [
                              new TextRun({
                                text: "125871, г.Москва, A80 ГСП, Волоколамское шоссе, 4, МАИ, ГУК",
                                size: 14,
                                break: 1,
                              }),
                              new TextRun({
                                text: "м.Сокол, ул.Дубосековская, 4, тел.:(495) 785-4685",
                                size: 14,
                                break: 1,
                              }),
                              new TextRun({
                                text: "факс:(495) 785-4680, www.new.sharik.ru, www.zatey.ru",
                                size: 14,
                                break: 1,
                              }),
                            ],
                          }),
                        ],
                        borders: {
                          left: {
                            size: 1,
                            color: "FFFFFF",
                          },
                          right: {
                            size: 1,
                            color: "FFFFFF",
                          },
                          top: {
                            style: BorderStyle.SINGLE,
                            size: 12,
                            color: "396EC5",
                          },
                          bottom: {
                            size: 1,
                            color: "FFFFFF",
                          },
                        },
                      }),
                    ],
                  }),
                ]
              }),
            ],
          }),
        },
        children: [
          
        ]
      }],
    });

    Packer.toBlob(docx).then(blob => {
      saveAs(blob, "blank.docx");
      console.log("Document created successfully");
    });
  };

  return (
    <>
      <button onClick={generate}>Создать документ Word</button>
    </>
  );
};

export default TemplateBlank;
