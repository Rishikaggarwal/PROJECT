import React from 'react';
import { MenuItem as MenuItemComponent } from './MenuItem';
import { menuItems } from '../data/menuItems';
import { useStore } from '../store/useStore';

export const MenuGrid = () => {
  const { searchQuery, selectedCategory } = useStore();

  const filteredItems = menuItems.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredItems.map((item) => (
        <MenuItemComponent key={item.id} item={item} />
      ))}
    </div>
  );
};