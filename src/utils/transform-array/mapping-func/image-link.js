const imageLink = (items) => {
  if (items.length !== 0) {
    let images = items.find(item => item.is_base === true);
    return images ? images.image : '';
  } else {
    return '';
  }
};

export default imageLink;