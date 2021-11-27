import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCompras1637967155519 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "compras",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "total",
            type: "decimal",
            precision: 10,
            scale: 2,
          },
          {
            name: "tipo_pagamento",
            type: "varchar",
          },
          {
            name: "status",
            type: "varchar",
          },
          {
            name: "data_criacao",
            type: "timestamp with time zone",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("compras");
  }
}
