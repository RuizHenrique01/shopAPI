import { Router } from "express";
import CompraController from "../controllers/CompraController";

const compraRouter = Router();
const compraController = new CompraController();

compraRouter.get("/", compraController.index);

compraRouter.post("/", compraController.create);

export default compraRouter;
