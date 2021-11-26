import Produto from "../typeorm/entities/Produto";
import { ProdutoRepository } from "../typeorm/repositories/ProdutoRepository";
import { getCustomRepository } from "typeorm";
import AppError from "@shared/errors/AppError";

interface IRequest {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
}

class UpdateProdutoService {
  public async execute({
    id,
    nome,
    descricao,
    preco,
  }: IRequest): Promise<Produto> {
    const produtoRepository = getCustomRepository(ProdutoRepository);

    const produto = await produtoRepository.findOne(id);

    if (!produto) {
      throw new AppError("Produto não encontrado!");
    }

    const produtoExists = await produtoRepository.findByName(nome);

    if (produtoExists) {
      throw new AppError("Já existe um produto com esse nome!");
    }

    produto.nome = nome;
    produto.descricao = descricao;
    produto.preco = preco;

    await produtoRepository.save(produto);

    return produto;
  }
}

export default UpdateProdutoService;
