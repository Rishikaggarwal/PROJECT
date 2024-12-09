import React from 'react';
import { Plus, Check } from 'lucide-react';
import { MenuItem as MenuItemType } from '../types';
import { useStore } from '../store/useStore';

interface MenuItemProps {
  item: MenuItemType;
}

export const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  const { addToCart, cart } = useStore();
  const isInCart = cart.some((cartItem) => cartItem.id === item.id);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative h-48">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-2 right-2">
          <span className="bg-white px-2 py-1 rounded-full text-sm font-semibold">
            ${item.price.toFixed(2)}
          </span>
        </div>
      </div>
      <div className="p-4">
        <div className="mb-3">
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <p className="text-gray-600 text-sm mt-1">{item.description}</p>
        </div>
        <button
          onClick={() => addToCart(item)}
          className={`w-full py-2 rounded-md flex items-center justify-center gap-2 transition-colors ${
            isInCart
              ? 'bg-green-500 hover:bg-green-600 text-white'
              : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
        >
          {isInCart ? (
            <>
              <Check size={20} />
              Added to Cart
            </>
          ) : (
            <>
              <Plus size={20} />
              Add to Cart
            </>
          )}
        </button>
      </div>
    </div>
  );
};