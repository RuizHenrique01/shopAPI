import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProducts1637940306366 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "produtos",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "nome",
            type: "varchar",
          },
          {
            name: "descricao",
            type: "varchar",
          },
          {
            name: "preco",
            type: "decimal",
            precision: 10,
            scale: 2,
          },
          {
            name: "data_criacao",
            type: "timestamp with time zone",
            default: "now()",
          },
          {
            name: "data_atualizacao",
            type: "timestamp with time zone",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("produtos");
  }
}
