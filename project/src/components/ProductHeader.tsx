import React from 'react';
import { Share2, ArrowLeft, Search } from 'lucide-react';

export function ProductHeader() {
  return (
    <div className="sticky top-0 z-50 bg-white">
      <div className="flex items-center justify-between p-4">
        <button className="p-2">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="flex space-x-4">
          <button className="p-2">
            <Search className="w-6 h-6" />
          </button>
          <button className="p-2">
            <Share2 className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}