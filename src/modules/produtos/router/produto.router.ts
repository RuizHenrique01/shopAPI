import { Router } from "express";
import ProdutoController from "../controllers/ProdutoController";
import { celebrate, Joi, Segments } from "celebrate";

const produtoRouter = Router();
const produtoController = new ProdutoController();

produtoRouter.get("/", produtoController.index);

produtoRouter.get(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  produtoController.show
);

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

produtoRouter.put(
  "/:id",
  celebrate({
    [Segments.BODY]: {
      nome: Joi.string().required(),
      descricao: Joi.string(),
      preco: Joi.number().precision(2).required(),
    },
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  produtoController.update
);

produtoRouter.delete(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  produtoController.delete
);

export default produtoRouter;
