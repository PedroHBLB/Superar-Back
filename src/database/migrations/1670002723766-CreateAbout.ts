import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateAbout1669901133982 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: "about",
            columns: [
              {
                name: "id",
                type: "uuid",
                isPrimary: true,
              },
              {
                name: "name",
                type: "varchar",
              },
              {
                name: "sobre",
                type: "varchar",
              },
              {
                name: "conhecimento",
                type: "varchar",
              },
              {
                name: "saude",
                type: "varchar",
              },
              {
                name: "qualidade",
                type: "varchar",
              },
              {
                name: "wtt",
                type: "varchar",
              },
              {
                name: "rsi",
                type: "varchar",
              },
              {
                name: "premiacao",
                type: "varchar",
              },
              {
                name: "bonus",
                type: "varchar",
              },
              {
                name: "duvidas",
                type: "varchar",
              },
              {
                name: "created_at",
                type: "timestamp",
                default: "now()",
              },
              {
                name: "updated_at",
                type: "timestamp",
                default: "now()",
              },
            ],
          })
        );
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {}

}