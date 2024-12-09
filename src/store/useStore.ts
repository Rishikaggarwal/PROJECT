import { create } from 'zustand';
import { CartItem, MenuItem, CheckoutFormData } from '../types';

interface StoreState {
  cart: CartItem[];
  searchQuery: string;
  selectedCategory: string;
  checkoutStep: number;
  checkoutData: Partial<CheckoutFormData>;
  addToCart: (item: MenuItem) => void;
  removeFromCart: (itemId: number) => void;
  updateQuantity: (itemId: number, quantity: number) => void;
  setSearchQuery: (query: string) => void;
  setSelectedCategory: (category: string) => void;
  clearCart: () => void;
  setCheckoutStep: (step: number) => void;
  updateCheckoutData: (data: Partial<CheckoutFormData>) => void;
  resetCheckout: () => void;
}

export const useStore = create<StoreState>((set) => ({
  cart: [],
  searchQuery: '',
  selectedCategory: '',
  checkoutStep: -1, // Changed to -1 to show menu initially
  checkoutData: {},
  
  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return {
          cart: state.cart.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          ),
        };
      }
      return { cart: [...state.cart, { ...item, quantity: 1 }] };
    }),

  removeFromCart: (itemId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== itemId),
    })),

  updateQuantity: (itemId, quantity) =>
    set((state) => ({
      cart: quantity === 0
        ? state.cart.filter((item) => item.id !== itemId)
        : state.cart.map((item) =>
            item.id === itemId ? { ...item, quantity } : item
          ),
    })),

  setSearchQuery: (query) => set({ searchQuery: query }),
  
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  
  clearCart: () => set({ cart: [] }),

  setCheckoutStep: (step) => set({ checkoutStep: step }),

  updateCheckoutData: (data) =>
    set((state) => ({
      checkoutData: { ...state.checkoutData, ...data },
    })),

  resetCheckout: () =>
    set({ checkoutStep: -1, checkoutData: {}, cart: [] }),
}));