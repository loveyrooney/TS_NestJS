import { MigrationInterface, QueryRunner } from "typeorm";

export class UserModify1691476787580 implements MigrationInterface {
    name = 'UserModify1691476787580'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "myuser" RENAME COLUMN "username" TO "email"`);
        await queryRunner.query(`ALTER TABLE "myuser" ADD CONSTRAINT "UQ_7b91efae64a17bbe00eb1c45378" UNIQUE ("email")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "myuser" DROP CONSTRAINT "UQ_7b91efae64a17bbe00eb1c45378"`);
        await queryRunner.query(`ALTER TABLE "myuser" RENAME COLUMN "email" TO "username"`);
    }

}
