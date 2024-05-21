import { Schema, model } from "mongoose";
import { tInventory, tProducts, tVariants } from "./product.interface";

const tVariantsSchema = new Schema<tVariants>(
  {
    type: { type: String },
    value: { type: String },
  },
  { _id: false }
);

const tInventorySchema = new Schema<tInventory>(
  {
    quantity: { type: Number },
    inStock: { type: Boolean },
  },
  { _id: false }
);

const productSchema = new Schema<tProducts>({
  name: { type: String },
  description: { type: String },
  price: { type: Number },
  category: { type: String },
  tags: { type: [String] },
  variants: { type: [tVariantsSchema] },
  inventory: { type: tInventorySchema },
});

export const productModel = model("product", productSchema);
