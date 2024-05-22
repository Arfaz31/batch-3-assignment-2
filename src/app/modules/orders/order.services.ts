import { productModel } from "../products/product.model";
import { tOrder } from "./order.interface";
import { orderModel } from "./order.model";

const createOrderIntoDB = async (orderData: tOrder) => {
  const { productId, quantity } = orderData;

  const product = await productModel.findById(productId);

  if (!product) {
    throw new Error("Product not found");
  }
  if (product.inventory.quantity < quantity) {
    throw new Error("Insufficient quantity available in inventory");
  }

  product.inventory.quantity -= quantity;

  if (product.inventory.quantity === 0) {
    product.inventory.inStock = false;
  } else {
    product.inventory.inStock = true;
  }

  await product.save();

  const result = await orderModel.create(orderData);
  return result;
};

const getAllOrderFromDB = async (email: string) => {
  let filter = {};
  if (email) {
    filter = { email: { $regex: email, $options: "i" } };
  }

  const result = await orderModel.find(filter);
  return result;
};

export const orderServices = {
  createOrderIntoDB,
  getAllOrderFromDB,
};
