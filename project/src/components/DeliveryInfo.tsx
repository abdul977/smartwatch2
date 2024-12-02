import React from 'react';
import { Building2, MapPin, CreditCard, Truck } from 'lucide-react';

export function DeliveryInfo() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Delivery Information</h2>
      <div className="bg-white p-4 rounded-lg space-y-3">
        <div className="flex items-center space-x-2">
          <Truck className="w-5 h-5 text-purple-600" />
          <span>Delivery Fee within Abuja: ₦3,000</span>
        </div>
        <div className="flex items-center space-x-2">
          <Building2 className="w-5 h-5 text-purple-600" />
          <span>Cash on Delivery Available in Abuja</span>
        </div>
        <div className="flex items-center space-x-2">
          <MapPin className="w-5 h-5 text-purple-600" />
          <span>Pickup Location: Near police signboard, Lugbe, Abuja</span>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg">
        <h3 className="font-semibold mb-2 flex items-center">
          <CreditCard className="w-5 h-5 text-purple-600 mr-2" />
          Payment Details
        </h3>
        <div className="space-y-2 text-sm">
          <p>Bank: PalmPay Limited</p>
          <p>Account No: 807 667 0253</p>
          <p>Name: Abdulmumin ADAVIRIKU Ibrahim</p>
        </div>
      </div>
    </div>
  );
}