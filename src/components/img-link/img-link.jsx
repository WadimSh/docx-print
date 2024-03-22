const DownloadImage = () => {
  const loadImage = async (imageUrl) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const reader = new FileReader();
      
      return new Promise((resolve, reject) => {
        reader.onload = () => {
          resolve(reader.result);
        };
        
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    } catch (error) {
      console.error('Error loading image:', error);
      return null;
    }
  };
  
  // Вызов функции для загрузки изображения и сохранения в переменной
  const imageUrl = 'https://new.sharik.ru/media/cache/bc/e1/bce16e37b3bfc3a3c27bb965997b52d6.jpg';
  loadImage(imageUrl)
    .then(imageData => {
      if (imageData) {
        console.log('Image loaded successfully:', imageData);
        // Используйте переменную imageData для дальнейшего использования
      } else {
        console.log('Failed to load image');
      }
    });

}

export default DownloadImage;