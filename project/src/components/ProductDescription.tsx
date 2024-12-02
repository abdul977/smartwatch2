import React from 'react';
import { Shield, Battery, Smartphone, Headphones, Watch } from 'lucide-react';

export function ProductDescription() {
  const sections = [
    {
      icon: <Watch className="w-6 h-6" />,
      title: "Premium Smart Features",
      description: "Experience the next level of smart technology with our ACE Series watches. Featuring a crisp 480x320 TFT display and comprehensive health tracking.",
      highlight: "Available in multiple models: ACE-180, ACE-200, ACE-220, and ACE-240"
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Integrated Audio Solution",
      description: "Each watch comes with premium wireless earbuds, offering seamless integration for calls, music, and voice commands.",
      highlight: "Crystal clear audio quality with instant pairing"
    },
    {
      icon: <Battery className="w-6 h-6" />,
      title: "Long-lasting Battery",
      description: "Enjoy 5-10 days of battery life on a single charge, with magnetic fast charging for convenience.",
      highlight: "Smart power management system for extended use"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Universal Compatibility",
      description: "Works seamlessly with Windows Mobile, Linux, Android, and iOS devices for maximum flexibility.",
      highlight: "Easy setup with any smartphone"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Durability & Protection",
      description: "IPX-6 waterproof rating with premium alloy case and comfortable silica gel band.",
      highlight: "Built to last with quality materials"
    }
  ];

  return (
    <div className="space-y-8 my-8">
      <h2 className="text-2xl font-bold text-gray-900">Product Details</h2>
      
      <div className="space-y-6">
        {sections.map((section, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-purple-100 rounded-lg text-purple-600">
                {section.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {section.title}
                </h3>
                <p className="text-gray-600 mb-3">{section.description}</p>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3">
                  <p className="text-sm font-medium text-yellow-800">
                    {section.highlight}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}