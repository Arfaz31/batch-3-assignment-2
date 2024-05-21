import { tOrder } from "./order.interface";
import { orderModel } from "./order.model";

const createOrderIntoDB = async (orderData: tOrder) => {
  const result = await orderModel.create(orderData);
  return result;
};

export const orderServices = {
  createOrderIntoDB,
};
