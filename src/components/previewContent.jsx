import React from 'react';

const defaultImg =
  'https://img.alicdn.com/tfs/TB14tSiKhTpK1RjSZFKXXa2wXXa-354-330.png';

export default (format, value) => {
  if (format !== 'image') {
    return null;
  }
  return (
    <img
      src={value || defaultImg}
      alt="图片地址错误"
      className="fr-preview-image"
    />
  );
};
