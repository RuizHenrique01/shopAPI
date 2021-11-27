import { EntityRepository, Repository } from "typeorm";
import Compra from "../entities/Compra";

interface IProduto {
  produto_id: string;
  nome: string;
  descricao: string;
  preco: number;
}

interface IRequest {
  status: string;
  tipo_pagamento: string;
  total: number;
  produtos: IProduto[];
}

interface IProdutoUpdate {
  compras_id: string;
  produto_id: string;
  nome: string;
  descricao: string;
  preco: number;
}

interface IRequestUpdate {
  status: string;
  tipo_pagamento: string;
  total: number;
  produtos: IProdutoUpdate[];
}

@EntityRepository(Compra)
export class CompraRepository extends Repository<Compra> {
  public async findById(id: string): Promise<Compra | undefined> {
    const compra = await this.findOne(id, {
      relations: ["compra_produtos"],
    });

    return compra;
  }

  public async findCompras(): Promise<Compra[]> {
    const compras = await this.find({ relations: ["compra_produtos"] });

    return compras;
  }

  public async createCompra({
    status,
    tipo_pagamento,
    total,
    produtos,
  }: IRequest): Promise<Compra> {
    const compra = this.create({
      status,
      tipo_pagamento,
      total,
      compra_produtos: produtos,
    });

    await this.save(compra);

    return compra;
  }

  public async updateCompra(
    id: string,
    { status, tipo_pagamento, total, produtos }: IRequestUpdate
  ): Promise<Compra> {
    const newCompra = this.create({
      id,
      status,
      tipo_pagamento,
      total,
      compra_produtos: produtos,
    });

    console.log(newCompra);

    await this.save(newCompra).catch((err) => console.log(err));

    return newCompra;
  }
}
