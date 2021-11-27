import { EntityRepository, In, Repository } from "typeorm";
import Produto from "../entities/Produto";

interface IFindProdutos {
  id: string;
}

@EntityRepository(Produto)
export class ProdutoRepository extends Repository<Produto> {
  public async findByName(nome: string): Promise<Produto | undefined> {
    const produto = this.findOne({
      where: {
        nome,
      },
    });

    return produto;
  }

  public async findAllByIds(produtos: IFindProdutos[]): Promise<Produto[]> {
    const produtosIds = produtos.map((produto) => produto.id);

    const existsProduto = await this.find({
      where: {
        id: In(produtosIds),
      },
    });

    return existsProduto;
  }
}
