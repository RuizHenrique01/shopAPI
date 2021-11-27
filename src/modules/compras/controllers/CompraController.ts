import { Response, Request } from "express";
import CreateCompraService from "../services/CreateCompraService";

class CompraController {
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
}

export default CompraController;
