import { tOrder } from "./order.interface";
import { orderModel } from "./order.model";

const createOrderIntoDB = async (orderData: tOrder) => {
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
