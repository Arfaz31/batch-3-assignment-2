import express, { Application, Request, Response } from "express";
import cors from "cors";
import { productRouters } from "./app/modules/products/product.route";
import { orderRouter } from "./app/modules/orders/order.route";

const app: Application = express();

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to E-commerce API Service");
});

app.use("/api", productRouters);
app.use("/api/orders", orderRouter);

app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

export default app;
