export interface Review {
  id: string;
  author: string;
  date: string;
  content: string;
  rating: number;
}

export interface PricingPackage {
  id: string;
  name: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
  description?: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  category: 'wedding' | 'engagement' | 'portraits';
  span?: string; // Tailwind class for grid span
}