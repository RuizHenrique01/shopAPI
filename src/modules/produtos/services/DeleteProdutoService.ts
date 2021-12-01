import Produto from "../typeorm/entities/Produto";
import { ProdutoRepository } from "../typeorm/repositories/ProdutoRepository";
import { getCustomRepository } from "typeorm";
import AppError from "@shared/errors/AppError";

interface IRequest {
  id: string;
}

class DeleteProdutoService {
  public async execute({ id }: IRequest): Promise<void> {
    const produtoRepository = getCustomRepository(ProdutoRepository);

    const produto = await produtoRepository.findOne(id);

    if (!produto) {
      throw new AppError("Produto não encontrado!");
    }

    await produtoRepository
      .softRemove(produto)
      .catch((err) => console.log(err));
  }
}

export default DeleteProdutoService;
