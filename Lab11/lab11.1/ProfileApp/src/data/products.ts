export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    description: 'High-quality Bluetooth headphones with noise cancellation and 40-hour battery life. Perfect for travel and focus.',
    price: 199.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=300&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Smart Watch',
    description: 'Track your fitness, heart rate, and sleep. Water-resistant up to 50m with a stunning OLED display.',
    price: 299.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=300&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Running Shoes',
    description: 'Lightweight and breathable running shoes with superior cushioning for maximum comfort on long runs.',
    price: 129.99,
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=300&auto=format&fit=crop',
  },
  {
    id: '4',
    name: 'Coffee Maker',
    description: 'Start your morning with the perfect brew. Programmable timer and thermal carafe included.',
    price: 79.99,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1520970014086-2208d157c9e2?q=80&w=300&auto=format&fit=crop',
  },
  {
    id: '5',
    name: 'Leather Backpack',
    description: 'Stylish and durable genuine leather backpack with a padded sleeve for a 15-inch laptop.',
    price: 149.50,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1548036696-91629a7bb1e1?q=80&w=300&auto=format&fit=crop',
  }
];