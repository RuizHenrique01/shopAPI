import Produto from "../typeorm/entities/Produto";
import { ProdutoRepository } from "../typeorm/repositories/ProdutoRepository";
import { getCustomRepository } from "typeorm";

class ListProdutoService {
  public async execute(): Promise<Produto[]> {
    const produtoRepository = getCustomRepository(ProdutoRepository);

    const produtos = await produtoRepository.find();

    return produtos;
  }
}

export default ListProdutoService;
