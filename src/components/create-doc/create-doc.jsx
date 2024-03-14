import { WidthType, BorderStyle, PageNumber, NumberFormat, AlignmentType, Table, TableRow, TableCell, Paragraph, TextRun, ImageRun } from 'docx';

export const table = new Table({
  width: {
    size: 11336,
    type: WidthType.DXA,
  },
  rows: [
    new TableRow({
      children: [
        new TableCell({
          width: {
            size: 2834,
            type: WidthType.DXA,
          },
          children: [
            new Paragraph({
              children: [
                
              ],
            }),
          ],
        }),
        new TableCell({
          width: {
            size: 2834,
            type: WidthType.DXA,
          },
          children: [
            new Paragraph({
              children: [
                
              ],
            }),
          ],
        }),
        new TableCell({
          width: {
            size: 2834,
            type: WidthType.DXA,
          },
          children: [
            new Paragraph({
              children: [
                
              ],
            }),
          ],
        }),
        new TableCell({
          width: {
            size: 2834,
            type: WidthType.DXA,
          },
          children: [
            new Paragraph({
              children: [
                
              ],
            }),
          ],
        }),
      ],
    }),
  ]
});