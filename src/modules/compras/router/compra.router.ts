import { Router } from "express";
import CompraController from "../controllers/CompraController";
import { celebrate, Joi, Segments } from "celebrate";

const compraRouter = Router();
const compraController = new CompraController();

compraRouter.get("/", compraController.index);

compraRouter.get(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  compraController.show
);

compraRouter.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      produtos: Joi.required(),
      tipo_pagamento: Joi.string().required(),
      status: Joi.string().required(),
    },
  }),
  compraController.create
);

compraRouter.put(
  "/:id",
  celebrate({
    [Segments.BODY]: {
      produtos: Joi.required(),
      tipo_pagamento: Joi.string().required(),
      status: Joi.string().required(),
    },
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  compraController.update
);

compraRouter.delete(
  "/:id",
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  compraController.delete
);

export default compraRouter;
