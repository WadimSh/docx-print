const imageLink = (items) => {
  const images = items.find(item => item.is_base) || items[0];
  return images ? images.image : '';
};

export default imageLink;