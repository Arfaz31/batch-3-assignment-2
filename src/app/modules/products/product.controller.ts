import { Request, Response } from "express";
import { productServices } from "./product.services";
import productValidationSchema from "./product.validation";

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const zodValidation = productValidationSchema.parse(productData);
    const result = await productServices.creatProductIntoDB(zodValidation);

    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "something went wrong",
      error: error,
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;

    const result = await productServices.getAllProductsFromDB(searchTerm);
    if (searchTerm) {
      res.status(200).json({
        success: true,
        message: `Products matching search term '${searchTerm}' fetched successfully!`,
        data: result,
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Products fetched successfully!",
        data: result,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Products are not found",
      error: error,
    });
  }
};

const getSingleProducts = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productServices.getSingleProductsFromDB(productId);
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Product is not found",
      error: error,
    });
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const productData = req.body;

    const result = await productServices.updateDataIntoDB(
      productId,
      productData
    );
    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Product is not found",
      error: error,
    });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productServices.deleteDataIntoDB(productId);
    res.status(200).json({
      success: true,
      message: "Product deleted successfully!",
      data: "null",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Product is not found",
      error: error,
    });
  }
};

export const productController = {
  createProduct,
  getAllProducts,
  getSingleProducts,
  updateProduct,
  deleteProduct,
};
