export interface Product {
  id: number;
  quantity: string; // 1kg, 500ml, 7pcs
  name: string;
  description: string;
  image: string;
  price: number;
  unit: string; // 1kg, 500ml, 7pcs
  categoryId: number;
  rating?: number;
  isFavourite?: boolean;
}