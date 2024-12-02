import React, { useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import { OrderModal } from './StickyOrderBar';

export function CTASection() {
  const [showOrderModal, setShowOrderModal] = useState(false);

  return (
    <div className="text-center py-12">
      <h2 className="text-4xl font-bold mb-6">
        Grab Your Series 9 Ultra Today!
      </h2>
      
      <div className="bg-white rounded-xl p-8 max-w-2xl mx-auto">
        <div className="text-5xl font-bold mb-4">₦33,950</div>
        <div className="text-2xl text-purple-600 mb-6">Black Friday Offer - 10% OFF</div>
        
        <button
          onClick={() => setShowOrderModal(true)}
          className="bg-purple-600 text-white py-4 px-8 rounded-full text-xl font-semibold inline-block hover:bg-purple-700 transition-colors mb-6"
        >
          Get Your Watch Now!
        </button>
        
        <div className="flex items-center justify-center text-sm text-gray-600">
          <ShieldCheck className="w-5 h-5 mr-2" />
          <span>14 Day Money Back Guarantee</span>
        </div>
      </div>

      {showOrderModal && (
        <OrderModal onClose={() => setShowOrderModal(false)} />
      )}
    </div>
  );
}