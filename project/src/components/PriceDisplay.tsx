import React from 'react';

interface PriceDisplayProps {
  originalPrice: number;
  discountPercentage: number;
}

export function PriceDisplay({ originalPrice, discountPercentage }: PriceDisplayProps) {
  const discountedPrice = originalPrice - (originalPrice * (discountPercentage / 100));

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">Smartwatch Series 9 Ultra</h1>
      <div className="mt-4 flex items-center space-x-4">
        <span className="text-2xl font-bold text-purple-600">₦{discountedPrice.toLocaleString()}</span>
        <span className="text-lg text-gray-500 line-through">₦{originalPrice.toLocaleString()}</span>
        <span className="px-2 py-1 bg-red-100 text-red-600 rounded-md text-sm font-medium">
          {discountPercentage}% OFF
        </span>
      </div>
    </div>
  );
}