import express, { Application, Request, Response } from "express";
import cors from "cors";
import { productRouters } from "./app/modules/products/product.route";

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/api", productRouters);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
