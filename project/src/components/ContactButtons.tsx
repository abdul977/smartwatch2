import React from 'react';
import { Phone, MessageSquare, Instagram } from 'lucide-react';

export function ContactButtons() {
  const whatsappMessage = encodeURIComponent("Hello! I'm interested in the ACE-240 smartwatch. Can you provide more details?");

  return (
    <>
      <div className="flex space-x-4">
        <a
          href={`https://wa.me/2348144493361?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-green-500 text-white py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-green-600 transition-colors"
        >
          <MessageSquare className="w-5 h-5" />
          <span>Chat on WhatsApp</span>
        </a>
        <a
          href="tel:+2348144493361"
          className="flex-1 bg-purple-600 text-white py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-purple-700 transition-colors"
        >
          <Phone className="w-5 h-5" />
          <span>Call Now</span>
        </a>
      </div>

      <div className="text-sm text-gray-600">
        <p className="mb-2">
          <strong>Note:</strong> Available in Abuja (Payment on delivery), Outside Abuja (Payment before delivery)
        </p>
        <div className="flex flex-col space-y-2">
          <p className="flex items-center space-x-2">
            <Instagram className="w-4 h-4" />
            <span>Follow us on Instagram @muahib_stores for updates and discounts</span>
          </p>
          <div className="flex space-x-4 text-xs">
            <a
              href="https://chat.whatsapp.com/EJo3AG9yz0TIHyQsc8sPR1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline"
            >
              Join WhatsApp Community
            </a>
            <a
              href="https://t.me/muahibstores"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Join Telegram Channel
            </a>
          </div>
        </div>
      </div>
    </>
  );
}