import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  "https://sc04.alicdn.com/kf/H115b164f089a46448d86afd2603f1748h.jpg",
  "https://sc04.alicdn.com/kf/Haf2f09428d814ac6822e3d91ece160aa7.jpg",
  "https://sc04.alicdn.com/kf/Hc02e6635b9994af0a5e2a860d7baa8ect.jpg",
  "https://sc04.alicdn.com/kf/H417342e607d54f3bbc95d827eae01b18l.jpg"
];

export function ProductGallery() {
  const [currentImage, setCurrentImage] = React.useState(0);

  return (
    <div className="relative aspect-square bg-gray-100">
      <img 
        src={images[currentImage]} 
        alt={`Product view ${currentImage + 1}`}
        className="w-full h-full object-cover"
      />
      
      <div className="absolute bottom-4 right-4 bg-white rounded-full px-3 py-1 text-sm">
        {currentImage + 1}/{images.length}
      </div>

      <button 
        onClick={() => setCurrentImage(i => i > 0 ? i - 1 : i)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
        disabled={currentImage === 0}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button 
        onClick={() => setCurrentImage(i => i < images.length - 1 ? i + 1 : i)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
        disabled={currentImage === images.length - 1}
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentImage(idx)}
            className={`w-2 h-2 rounded-full ${
              currentImage === idx ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}