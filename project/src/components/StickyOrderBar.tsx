import React, { useState } from 'react';
import { MessageSquare, Users, ExternalLink } from 'lucide-react';

// Export the OrderModal component
export function OrderModal({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    orderId: generateOrderId(),
    name: '',
    phone: '',
    address: '',
    model: 'ACE-240',
    buyingToday: 'yes',
    deliveryDate: '',
    paymentMethod: 'cash',
    specialRequests: ''
  });

  const [step, setStep] = useState(1);
  const discountedPrice = formData.buyingToday === 'yes' ? 33950 : 35500;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `🛍️ New Order #${formData.orderId}!\n
👤 Customer Details:
- Name: ${formData.name}
- Phone: ${formData.phone}
- Address: ${formData.address}

📱 Order Details:
- Model: ${formData.model}
- Buying Today: ${formData.buyingToday}
- Delivery Date: ${formData.deliveryDate || 'Not specified'}
- Payment Method: ${formData.paymentMethod}
- Price: ₦${discountedPrice.toLocaleString()}

📝 Special Requests:
${formData.specialRequests || 'None'}`;

    window.open(`https://wa.me/2348144493361?text=${encodeURIComponent(message)}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold">Complete Your Order</h3>
          <span className="text-sm text-purple-600 font-medium">Order ID: {formData.orderId}</span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {step === 1 && (
            <>
              <div>
                <label className="block text-sm font-medium mb-1">Select Model</label>
                <select
                  className="w-full rounded-lg border p-2"
                  value={formData.model}
                  onChange={e => setFormData({...formData, model: e.target.value})}
                >
                  <option value="ACE-180">ACE-180 Smart Watch</option>
                  <option value="ACE-200">ACE-200 Smart Watch</option>
                  <option value="ACE-220">ACE-220 Smart Watch</option>
                  <option value="ACE-240">ACE-240 Smart Watch (Premium)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Are you buying today?</label>
                <select
                  className="w-full rounded-lg border p-2"
                  value={formData.buyingToday}
                  onChange={e => setFormData({...formData, buyingToday: e.target.value})}
                >
                  <option value="yes">Yes - Get 10% Discount! (₦33,950)</option>
                  <option value="no">No - Regular Price (₦35,500)</option>
                </select>
              </div>

              {formData.buyingToday === 'yes' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-green-700 text-sm">
                    🎉 Congratulations! You qualify for our special 10% discount.
                  </p>
                </div>
              )}

              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
              >
                Continue
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <div>
                <label className="block text-sm font-medium mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  className="w-full rounded-lg border p-2"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Phone Number</label>
                <input
                  type="tel"
                  required
                  className="w-full rounded-lg border p-2"
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Delivery Address</label>
                <textarea
                  required
                  className="w-full rounded-lg border p-2"
                  rows={3}
                  value={formData.address}
                  onChange={e => setFormData({...formData, address: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Preferred Delivery Date</label>
                <input
                  type="date"
                  className="w-full rounded-lg border p-2"
                  min={new Date().toISOString().split('T')[0]}
                  value={formData.deliveryDate}
                  onChange={e => setFormData({...formData, deliveryDate: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Payment Method</label>
                <select
                  className="w-full rounded-lg border p-2"
                  value={formData.paymentMethod}
                  onChange={e => setFormData({...formData, paymentMethod: e.target.value})}
                >
                  <option value="cash">Cash on Delivery (Abuja Only)</option>
                  <option value="transfer">Bank Transfer</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Special Requests (Optional)</label>
                <textarea
                  className="w-full rounded-lg border p-2"
                  rows={2}
                  value={formData.specialRequests}
                  onChange={e => setFormData({...formData, specialRequests: e.target.value})}
                  placeholder="Any special requirements or preferences?"
                />
              </div>
              
              <div className="flex space-x-4 pt-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 px-4 py-2 border rounded-lg hover:bg-gray-50"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
                >
                  Complete Order
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

function generateOrderId() {
  const timestamp = Date.now().toString(36);
  const randomStr = Math.random().toString(36).substring(2, 7);
  return `ACE-${timestamp}-${randomStr}`.toUpperCase();
}

export function StickyOrderBar() {
  const [showOrderModal, setShowOrderModal] = useState(false);

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <a
              href="https://chat.whatsapp.com/EJo3AG9yz0TIHyQsc8sPR1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-green-600 hover:text-green-700 group"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Join WhatsApp Group</span>
              <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="https://t.me/muahibstores"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-blue-500 hover:text-blue-600 group"
            >
              <Users className="w-5 h-5" />
              <span>Join Telegram Group</span>
              <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
          
          <button
            onClick={() => setShowOrderModal(true)}
            className="bg-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-700 transition-colors"
          >
            Order Now - ₦33,950
          </button>
        </div>
      </div>

      {showOrderModal && (
        <OrderModal onClose={() => setShowOrderModal(false)} />
      )}
    </>
  );
}