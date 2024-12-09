export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
}

export interface CheckoutFormData {
  email: string;
  name: string;
  address: string;
  city: string;
  postalCode: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}