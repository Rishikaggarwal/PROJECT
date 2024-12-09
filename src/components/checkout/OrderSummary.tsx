import React from 'react';
import { useStore } from '../../store/useStore';
import { Check } from 'lucide-react';

interface OrderSummaryProps {
  onBack: () => void;
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({ onBack }) => {
  const { cart, checkoutData, resetCheckout } = useStore();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePlaceOrder = () => {
    // In a real app, this would make an API call to process the order
    alert('Order placed successfully!');
    resetCheckout();
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="border-b pb-4">
          <h3 className="font-medium text-gray-900">Order Items</h3>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center mt-2">
              <span className="text-gray-600">
                {item.quantity}x {item.name}
              </span>
              <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="mt-4 pt-4 border-t">
            <div className="flex justify-between items-center font-medium">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="border-b pb-4">
          <h3 className="font-medium text-gray-900 mb-2">Delivery Details</h3>
          <div className="text-gray-600">
            <p>{checkoutData.name}</p>
            <p>{checkoutData.address}</p>
            <p>{checkoutData.city}, {checkoutData.postalCode}</p>
            <p>{checkoutData.email}</p>
          </div>
        </div>

        <div>
          <h3 className="font-medium text-gray-900 mb-2">Payment Method</h3>
          <div className="text-gray-600">
            <p>Card ending in {checkoutData.cardNumber?.slice(-4)}</p>
          </div>
        </div>
      </div>

      <div className="flex gap-4 pt-4">
        <button
          onClick={onBack}
          className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors"
        >
          Back
        </button>
        <button
          onClick={handlePlaceOrder}
          className="flex-1 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
        >
          <Check size={20} />
          Place Order
        </button>
      </div>
    </div>
  );
};