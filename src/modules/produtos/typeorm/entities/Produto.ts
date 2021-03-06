import ComprasProdutos from "@modules/compras/typeorm/entities/ComprasProdutos";
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("produtos")
class Produto {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @OneToMany(
    () => ComprasProdutos,
    (compra_produtos) => compra_produtos.produto
  )
  compra_produtos: ComprasProdutos[];

  @Column()
  nome: string;

  @Column()
  descricao: string;

  @Column("decimal")
  preco: number;

  @CreateDateColumn()
  data_criacao: Date;

  @UpdateDateColumn()
  data_atualizacao: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default Produto;
