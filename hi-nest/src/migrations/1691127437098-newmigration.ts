import { MigrationInterface, QueryRunner } from "typeorm";

export class Newmigration1691127437098 implements MigrationInterface {
    name = 'Newmigration1691127437098'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "myuser" DROP COLUMN "username"`);
        await queryRunner.query(`ALTER TABLE "myuser" ADD "username" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "myuser" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "myuser" ADD "password" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "mymovie" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "mymovie" ADD "title" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "mymovie" DROP COLUMN "genres"`);
        await queryRunner.query(`ALTER TABLE "mymovie" ADD "genres" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "mymovie" DROP COLUMN "genres"`);
        await queryRunner.query(`ALTER TABLE "mymovie" ADD "genres" text`);
        await queryRunner.query(`ALTER TABLE "mymovie" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "mymovie" ADD "title" character varying(200) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "myuser" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "myuser" ADD "password" character varying(200) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "myuser" DROP COLUMN "username"`);
        await queryRunner.query(`ALTER TABLE "myuser" ADD "username" character varying(200) NOT NULL`);
    }

}
