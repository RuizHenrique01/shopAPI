import Produto from "@modules/produtos/typeorm/entities/Produto";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import Compra from "./Compra";

@Entity("compras_produtos")
class ComprasProdutos {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @ManyToOne(() => Compra, (compra) => compra.compra_produtos)
  @JoinColumn({ name: "compras_id" })
  compra: Compra;

  @ManyToOne(() => Produto, (produto) => produto.compra_produtos)
  @JoinColumn({ name: "produto_id" })
  produto: Produto;

  @Column()
  compras_id: string;

  @Column()
  produto_id: string;

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

export default ComprasProdutos;
