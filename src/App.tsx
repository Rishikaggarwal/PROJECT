import React, { Suspense, lazy } from 'react';
import { Utensils } from 'lucide-react';
import { SearchBar } from './components/SearchBar';
import { CategoryFilter } from './components/CategoryFilter';
import { useStore } from './store/useStore';

// Lazy loaded components
const MenuGrid = lazy(() => import('./components/MenuGrid').then(module => ({ default: module.MenuGrid })));
const Cart = lazy(() => import('./components/Cart').then(module => ({ default: module.Cart })));
const CheckoutForm = lazy(() => import('./components/checkout/CheckoutForm').then(module => ({ default: module.CheckoutForm })));

function App() {
  const { checkoutStep } = useStore();

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2">
            <Utensils className="text-blue-500" size={24} />
            <h1 className="text-2xl font-bold">FoodOrder</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <Suspense fallback={<div className="text-center">Loading...</div>}>
          {checkoutStep > -1 ? (
            <CheckoutForm />
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="space-y-6">
                  <SearchBar />
                  <CategoryFilter />
                  <MenuGrid />
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <div className="sticky top-8">
                  <Cart />
                </div>
              </div>
            </div>
          )}
        </Suspense>
      </main>
    </div>
  );
}

export default App;