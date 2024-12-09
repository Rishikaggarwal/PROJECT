import React from 'react';
import { useStore } from '../../store/useStore';
import { CheckoutSteps } from './CheckoutSteps';
import { CustomerInfo } from './CustomerInfo';
import { PaymentInfo } from './PaymentInfo';
import { OrderSummary } from './OrderSummary';

export const CheckoutForm = () => {
  const { checkoutStep, setCheckoutStep } = useStore();

  const renderStep = () => {
    switch (checkoutStep) {
      case 0:
        return <CustomerInfo onNext={() => setCheckoutStep(1)} />;
      case 1:
        return <PaymentInfo onNext={() => setCheckoutStep(2)} onBack={() => setCheckoutStep(0)} />;
      case 2:
        return <OrderSummary onBack={() => setCheckoutStep(1)} />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <CheckoutSteps currentStep={checkoutStep} />
      {renderStep()}
    </div>
  );
};