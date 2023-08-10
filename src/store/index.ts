import create from "zustand";
import { PRODUCTS } from "../data";
export type Product = {
  id: string;
  title: string;
  type: string;
  variants: string;
  img: string;
  price: number;
};

export interface IProductStore {
  products: Product[];
}

const useStore = create<IProductStore>((_, get) => ({
  products: PRODUCTS,
  getProductById: (id: string) => get().products.find((p) => p.id === id),
}));

export default useStore;
