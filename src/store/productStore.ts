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

interface ProductStore {
  products: any[];
  cart: any[];

  addToCart: (product: any) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: allProducts,

  cart: [],

  addToCart: (product) =>
    set((state) => ({
      cart: [...state.cart, product],
    })),
}));