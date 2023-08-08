import { MigrationInterface, QueryRunner } from "typeorm";

export class AddColumn1691473637149 implements MigrationInterface {
    name = 'AddColumn1691473637149'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "mymovie" ADD "director" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "mymovie" DROP COLUMN "director"`);
    }

}
