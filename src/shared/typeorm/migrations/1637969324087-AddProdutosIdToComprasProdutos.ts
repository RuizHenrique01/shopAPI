import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class AddProdutosIdToComprasProdutos1637969324087
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "compras_produtos",
      new TableColumn({
        name: "produto_id",
        type: "uuid",
        isNullable: true,
      })
    );

    await queryRunner.createForeignKey(
      "compras_produtos",
      new TableForeignKey({
        name: "ComprasProdutosProduto",
        columnNames: ["produto_id"],
        referencedTableName: "produtos",
        referencedColumnNames: ["id"],
        onDelete: "SET NULL",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      "compras_produtos",
      "ComprasProdutosProduto"
    );
    await queryRunner.dropColumn("compras_produtos", "produto_id");
  }
}
