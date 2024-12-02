import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ReviewModalProps {
  onClose: () => void;
  images: ReviewImage[];
  reviews: Review[];
}

export function ReviewModal({ onClose, images, reviews }: ReviewModalProps) {
  const [activeTab, setActiveTab] = React.useState<'gallery' | 'reviews'>('gallery');
  const [selectedImage, setSelectedImage] = React.useState<number | null>(null);

  return (
    <div className="fixed inset-0 bg-black/50 z-50 overflow-y-auto">
      <div className="min-h-screen px-4 py-8">
        <div className="relative max-w-2xl mx-auto bg-white rounded-xl">
          <div className="sticky top-0 flex items-center justify-between p-4 border-b bg-white rounded-t-xl">
            <div className="flex space-x-4">
              <button
                onClick={() => setActiveTab('gallery')}
                className={`px-4 py-2 rounded-full ${
                  activeTab === 'gallery' ? 'bg-gray-100' : ''
                }`}
              >
                Gallery
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`px-4 py-2 rounded-full ${
                  activeTab === 'reviews' ? 'bg-gray-100' : ''
                }`}
              >
                Reviews
              </button>
            </div>
            <button onClick={onClose}>
              <X className="w-6 h-6" />
            </button>
          </div>

          {selectedImage !== null && (
            <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white"
              >
                <X className="w-6 h-6" />
              </button>
              
              <button
                onClick={() => setSelectedImage(i => i > 0 ? i - 1 : i)}
                className="absolute left-4 text-white"
                disabled={selectedImage === 0}
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <img
                src={images[selectedImage].url}
                alt={`Review image ${selectedImage + 1}`}
                className="max-h-screen max-w-full object-contain"
              />

              <button
                onClick={() => setSelectedImage(i => i < images.length - 1 ? i + 1 : i)}
                className="absolute right-4 text-white"
                disabled={selectedImage === images.length - 1}
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>
          )}

          <div className="p-4">
            {activeTab === 'gallery' ? (
              <div className="grid grid-cols-2 gap-4">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className="relative aspect-square rounded-lg overflow-hidden"
                  >
                    <img 
                      src={image.url} 
                      alt={`Review ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 left-2 flex items-center bg-black/50 rounded-full px-2 py-1">
                      <span className="text-yellow-400 text-lg mr-1">★</span>
                      <span className="text-white">{image.rating.toFixed(1)}</span>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="flex space-x-3 pb-6 border-b last:border-0">
                    <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-100">
                      {review.avatar ? (
                        <img 
                          src={review.avatar} 
                          alt={review.author}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex text-yellow-400 mb-1">★★★★★</div>
                          <p className="text-gray-900 mb-1">{review.content}</p>
                          <div className="text-gray-500 text-sm">
                            {review.author}, {review.date}
                          </div>
                        </div>
                        {review.badge && (
                          <div className="ml-4">
                            <img 
                              src="https://ae01.alicdn.com/kf/S31f6384c2b064857b58b6994ea5e1bd5Y.png"
                              alt="Selected review badge"
                              className="w-16 h-16 object-contain"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}