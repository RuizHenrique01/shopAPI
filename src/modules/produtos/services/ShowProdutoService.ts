import Produto from "../typeorm/entities/Produto";
import { ProdutoRepository } from "../typeorm/repositories/ProdutoRepository";
import { getCustomRepository } from "typeorm";
import AppError from "@shared/errors/AppError";

interface IRequest {
  id: string;
}

class ShowProdutoService {
  public async execute({ id }: IRequest): Promise<Produto> {
    const produtoRepository = getCustomRepository(ProdutoRepository);

    const produto = await produtoRepository.findOne(id);

    if (!produto) {
      throw new AppError("Produto não encontrado!");
    }

    return produto;
  }
}

export default ShowProdutoService;
