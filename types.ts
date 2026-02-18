export interface Service {
  id: string;
  title: string;
  description: string; // "Best for..."
  inclusions: string[];
  duration: string;
  priceStart: string;
}

export interface Review {
  id: string;
  author: string;
  text: string;
  source: 'Google' | 'Direct';
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface NavItem {
  label: string;
  path: string;
}