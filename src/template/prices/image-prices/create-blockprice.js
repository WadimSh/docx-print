import { AlignmentType, Paragraph, TextRun, TableCell, TableRow, HeightRule } from "docx";

const createBlockPrice = (data) => {
  const parts = data.cost.split(".");
  const whole = parts[0];
  const fraction = parts[1];
  if (data.multiplicity === 1) {
    return new TableRow({
      height: { value: 950, rule: HeightRule.EXACT },
      children: [
        new TableCell({
          children: [
            new Paragraph({
              alignment: AlignmentType.RIGHT,
              indent: { right: 100 },
              spacing: { line: 230 },
              children: [
                new TextRun({
                  text: whole,
                  size: 100,
                  font: "Roboto Black",
                  bold: true,
                  characterSpacing: -70,
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
    })
  } else {
    return new TableRow({
      height: { value: 950, rule: HeightRule.EXACT },
      children: [
        new TableCell({
          children: [
            new Paragraph({
              alignment: AlignmentType.RIGHT,
              indent: { right: 100 },
              children: [
                new TextRun({
                  text: "1шт - ",
                  size: 18,
                  font: "Roboto",
                }),
                new TextRun({
                  text: data.price,
                  size: 18,
                  font: "Roboto",
                  bold: true,
                }),
                new TextRun({
                  text: " ₽",
                  size: 16,
                  font: "Roboto",
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.RIGHT,
              indent: { right: 100 },
              spacing: { line: 190 },
              children: [
                new TextRun({
                  text: data.units,
                  size: 18,
                  font: "Roboto",
                }),
                new TextRun({
                  text: ".",
                  size: 18,
                }),
                new TextRun({
                  text: data.counts,
                  size: 18,
                  font: "Roboto",
                }),
                new TextRun({
                  text: "-",
                  size: 18,
                  font: "Roboto",
                }),
                new TextRun({
                  text: whole,
                  size: 80,
                  font: "Roboto Black",
                  bold: true,
                  characterSpacing: -40,
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
    })
  }
};

export default createBlockPrice;