import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { ReviewModal } from './ReviewModal';

interface ReviewImage {
  url: string;
  rating: number;
}

interface Review {
  id: string;
  author: string;
  date: string;
  rating: number;
  content: string;
  avatar: string;
  badge?: string;
}

const reviewImages: ReviewImage[] = [
  {
    url: "https://ae-pic-a1.aliexpress-media.com/kf/A986aa740920d4ced85444a238f36e5ca9.jpg_220x220.jpg_.webp",
    rating: 5.0
  },
  {
    url: "https://ae-pic-a1.aliexpress-media.com/kf/Acc52f3d0bdc84488895228ec75e3cdea7.jpg_220x220.jpg_.webp",
    rating: 5.0
  },
  {
    url: "https://ae-pic-a1.aliexpress-media.com/kf/A67867764a0bc421fb668523795ee3a8fE.jpg_220x220.jpg_.webp",
    rating: 5.0
  },
  {
    url: "http://store.muahib.com.ng/wp-content/uploads/2024/12/IMG20241201104027-1-scaled.jpg",
    rating: 5.0
  },
  {
    url: "http://store.muahib.com.ng/wp-content/uploads/2024/12/IMG20241201104004-scaled.jpg",
    rating: 5.0
  }
];

const reviews: Review[] = [
  {
    id: "1",
    author: "q***r",
    date: "18 Oct 2024",
    rating: 5,
    content: "The package arrived well protected and sealed. The truth the watch is beautiful, it works perfectly and the quality is excellent. Very satisfied with my purchase!",
    avatar: "https://ae01.alicdn.com/kf/S8d40b54a080f4dd4a69823f3667b6c89l/48x44MM-Original-IWO-W47-Pro-Smart-Watch-Men-Women-Bluetooth-Call-Sports-Fitness-Bracelet-VS-W37.jpg_50x50.jpg",
    badge: "SELECTED"
  },
  {
    id: "2",
    author: "A***z",
    date: "18 Oct 2024",
    rating: 5,
    content: "The clock came to me yesterday and arrived only ten days later. I am very grateful, the product is of excellent quality and works perfectly!",
    avatar: "https://ae01.alicdn.com/kf/S8d40b54a080f4dd4a69823f3667b6c89l/48x44MM-Original-IWO-W47-Pro-Smart-Watch-Men-Women-Bluetooth-Call-Sports-Fitness-Bracelet-VS-W37.jpg_50x50.jpg"
  },
  {
    id: "3",
    author: "John D.",
    date: "15 Oct 2024",
    rating: 5,
    content: "Amazing smartwatch! The battery life is incredible and all features work flawlessly. The build quality exceeds my expectations.",
    avatar: "https://ae01.alicdn.com/kf/S8d40b54a080f4dd4a69823f3667b6c89l/48x44MM-Original-IWO-W47-Pro-Smart-Watch-Men-Women-Bluetooth-Call-Sports-Fitness-Bracelet-VS-W37.jpg_50x50.jpg",
    badge: "SELECTED"
  },
  {
    id: "4",
    author: "Sarah M.",
    date: "12 Oct 2024",
    rating: 5,
    content: "Perfect fitness companion! The heart rate monitoring is accurate and the sleep tracking provides valuable insights. Highly recommended!",
    avatar: "https://ae01.alicdn.com/kf/S8d40b54a080f4dd4a69823f3667b6c89l/48x44MM-Original-IWO-W47-Pro-Smart-Watch-Men-Women-Bluetooth-Call-Sports-Fitness-Bracelet-VS-W37.jpg_50x50.jpg"
  },
  {
    id: "5",
    author: "Michael R.",
    date: "10 Oct 2024",
    rating: 5,
    content: "Great value for money! The watch looks premium and the features are comparable to much more expensive brands. Very satisfied!",
    avatar: "https://ae01.alicdn.com/kf/S8d40b54a080f4dd4a69823f3667b6c89l/48x44MM-Original-IWO-W47-Pro-Smart-Watch-Men-Women-Bluetooth-Call-Sports-Fitness-Bracelet-VS-W37.jpg_50x50.jpg"
  }
];

export function Reviews() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-white">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Review gallery</h2>
          <button 
            onClick={() => setShowModal(true)}
            className="flex items-center text-gray-600"
          >
            See All ({reviewImages.length}) <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-8">
          {reviewImages.slice(0, 3).map((image, index) => (
            <div 
              key={index}
              onClick={() => setShowModal(true)}
              className="relative aspect-square rounded-lg overflow-hidden cursor-pointer"
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
            </div>
          ))}
        </div>

        <div className="border-t pt-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Reviews</h2>
            <div className="flex items-center">
              <span className="bg-green-50 text-green-700 px-2 py-1 rounded-full text-sm mr-2">
                ✓ All from verified purchases
              </span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </div>

          <div className="flex items-baseline space-x-4 mb-4">
            <span className="text-4xl font-bold">5.0</span>
            <div className="flex text-yellow-400 text-xl">★★★★★</div>
            <span className="text-gray-500">{reviews.length} ratings</span>
          </div>

          <div className="space-y-6">
            {reviews.slice(0, 2).map((review) => (
              <div key={review.id} className="flex space-x-3">
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
        </div>
      </div>

      {showModal && (
        <ReviewModal
          images={reviewImages}
          reviews={reviews}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}