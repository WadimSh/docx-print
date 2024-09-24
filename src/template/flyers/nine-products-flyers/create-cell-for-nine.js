import { WidthType, AlignmentType, Paragraph, TextRun, Table, TableCell, TableRow, HeightRule, ImageRun } from "docx";
import img from '../../../assets/images/default-image.png';

const createCellForNine = (data) => {
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
          size: 3770,
          type: WidthType.DXA,
        },
        rows: [
          new TableRow({
            children: [
              new TableCell({
                width: {
                  size: 200 * 15, // Ширина изображения в пикселях * 15 (конвертация в twips)
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
                    children: [
                      new ImageRun({
                        data: blob,
                        transformation: {
                          width: 200,
                          height: 200,
                        },
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          new TableRow({
            height: { value: 400, rule: HeightRule.EXACT },
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
                    spacing: { before: 120 },
                    children: [
                      new TextRun({
                        text: data.code,
                        size: 24,
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
                    spacing: { before: 50 },
                    indent: { right: 150, left: 150 },
                    children: [
                      new TextRun({
                        text: data.name,
                        size: 22,
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

export default createCellForNine;