import { WidthType, Paragraph, Table, TableCell, TableRow, TextRun, ImageRun } from "docx";


const createTableCell = (data) => {
  const blob = fetch(
    //"https://raw.githubusercontent.com/dolanmiu/docx/master/demo/images/cat.jpg"
    //`https://new.sharik.ru${data.image}`
    'https://new.sharik.ru/assets/images/no-image.svg'
  ).then(r => r.blob());

  //const QRCode = fetch(
  //  `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${data.name}`
  //).then(r => r.blob());
  

  return new TableCell({
    borders: {
      left: {
        size: 1,
        color: "000000",
      },
      right: {
        size: 1,
        color: "000000",
      },
      top: {
        size: 1,
        color: "000000",
      },
      bottom: {
        size: 1,
        color: "000000",
      },
    },
    children: [
      new Table({
        width: {
          size: 7919,
          type: WidthType.DXA,
        },
        rows: [
          new TableRow({
            children: [
              new TableCell({
                children: [
                  new Paragraph({
                    children: [
                    //  new ImageRun({
                    //    data: QRCode,
                    //    transformation: {
                    //      width: 100,
                    //      height: 100,
                    //    },
                    //  }),
                    new ImageRun({
                      data: blob,
                      transformation: {
                        width: 100,
                        height: 100,
                      },
                    }),
                    //  new TextRun({
                    //    text: data.price2,
                    //    size: 26,
                    //    bold: true,
                    //  }),
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

export default createTableCell;