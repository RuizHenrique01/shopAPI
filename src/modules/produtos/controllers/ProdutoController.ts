import { Response, Request } from "express";
import CreateProdutoService from "../services/CreateProdutoService";
import DeleteProdutoService from "../services/DeleteProdutoService";
import ListProdutoService from "../services/ListProdutoService";
import ShowProdutoService from "../services/ShowProdutoService";
import UpdateProdutoService from "../services/UpdateProdutoService";

class ProdutoController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listProdutos = new ListProdutoService();

    const produtos = await listProdutos.execute();

    return response.json(produtos);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showProdutos = new ShowProdutoService();

    const produtos = await showProdutos.execute({ id });

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

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { nome, descricao, preco } = request.body;

    const updateProduto = new UpdateProdutoService();

    const produtos = await updateProduto.execute({
      id,
      nome,
      descricao,
      preco,
    });

    return response.json(produtos);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteProdutos = new DeleteProdutoService();

    await deleteProdutos.execute({ id });

    return response.json([]);
  }
}

export default ProdutoController;
