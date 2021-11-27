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

@EntityRepository(Compra)
export class CompraRepository extends Repository<Compra> {
  public async findById(id: string): Promise<Compra | undefined> {
    const compra = this.findOne(id, {
      relations: ["compra_produtos"],
    });

    return compra;
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
}
