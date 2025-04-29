import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const categories = {
  malpy: [
    '/images/Maciek.png',
    '/images/Mateusz.png',
    '/images/Michał.png',
    '/images/Antoni.png',
    '/images/Bartek.png',
    '/images/Boleslaw.png',
    '/images/Szymon.png',
  ],
  ludzie: [
    '/images/matpat.png',
    '/images/gomulka.png',
    '/images/tete.png',
  ],
  zwierzeta: [
    '/images/lef.png',
    '/images/kot.png',
    '/images/niedzwiedz.jpg',
  ],
};

function Car({ src, onClick }) {
  return (
    <img
      src={src}
      alt="Car"
      onClick={() => onClick(src)}
      style={{
        width: '100px',
        margin: '10px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgb(0, 0, 0)',
        cursor: 'pointer',
      }}
    />
  );
}

function Modal({ src, onClose }) {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onClick={onClose}
    >
      <img
        src={src}
        alt="Powiększone"
        style={{
          width: '300px',  
          height: '500px',
          borderRadius: '8px',
        }}
      />
    </div>
  );
}

function Garage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const handleModalClose = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <h1>Kto żyje w moim garażu?</h1>

      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setSelectedCategory('malpy')}>Małpy</button>
        <button onClick={() => setSelectedCategory('ludzie')}>Ludzie</button>
        <button onClick={() => setSelectedCategory('zwierzeta')}>Zwierzęta</button>
      </div>

      {selectedCategory && (
        <div>
          <h2>{selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {categories[selectedCategory].map((src, index) => (
              <Car key={index} src={src} onClick={handleImageClick} />
            ))}
          </div>
        </div>
      )}

      {selectedImage && <Modal src={selectedImage} onClose={handleModalClose} />}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);

reportWebVitals();
