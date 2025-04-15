import React from 'react';

function ImagePopup({ image, isOpen, onClose }) {
  if (!isOpen) return null;
  
  return (
    <div id="image-popup" className="popup" style={{ display: 'flex' }} onClick={onClose}>
      <img id="popup-img" className="popup-img" src={image} alt="Zoomed Image" />
    </div>
  );
}

export default ImagePopup;