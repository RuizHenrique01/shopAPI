import Produto from "@modules/produtos/typeorm/entities/Produto";
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import ComprasProdutos from "./ComprasProdutos";

@Entity("compras")
class Compra {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @OneToMany(
    () => ComprasProdutos,
    (compra_produtos) => compra_produtos.compra,
    {
      cascade: true,
    }
  )
  compra_produtos: ComprasProdutos[];

  @Column()
  status: string;

  @Column()
  tipo_pagamento: string;

  @Column("decimal")
  total: number;

  @CreateDateColumn()
  data_criacao: Date;

  @DeleteDateColumn()
  deletedAt?: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default Compra;
