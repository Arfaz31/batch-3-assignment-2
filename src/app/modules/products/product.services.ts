import { tProducts } from "./product.interface";
import { productModel } from "./product.model";

const creatProductIntoDB = async (productData: tProducts) => {
  const result = await productModel.create(productData);
  return result;
};

const getAllProductsFromDB = async (searchTerm: any) => {
  let filter = {};
  if (searchTerm) {
    filter = { name: { $regex: searchTerm, $options: "i" } };
  }

  const result = await productModel.find(filter);
  return result;
};

const getSingleProductsFromDB = async (id: string) => {
  const result = await productModel.findById(id);
  return result;
};

const updateDataIntoDB = async (id: string, productData: tProducts) => {
  const result = await productModel.findOneAndUpdate({ _id: id }, productData, {
    new: true,
    upsert: true,
    runValidators: true,
  });
  return result;
};

const deleteDataIntoDB = async (id: string) => {
  const result = await productModel.findOneAndDelete({ _id: id });
  return result;
};

export const productServices = {
  creatProductIntoDB,
  getAllProductsFromDB,
  getSingleProductsFromDB,
  updateDataIntoDB,
  deleteDataIntoDB,
};
