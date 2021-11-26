import { Response, Request } from "express";
import CreateProdutoService from "../services/CreateProdutoService";
import ListProdutoService from "../services/ListProdutoService";

class ProdutoController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listProdutos = new ListProdutoService();

    const produtos = await listProdutos.execute();

    return response.json(produtos);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { nome, descricao, preco } = request.body;

    const createProduto = new CreateProdutoService();

    const produtos = await createProduto.execute({
      nome,
      descricao,
      preco,
    });

    return response.json(produtos);
  }
}

export default ProdutoController;
