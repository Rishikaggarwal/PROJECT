import React from 'react';
import { useStore } from '../../store/useStore';
import { CreditCard } from 'lucide-react';

interface PaymentInfoProps {
  onNext: () => void;
  onBack: () => void;
}

export const PaymentInfo: React.FC<PaymentInfoProps> = ({ onNext, onBack }) => {
  const { checkoutData, updateCheckoutData } = useStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="bg-gray-50 p-4 rounded-lg mb-4">
        <div className="flex items-center gap-2 text-gray-600 mb-2">
          <CreditCard size={20} />
          <span className="font-medium">Payment Information</span>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Card Number</label>
            <input
              type="text"
              required
              pattern="[0-9]{16}"
              placeholder="1234 5678 9012 3456"
              value={checkoutData.cardNumber || ''}
              onChange={(e) => updateCheckoutData({ cardNumber: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
              <input
                type="text"
                required
                placeholder="MM/YY"
                pattern="(0[1-9]|1[0-2])\/([0-9]{2})"
                value={checkoutData.expiryDate || ''}
                onChange={(e) => updateCheckoutData({ expiryDate: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">CVV</label>
              <input
                type="text"
                required
                pattern="[0-9]{3,4}"
                placeholder="123"
                value={checkoutData.cvv || ''}
                onChange={(e) => updateCheckoutData({ cvv: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-4 pt-4">
        <button
          type="button"
          onClick={onBack}
          className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors"
        >
          Back
        </button>
        <button
          type="submit"
          className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Review Order
        </button>
      </div>
    </form>
  );
};