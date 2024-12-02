import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useSwipe } from '../hooks/useSwipe';

interface ImageModalProps {
  images: { url: string; reviewer: string }[];
  currentIndex: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

export function ImageModal({ 
  images, 
  currentIndex, 
  onClose, 
  onPrevious, 
  onNext 
}: ImageModalProps) {
  const swipeHandlers = useSwipe(onNext, onPrevious);

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
      <div className="absolute top-4 right-4">
        <button
          onClick={onClose}
          className="text-white hover:text-gray-300 transition-colors"
        >
          <X className="w-8 h-8" />
        </button>
      </div>

      <button
        onClick={onPrevious}
        className="absolute left-4 text-white hover:text-gray-300 transition-colors"
        disabled={currentIndex === 0}
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      <button
        onClick={onNext}
        className="absolute right-4 text-white hover:text-gray-300 transition-colors"
        disabled={currentIndex === images.length - 1}
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      <div 
        className="w-full max-w-4xl px-4"
        {...swipeHandlers}
      >
        <div className="relative aspect-square">
          <img
            src={images[currentIndex].url}
            alt={`Review by ${images[currentIndex].reviewer}`}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="text-center mt-4 text-white">
          <p className="text-lg font-medium">Review by {images[currentIndex].reviewer}</p>
          <p className="text-sm text-gray-300">Image {currentIndex + 1} of {images.length}</p>
        </div>
      </div>
    </div>
  );
}