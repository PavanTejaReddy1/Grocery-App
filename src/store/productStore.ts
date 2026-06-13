import { create } from "zustand";
import {
  exclusiveOffers,
  bestSelling,
  groceryProducts,
} from "../data/products";

const allProducts = [
  ...exclusiveOffers,
  ...bestSelling,
  ...groceryProducts,
];

interface Product {
  id: number;
  name: string;
  quantity: string;
  price: string;
  image: string;
}

interface ProductStore {
  products: Product[];
}

export const useProductStore = create<ProductStore>(() => ({
  products: allProducts,
}));