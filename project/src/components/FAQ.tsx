import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function FAQ() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const faqs = [
    {
      question: "What's the battery life of the ACE Series smartwatch?",
      answer: "The ACE Series smartwatch offers an impressive 5-10 days of battery life on a single charge, depending on usage patterns. With magnetic fast charging, you can quickly recharge your device when needed."
    },
    {
      question: "Is the smartwatch waterproof?",
      answer: "Yes, the ACE Series smartwatch has an IPX-6 water resistance rating, making it splash and sweat-proof. You can wear it while washing hands or during light rain, but it's not recommended for swimming or diving."
    },
    {
      question: "Does it work with both Android and iPhone?",
      answer: "Yes, the ACE Series smartwatch is compatible with both Android and iOS devices. It works seamlessly with most smartphones running Android 5.0+ or iOS 9.0+ through our dedicated app."
    },
    {
      question: "What health features does it include?",
      answer: "The watch includes comprehensive health monitoring features: heart rate tracking, sleep monitoring, blood pressure monitoring, step counting, calorie tracking, and sedentary reminders. It also offers multiple sport modes for activity tracking."
    },
    {
      question: "Do the included earbuds work independently?",
      answer: "Yes, the included wireless earbuds can be used independently of the watch. They feature Bluetooth 5.0 connectivity and can be paired directly with your smartphone for calls and music."
    },
    {
      question: "What's the warranty period?",
      answer: "We offer a 12-month warranty against manufacturing defects. Additionally, you get a 14-day money-back guarantee for peace of mind."
    },
    {
      question: "Can I receive notifications from social media apps?",
      answer: "Yes, the watch supports notifications from various apps including WhatsApp, Facebook, Instagram, Twitter, and other social media platforms. You can read messages directly on your watch."
    },
    {
      question: "How many watch faces are available?",
      answer: "The ACE Series comes with access to over 1000+ watch faces through our app. You can also customize watch faces with your own photos or choose from our regularly updated collection."
    },
    {
      question: "What's included in the package?",
      answer: "The package includes: 1x ACE Series Smartwatch, 1x Pair of Wireless Earbuds, 1x Magnetic Charging Cable, 1x User Manual, and a Premium Gift Box."
    },
    {
      question: "How long is the delivery time?",
      answer: "For Abuja locations, we offer same-day or next-day delivery with cash on delivery option. For other locations in Nigeria, delivery typically takes 2-4 business days with payment required before shipping."
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-xl my-8">
      <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="border rounded-lg overflow-hidden"
          >
            <button
              className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50"
              onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
            >
              <span className="font-medium text-gray-900">{faq.question}</span>
              {openQuestion === index ? (
                <ChevronUp className="w-5 h-5 text-purple-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              )}
            </button>
            
            {openQuestion === index && (
              <div className="p-4 bg-gray-50 border-t">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}