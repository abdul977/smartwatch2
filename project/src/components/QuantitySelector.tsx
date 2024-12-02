import React from 'react';
import { Minus, Plus } from 'lucide-react';

interface QuantitySelectorProps {
  quantity: number;
  onChange: (quantity: number) => void;
  max?: number;
}

export function QuantitySelector({ quantity, onChange, max = 1 }: QuantitySelectorProps) {
  const decrease = () => {
    if (quantity > 1) {
      onChange(quantity - 1);
    }
  };

  const increase = () => {
    if (quantity < max) {
      onChange(quantity + 1);
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <div className="text-lg font-semibold">Qty</div>
      <div className="flex items-center border rounded-full overflow-hidden">
        <button 
          onClick={decrease}
          disabled={quantity <= 1}
          className="px-4 py-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Minus className="w-4 h-4" />
        </button>
        <span className="px-4 min-w-[40px] text-center">{quantity}</span>
        <button 
          onClick={increase}
          disabled={quantity >= max}
          className="px-4 py-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
      <div className="text-sm text-gray-500">Max. {max} pcs/shopper</div>
    </div>
  );
}