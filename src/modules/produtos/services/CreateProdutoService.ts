import Produto from "../typeorm/entities/Produto";
import { ProdutoRepository } from "../typeorm/repositories/ProdutoRepository";
import { getCustomRepository } from "typeorm";
import AppError from "@shared/errors/AppError";

interface IRequest {
  nome: string;
  descricao: string;
  preco: number;
}

class CreateProdutoService {
  public async execute({ nome, descricao, preco }: IRequest): Promise<Produto> {
    const produtoRepository = getCustomRepository(ProdutoRepository);

    const produtoExists = await produtoRepository.findByName(nome);

    if (produtoExists) {
      throw new AppError("Já existe um produto com esse nome!");
    }

    const produto = produtoRepository.create({
      nome,
      descricao,
      preco,
    });

    await produtoRepository.save(produto);

    return produto;
  }
}

export default CreateProdutoService;
