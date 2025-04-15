import React, { useState } from 'react';
import Navigation from './Navigation';
import ImagePopup from './ImagePopup';

function Works() {
  const [popupImage, setPopupImage] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const showPopup = (imageSrc) => {
    setPopupImage(imageSrc);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <body className="works-page">
      <main>
        <div className="worksBody">
          <header>
            <h1 className="works">Portfolio Website Designs</h1>
          </header>
          <section>
            <div className="worksBox">
              <div className="worksPicBox1">
                <img 
                  src="Pics/GaryHome.jpg" 
                  alt="Gary's Diner website homepage" 
                  onClick={() => showPopup('Pics/GaryHome.jpg')} 
                />
              </div>
              <div className="worksPicBox2">
                <img 
                  src="Pics/GaryMenu.jpg" 
                  alt="Gary's Diner website menu page" 
                  onClick={() => showPopup('Pics/GaryMenu.jpg')} 
                />
              </div>
              <div className="worksPicBox3">
                <img 
                  src="Pics/NissanHome.jpg" 
                  alt="Nissan website homepage" 
                  onClick={() => showPopup('Pics/NissanHome.jpg')} 
                />
              </div>
              <div className="worksPicBox4">
                <img 
                  src="Pics/NissanMedia.jpg" 
                  alt="Nissan website Media page" 
                  onClick={() => showPopup('Pics/NissanMedia.jpg')} 
                />
              </div>
            </div>
          </section>
          <Navigation page="works" />
          <ImagePopup 
            image={popupImage} 
            isOpen={isPopupOpen} 
            onClose={closePopup} 
          />
        </div>
      </main>
    </body>
  );
}

export default Works;