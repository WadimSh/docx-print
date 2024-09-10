import { WidthType, AlignmentType, Paragraph, TextRun, Table, TableCell, TableRow, HeightRule, ImageRun } from "docx";
//import img from '../../assets/images/ac2837b44312a868d182302ecfd517bc.jpg';

const createTableCell = (data) => {
  const blob = fetch(
    //data && data.image ? `https://new.sharik.ru${data.image}` : 
    //img
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
          size: 2830,
          type: WidthType.DXA,
        },
        rows: [
          new TableRow({
            children: [
              new TableCell({
                width: {
                  size: 150 * 15, // Ширина изображения в пикселях * 15 (конвертация в twips)
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
                      //new ImageRun({
                      //  data: blob,
                      //  transformation: {
                      //    width: 150,
                      //    height: 150,
                      //  },
                      //}),
                    ],
                  }),
                ],
              }),
            ],
          }),
          new TableRow({
            height: { value: 300, rule: HeightRule.EXACT },
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
                    children: [
                      new TextRun({
                        text: data.code,
                        size: 24,
                        font: "Roboto Black",
                        bold: true,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          new TableRow({
            //height: { value: 1000, rule: HeightRule.EXACT },
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
                    children: [
                      new TextRun({
                        text: data.name,
                        size: 20,
                        font: "Roboto",
                      }),
                    ],
                  }),
                  new Paragraph(''),
                ],
              }),
            ],
          }),
          //new TableRow({
          //  height: { value: 260, rule: HeightRule.EXACT },
          //  children: [
          //    new TableCell({
          //      children: [
          //        new Paragraph({
          //          indent: { left: 20 },
          //          children: [
          //            new TextRun({
          //              text: data.origin.length > 10 ? 'Произв.:' : 'Производитель:',
          //              font: "Roboto",
          //              size: 18,
          //            }),
          //            new TextRun({
          //              text: " ",
          //            }),
          //            new TextRun({
          //              text: data.origin,
          //              font: "Roboto",
          //              size: 18,
          //              bold: true,
          //            }),
          //          ],
          //        }),
          //      ],
          //    }),
          //  ],
          //}),
        ]
      })
    ],
  })
};

export default createTableCell;