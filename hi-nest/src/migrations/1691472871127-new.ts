import { MigrationInterface, QueryRunner } from "typeorm";

export class New1691472871127 implements MigrationInterface {
    name = 'New1691472871127'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "mymovie" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "year" integer NOT NULL, "genres" character varying NOT NULL, CONSTRAINT "UQ_db91092a275693f400fe6fc4a41" UNIQUE ("title", "year"), CONSTRAINT "PK_0361dbda3b1b92a8989cf720b7a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "myuser" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_b750f3c10ee87f967d784864121" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "myuser"`);
        await queryRunner.query(`DROP TABLE "mymovie"`);
    }

}
