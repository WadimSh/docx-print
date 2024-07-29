const imageLink = (items) => {
  if (items.length !== 0) {
    let images = items.find(item => item.is_base);
    return images.image
  } else {
    return '';
  }
};

export default imageLink;