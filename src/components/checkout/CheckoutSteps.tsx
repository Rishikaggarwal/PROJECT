import React from 'react';
import { Check, User, CreditCard, ShoppingBag } from 'lucide-react';

interface CheckoutStepsProps {
  currentStep: number;
}

export const CheckoutSteps: React.FC<CheckoutStepsProps> = ({ currentStep }) => {
  const steps = [
    { icon: User, label: 'Customer Info' },
    { icon: CreditCard, label: 'Payment' },
    { icon: ShoppingBag, label: 'Review' },
  ];

  return (
    <div className="flex justify-between mb-8">
      {steps.map((step, index) => {
        const Icon = step.icon;
        const isCompleted = currentStep > index;
        const isCurrent = currentStep === index;

        return (
          <div key={index} className="flex flex-col items-center flex-1">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                isCompleted
                  ? 'bg-green-500'
                  : isCurrent
                  ? 'bg-blue-500'
                  : 'bg-gray-200'
              } text-white mb-2`}
            >
              {isCompleted ? <Check size={20} /> : <Icon size={20} />}
            </div>
            <span className="text-sm text-gray-600">{step.label}</span>
          </div>
        );
      })}
    </div>
  );
};