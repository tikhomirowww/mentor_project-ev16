export interface IProduct {
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  id?: string;
}
export interface ICategory{
  title: string;
  value: string;
}
export interface IProductsValues {
  products: IProduct[];
  oneProduct: IProduct | null;
  addProduct: (newProduct: IProduct) => Promise<void>;
  editProduct: (id: string, newProduct: IProduct) => Promise<void>;
  getOneProduct: (id: string) => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;
  getProducts: () => Promise<void>;
  getCategories: () => Promise<void>;
  categories: ICategory[];
  createCategory: (obj: ICategory)=> Promise<void>;
}

export type STATE = {
  products: IProduct[];
  oneProduct: IProduct | null;
  categories: ICategory[];
};

export type ACTION = {
  type: "GET_PRODUCTS" | "GET_ONE_PRODUCT" | "GET_CATEGORIES";
  payload: any;
};
