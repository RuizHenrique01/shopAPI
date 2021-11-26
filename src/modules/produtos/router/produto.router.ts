import { Router } from "express";
import ProdutoController from "../controllers/ProdutoController";

const produtoRouter = Router();
const produtoController = new ProdutoController();

produtoRouter.get("/", produtoController.index);
produtoRouter.post("/", produtoController.create);

export default produtoRouter;
