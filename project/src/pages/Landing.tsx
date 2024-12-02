import React from 'react';
import { ProductHeader } from '../components/ProductHeader';
import { ProductGallery } from '../components/ProductGallery';
import { PriceSection } from '../components/PriceSection';
import { ProductFeatures } from '../components/ProductFeatures';
import { Reviews } from '../components/Reviews';
import { FAQ } from '../components/FAQ';
import { StickyOrderBar } from '../components/StickyOrderBar';

export function Landing() {
  return (
    <div className="min-h-screen bg-gray-100 pb-24">
      <ProductHeader />
      
      <div className="max-w-lg mx-auto bg-white">
        <ProductGallery />
        <PriceSection />
        
        <div className="p-4 space-y-8">
          <ProductFeatures />
          <Reviews />
          <FAQ />
        </div>
      </div>
      
      <StickyOrderBar />
    </div>
  );
}