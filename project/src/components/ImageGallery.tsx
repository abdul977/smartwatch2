import React from 'react';

const productImages = [
  "https://sc04.alicdn.com/kf/H115b164f089a46448d86afd2603f1748h.jpg",
  "https://sc04.alicdn.com/kf/Haf2f09428d814ac6822e3d91ece160aa7.jpg",
  "https://sc04.alicdn.com/kf/Hc02e6635b9994af0a5e2a860d7baa8ect.jpg",
  "https://sc04.alicdn.com/kf/H417342e607d54f3bbc95d827eae01b18l.jpg"
];

interface ImageGalleryProps {
  selectedImage: number;
  setSelectedImage: (index: number) => void;
}

export function ImageGallery({ selectedImage, setSelectedImage }: ImageGalleryProps) {
  return (
    <div className="space-y-4">
      <div className="aspect-square rounded-2xl overflow-hidden bg-white">
        <img 
          src={productImages[selectedImage]} 
          alt={`ACE Series Smartwatch View ${selectedImage + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {productImages.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedImage(idx)}
            className={`aspect-square rounded-lg overflow-hidden ${
              selectedImage === idx ? 'ring-2 ring-purple-500' : ''
            }`}
          >
            <img 
              src={img} 
              alt={`Preview ${idx + 1}`} 
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}