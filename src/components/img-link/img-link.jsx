import React from 'react';

const DownloadImage = () => {
  const downloadImage = () => {
    const imageUrl = 'https://new.sharik.ru/media/cache/bc/e1/bce16e37b3bfc3a3c27bb965997b52d6.jpg'; // замените ссылку на нужную
    fetch(imageUrl, {
      method: 'GET',
      headers: {"Content-Type": "application/json",
        "Content-Disposition": "attachment"
      },
      mode: 'no-cors',
    })
    .then(response => response.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'bce16e37b3bfc3a3c27bb965997b52d6.jpg');
      link.click();
    });
  };
  const file = downloadImage();
  console.log(file)
    return (
      <a href="#" download="bce16e37b3bfc3a3c27bb965997b52d6.jpg" onClick={downloadImage}>
        <button>
Скачать изображение
</button>
</a>
    );
  
}

export default DownloadImage;