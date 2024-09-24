import { WidthType, AlignmentType, Paragraph, TextRun, Table, TableCell, TableRow, HeightRule, ImageRun } from "docx";
import img from '../../../assets/images/default-image.png';

const createCellForOne = (data) => {
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
          size: 11320,
          type: WidthType.DXA,
        },
        rows: [
          new TableRow({
            children: [
              new TableCell({
                width: {
                  size: 700 * 15, // Ширина изображения в пикселях * 15 (конвертация в twips)
                  type: WidthType.DXA,
                },
                borders: {
                  left: { size: 0, color: "FFFFFF" },
                  right: { size: 0, color: "FFFFFF" }, 
                  top: { size: 0, color: "FFFFFF" },
                  bottom: { size: 0, color: "FFFFFF" },
                },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    spacing: { before: 700 },
                    children: [
                      new ImageRun({
                        data: blob,
                        transformation: {
                          width: 700,
                          height: 700,
                        },
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          new TableRow({
            height: { value: 700, rule: HeightRule.EXACT },
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
                    alignment: AlignmentType.CENTER,
                    spacing: { before: 200 },
                    children: [
                      new TextRun({
                        text: data.code,
                        size: 48,
                        font: "Roboto Black",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
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
                    alignment: AlignmentType.CENTER,
                    spacing: { before: 150 },
                    indent: { right: 300, left: 300 },
                    children: [
                      new TextRun({
                        text: data.name,
                        size: 44,
                        font: "Roboto",
                      }),
                    ],
                  }),
                  new Paragraph(''),
                ],
              }),
            ],
          }),
        ]
      })
    ],
  })
};

export default createCellForOne;