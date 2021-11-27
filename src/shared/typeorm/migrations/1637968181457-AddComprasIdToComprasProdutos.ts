import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class AddComprasIdToComprasProdutos1637968181457
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "compras_produtos",
      new TableColumn({
        name: "compras_id",
        type: "uuid",
        isNullable: true,
      })
    );

    await queryRunner.createForeignKey(
      "compras_produtos",
      new TableForeignKey({
        name: "ComprasProdutosCompra",
        columnNames: ["compras_id"],
        referencedTableName: "compras",
        referencedColumnNames: ["id"],
        onDelete: "SET NULL",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      "compras_produtos",
      "ComprasProdutosCompra"
    );
    await queryRunner.dropColumn("compras_produtos", "compras_id");
  }
}
