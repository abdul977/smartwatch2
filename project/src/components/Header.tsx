import React from 'react';
import { Watch } from 'lucide-react';

export function Header() {
  return (
    <div className="text-center py-12 relative">
      <div className="absolute top-0 left-0 transform -rotate-12">
        <div className="bg-black text-white p-4 rounded-lg shadow-lg">
          <span className="text-2xl font-bold">BLACK FRIDAY</span>
        </div>
      </div>
      
      <h1 className="text-5xl font-bold mb-6 text-gray-900">
        Breathtaking Smart Watch
        <span className="block text-4xl mt-2">Series 9 Ultra</span>
      </h1>
      
      <div className="bg-purple-600 text-white py-3 px-6 rounded-full inline-block mb-8">
        <p className="text-xl">GUARANTEE You'll Be Amazed by the Features!</p>
      </div>

      <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-xl">
        <div className="flex items-center justify-center space-x-4">
          <Watch className="w-16 h-16 text-purple-600" />
          <div className="text-left">
            <p className="text-3xl font-bold text-gray-900">₦33,950</p>
            <p className="text-lg text-gray-600 line-through">₦35,500</p>
          </div>
        </div>
      </div>
    </div>
  );
}