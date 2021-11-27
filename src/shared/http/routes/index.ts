import compraRouter from "@modules/compras/router/compra.router";
import produtoRouter from "@modules/produtos/router/produto.router";
import { Router } from "express";

const routes = Router();

routes.use("/produtos", produtoRouter);
routes.use("/compras", compraRouter);

export default routes;
