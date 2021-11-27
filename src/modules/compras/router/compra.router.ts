import { Router } from "express";
import CompraController from "../controllers/CompraController";

const compraRouter = Router();
const compraController = new CompraController();

compraRouter.get("/", compraController.index);

compraRouter.get("/:id", compraController.show);

compraRouter.post("/", compraController.create);

export default compraRouter;
