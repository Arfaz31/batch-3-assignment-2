import { Request, Response } from "express";
import { orderServices } from "./order.services";

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const result = await orderServices.createOrderIntoDB(orderData);
    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (error: any) {
    if (error.message === "Insufficient quantity available in inventory") {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    } else if (error.message === "Product not found") {
      res.status(404).json({
        success: false,
        message: error.message,
      });
    } else {
      res.status(500).json({
        success: false,
        message: "Something went wrong",
      });
    }
  }
};

const getAllOrder = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;

    const result = await orderServices.getAllOrderFromDB(email as string);
    if (email) {
      res.status(200).json({
        success: true,
        message: "Orders fetched successfully for user email!",
        data: result,
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Orders fetched successfully!",
        data: result,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "orders are not found",
      error: error,
    });
  }
};

export const orderController = {
  createOrder,
  getAllOrder,
};
