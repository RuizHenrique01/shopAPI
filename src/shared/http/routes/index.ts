import produtoRouter from "@modules/produtos/router/produto.router";
import { Router } from "express";

const routes = Router();

routes.use("/produtos", produtoRouter);

export default routes;
