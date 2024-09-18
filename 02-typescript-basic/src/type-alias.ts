// Type Alias untuk Any
// export type Category = {
//   id: string;
//   name: string;
// };

// export type Product = {
//   id: string;
//   name: string;
//   price: number;
//   category: Category;
// };

// Type Alias untuk Union Type
export type ID = string | number;

export type Category = {
  id: ID;
  name: string;
  description?: string;
};

export type Product = {
  id: ID;
  name: string;
  price: number;
  category: Category;
  description?: string;
};
