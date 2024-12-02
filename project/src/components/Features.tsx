import React from 'react';
import { Check } from 'lucide-react';

export function Features() {
  const features = [
    "Studio-grade health monitoring",
    "No Tech Skills Needed to Use!",
    "Premium build quality",
    "DoodleAI™ Watch Face Creator",
    "1000+ Watch Faces & Elements",
    "100% Cloud synced: Access anywhere",
    "EASY AND FUN TO USE"
  ];

  return (
    <div className="bg-purple-600 text-white rounded-3xl p-8 my-12">
      <div className="grid md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-3">
            <Check className="w-6 h-6 text-yellow-400" />
            <span className="text-lg">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}