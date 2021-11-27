import Compra from "../typeorm/entities/Compra";
import { CompraRepository } from "../typeorm/repositories/CompraRepository";
import { getCustomRepository } from "typeorm";
import AppError from "@shared/errors/AppError";
import { ProdutoRepository } from "@modules/produtos/typeorm/repositories/ProdutoRepository";

interface IProduto {
  id: string;
}

interface IRequest {
  id: string;
  produtos: IProduto[];
  tipo_pagamento: string;
  status: string;
}

class UpdateCompraService {
  public async execute({
    id,
    produtos,
    tipo_pagamento,
    status,
  }: IRequest): Promise<Compra> {
    const compraRepository = getCustomRepository(CompraRepository);
    const produtoRepository = getCustomRepository(ProdutoRepository);

    const compraExists = await compraRepository.findById(id);

    if (!compraExists) {
      throw new AppError("Compra não encontrada!");
    }

    const produtosExists = await produtoRepository.findAllByIds(produtos);

    if (!produtosExists.length) {
      throw new AppError("Não foi encontrado nenhum produto");
    }

    const produtosExistsIds = produtosExists.map((produto) => produto.id);

    const checkInexistentProdutos = produtos.filter(
      (produto) => !produtosExistsIds.includes(produto.id)
    );

    if (checkInexistentProdutos.length > 0) {
      throw new AppError(
        `Não foi encontrado o produto ${checkInexistentProdutos[0].id}`
      );
    }

    const serializedProdutos = produtos.map((produto) => ({
      produto_id: produto.id,
      compras_id: id,
      nome: produtosExists.filter((p) => p.id === produto.id)[0].nome,
      descricao: produtosExists.filter((p) => p.id === produto.id)[0].descricao,
      preco: produtosExists.filter((p) => p.id === produto.id)[0].preco,
    }));

    const total = serializedProdutos.reduce(
      (total, produto) => (total += Number(produto.preco)),
      0
    );

    const compra = await compraRepository.updateCompra(id, {
      tipo_pagamento,
      status,
      total,
      produtos: serializedProdutos,
    });

    return compra;
  }
}

export default UpdateCompraService;
