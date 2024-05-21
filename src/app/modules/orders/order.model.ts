import { Schema, model } from "mongoose";
import { tOrder } from "./order.interface";

const OrderSchema = new Schema<tOrder>(
  {
    email: { type: String },
    productId: { type: String },
    price: { type: Number },
    quantity: { type: Number },
  },
  { id: false }
);

export const orderModel = model("order", OrderSchema);
