import { Router } from "express";
import ProdutoController from "../controllers/ProdutoController";
import { celebrate, Joi, Segments } from "celebrate";

const produtoRouter = Router();
const produtoController = new ProdutoController();

produtoRouter.get("/", produtoController.index);
produtoRouter.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      nome: Joi.string().required(),
      descricao: Joi.string(),
      preco: Joi.number().precision(2).required(),
    },
  }),
  produtoController.create
);

export default produtoRouter;
