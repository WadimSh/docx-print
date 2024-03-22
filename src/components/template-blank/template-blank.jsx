import React from 'react';
import { Document, WidthType, BorderStyle, AlignmentType, Table, TableRow, TableCell, Packer, Paragraph, TextRun, Header, Footer, ImageRun } from 'docx';
import { saveAs } from 'file-saver';


import logo from '../../assets/images/logo.png'

const TemplateBlank = ({context}) => {
  

  async function generate() {
    const blob = await fetch(
      "https://cors-anywhere.herokuapp.com/https://new.sharik.ru/media/cache/bc/e1/bce16e37b3bfc3a3c27bb965997b52d6.jpg"
    ).then(r => r.blob());

    const doc = new Document({
      sections: [{
        properties: {
          page: {
              margin: {
                left: 1200,
              },
          },
        },
        headers: {
          default: new Header({
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
                              new ImageRun({
                                data: logo,
                                transformation: {
                                  width: 100,
                                  height: 28,
                                },
                              }),
                              new TextRun({
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
                          bottom: {
                            style: BorderStyle.SINGLE,
                            size: 12,
                            color: "396EC5",
                          },
                          top: {
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
                          bottom: {
                            style: BorderStyle.SINGLE,
                            size: 12,
                            color: "396EC5",
                          },
                          top: {
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
                          bottom: {
                            style: BorderStyle.SINGLE,
                            size: 12,
                            color: "396EC5",
                          },
                          top: {
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
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new ImageRun({
                data: blob,
                transformation: {
                  width: 100,
                  height: 100,
                },
              }),
              new TextRun({
                text: context,
              }),
            ],
          }),
        ]
      }],
    });

    Packer.toBlob(doc).then(blob => {
      saveAs(blob, "eut-blank.docx");
      console.log("Document created successfully");
    });
  };

  const handleDoc = () => {
    generate();
  }

  return (
    <button className="button" type="button" onClick={() => handleDoc()}>Создать документ</button>
  );
};

export default TemplateBlank;
