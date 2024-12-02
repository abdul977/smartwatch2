import React from 'react';
import { Timer } from './Timer';
import { QuantitySelector } from './QuantitySelector';
import { useOrderStore } from '../store/orderStore';

export function PriceSection() {
  const { quantity, setQuantity } = useOrderStore();
  const price = 35000;
  const discount = 0.65; // 65% off
  const discountedPrice = price * (1 - discount);
  const savings = price - discountedPrice;

  return (
    <div className="bg-white p-4 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-2xl font-bold">₦{discountedPrice.toLocaleString()}</div>
          <div className="text-red-500">
            -{(discount * 100)}% | Save ₦{savings.toLocaleString()}
          </div>
        </div>
        <Timer />
      </div>

      <div className="text-sm text-gray-500">
        Tax excluded, add at checkout if applicable. Extra 1% off with coins
      </div>

      <div className="border-t pt-4">
        <QuantitySelector 
          quantity={quantity}
          onChange={setQuantity}
          max={1}
        />
      </div>
    </div>
  );
}