import React from 'react';
import { useStore } from '../store/useStore';

const categories = [
  { id: '', name: 'All' },
  { id: 'pizza', name: 'Pizza' },
  { id: 'burger', name: 'Burgers' },
  { id: 'salad', name: 'Salads' },
  { id: 'pasta', name: 'Pasta' },
  { id: 'appetizer', name: 'Appetizers' },
];

export const CategoryFilter = () => {
  const { selectedCategory, setSelectedCategory } = useStore();

  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setSelectedCategory(category.id)}
          className={`px-4 py-2 rounded-full whitespace-nowrap ${
            selectedCategory === category.id
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};