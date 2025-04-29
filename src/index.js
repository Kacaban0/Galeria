import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

// Kategorie i zdjęcia
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

// Komponent pojedynczego obrazka
function Car({ src, onClick }) {
  return (
    <img
      src={src}
      alt="Car"
      onClick={() => onClick(src)}
      style={{
        width: '100px', // Miniatura
        margin: '10px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        cursor: 'pointer',
      }}
    />
  );
}

// Komponent powiększonego obrazka
function Modal({ src, onClose }) {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onClick={onClose}
    >
      <img
        src={src}
        alt="Expanded"
        style={{
          width: '300px',  // Powiększona szerokość
          height: '500px', // Powiększona wysokość
          borderRadius: '8px',
        }}
      />
    </div>
  );
}

// Komponent główny z wyborem kategorii
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

// Renderowanie do DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);

// Pomiar wydajności (opcjonalny)
reportWebVitals();
