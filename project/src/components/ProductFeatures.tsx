import React from 'react';
import {
  Heart, Clock, Navigation, Music, Phone, Bell, 
  Calculator, Activity, Moon, Droplets, Scale,
  MapPin, MessageSquare, Smartphone, Shield
} from 'lucide-react';

export function ProductFeatures() {
  const featureGroups = [
    {
      title: "Health & Activity",
      features: [
        { icon: <Heart className="w-5 h-5" />, text: "Heart Rate Monitor" },
        { icon: <Moon className="w-5 h-5" />, text: "Sleep Tracking" },
        { icon: <Activity className="w-5 h-5" />, text: "Fitness Tracking" },
        { icon: <Droplets className="w-5 h-5" />, text: "Moisture Measurement" },
        { icon: <Scale className="w-5 h-5" />, text: "Calorie Counter" },
        { icon: <MapPin className="w-5 h-5" />, text: "Distance Tracking" }
      ]
    },
    {
      title: "Smart Features",
      features: [
        { icon: <Navigation className="w-5 h-5" />, text: "GPS Navigation" },
        { icon: <Music className="w-5 h-5" />, text: "Music Player" },
        { icon: <Phone className="w-5 h-5" />, text: "Voice Calls" },
        { icon: <MessageSquare className="w-5 h-5" />, text: "Social Media" },
        { icon: <Bell className="w-5 h-5" />, text: "Smart Notifications" },
        { icon: <Calculator className="w-5 h-5" />, text: "Calculator" }
      ]
    }
  ];

  const specs = [
    { icon: <Smartphone className="w-5 h-5" />, text: "480x320 TFT Display" },
    { icon: <Clock className="w-5 h-5" />, text: "5-10 Days Battery" },
    { icon: <Shield className="w-5 h-5" />, text: "IPX-6 Waterproof" }
  ];

  return (
    <div className="space-y-6">
      {featureGroups.map((group) => (
        <div key={group.title} className="border-t pt-4">
          <h2 className="text-xl font-semibold mb-4">{group.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {group.features.map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <div className="text-purple-600">{feature.icon}</div>
                <span className="text-sm text-gray-600">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="bg-gray-50 rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Technical Specifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {specs.map((spec, idx) => (
            <div key={idx} className="flex items-center space-x-2">
              <div className="text-purple-600">{spec.icon}</div>
              <span className="text-sm text-gray-600">{spec.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}