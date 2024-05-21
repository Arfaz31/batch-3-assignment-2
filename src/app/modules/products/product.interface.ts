import { Model } from "mongoose";

export type tVariants = {
  type: string;
  value: string;
};

export type tInventory = {
  quantity: number;
  inStock: boolean;
};

export type tProducts = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: tVariants[];
  inventory: tInventory;
};

// export interface ProductStaticModel extends Model<tProducts> {
//   isProductExists(name: string): Promise<tProducts | null>;
// }
