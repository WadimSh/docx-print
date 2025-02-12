import { WidthType, HeightRule, AlignmentType, Paragraph, Table, TableCell, TableRow, TextRun, ImageRun } from "docx";
import createBlockPrice from "./create-blockprice";
import img from '../../../assets/images/default-image.png';

const createImagePricesBox = (data) => {
  const blob = fetch(
    data && data.image ? `https://new.sharik.ru${data.image}` : img
  ).then(r => r.blob());
  
  return new TableCell({
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
        size: 1,
        color: "FFFFFF",
      },
      bottom: {
        size: 1,
        color: "FFFFFF",
      },
    },
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
                  size: 225 * 15, // Ширина изображения в пикселях * 15 (конвертация в twips)
                  type: WidthType.DXA,
                },
                borders: {
                  right: { size: 0, color: "FFFFFF" }, 
                },
                children: [
                  new Paragraph({
                    children: [
                      new ImageRun({
                        data: blob,
                        transformation: {
                          width: 225,
                          height: 225,
                        },
                      }),
                    ],
                  }),
                ],
              }),
              new TableCell({
                width: {
                  size: 11336 - 225 * 15,
                  type: WidthType.DXA,
                },
                borders: {
                  left: { size: 0, color: "FFFFFF" }, 
                },
                children: [
                  new Table({
                    width: {
                      size: 11336 - 225 * 15,
                      type: WidthType.DXA,
                    },
                    rows: [
                      new TableRow({
                        height: { value: 800, rule: HeightRule.EXACT },
                        children: [
                          new TableCell({
                            borders: {
                              left: { size: 0, color: "FFFFFF" }, 
                              right: { size: 0, color: "FFFFFF" }, 
                              top: { size: 0, color: "FFFFFF" }, 
                              bottom: { size: 0, color: "FFFFFF" }, 
                            },
                            children: [
                              new Paragraph({
                                indent: { left: 100 },
                                children: [
                                  new TextRun({
                                    text: data.company,
                                    size: 34,
                                    font: "Roboto",
                                  }),
                                ],
                              }),
                              new Paragraph({
                                alignment: AlignmentType.END,
                                indent: { right: 100 },
                                children: [
                                  new TextRun({
                                    text: data.code,
                                    size: 40,
                                    font: "Roboto",
                                    bold: true,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      new TableRow({
                        height: { value: 1350, rule: HeightRule.EXACT },
                        children: [
                          new TableCell({
                            children: [
                              new Paragraph({
                                indent: { right: 250, left: 100 },
                                children: [
                                  new TextRun({
                                    text: data.name,
                                    size: 40,
                                    font: "Roboto",
                                    bold: true,
                                  }),
                                  new TextRun({
                                    break: 1,
                                  }),
                                  new TextRun({
                                    text: `Произв.:  ${data.origin}`,
                                    size: 34,
                                    font: "Roboto",
                                  }),
                                ],
                              }),
                            ],
                            borders: {
                              left: { size: 0, color: "FFFFFF" }, 
                              right: { size: 0, color: "FFFFFF" }, 
                              top: { size: 0, color: "FFFFFF" }, 
                              bottom: { size: 0, color: "FFFFFF" }, 
                            },
                          }),
                        ],
                      }),
                      createBlockPrice(data),  
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    ],
  });
};

export default createImagePricesBox;