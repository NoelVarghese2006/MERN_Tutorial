import { create } from "zustand";

// 1. Define your Product type
interface Product {
  name: string;
  price: string;
  image: string;
  // Add more fields as needed
}

// 2. Define the store shape
interface ProductStore {
  products: Product[];
  setProducts: (products: Product[]) => void;
  createProduct: (newProduct: Product) => Promise<{ success: boolean; message: string }>;
}

// 3. Create the store with types
export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  createProduct: async (newProduct: Product) => {
    if(!newProduct.name || !newProduct.image || !newProduct.price) {
        return {success:false, message: "Please fill in all fields."}
    }
    const res = await fetch("/api/products", {
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(newProduct)
    })
    const data = await res.json();
    set((state) => ({products:[...state.products, data.data]}))
    return {success:true, message: "Product created succesfully"}
  }
}));
