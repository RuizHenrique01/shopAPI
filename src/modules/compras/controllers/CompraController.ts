import { Response, Request } from "express";
import CreateCompraService from "../services/CreateCompraService";
import ListCompraService from "../services/ListCompraService";
import ShowCompraService from "../services/ShowCompraService";

class CompraController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listCompra = new ListCompraService();

    const compras = await listCompra.execute();

    return response.json(compras);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { produtos, tipo_pagamento, status } = request.body;

    const createCompra = new CreateCompraService();

    const compra = await createCompra.execute({
      produtos,
      tipo_pagamento,
      status,
    });

    return response.json(compra);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showCompra = new ShowCompraService();

    const compra = await showCompra.execute({ id });

    return response.json(compra);
  }
}

export default CompraController;
