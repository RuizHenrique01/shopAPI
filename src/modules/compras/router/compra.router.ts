import { Router } from "express";
import CompraController from "../controllers/CompraController";

const compraRouter = Router();
const compraController = new CompraController();

compraRouter.post("/", compraController.create);

export default compraRouter;
