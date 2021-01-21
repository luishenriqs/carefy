import {MigrationInterface, QueryRunner} from "typeorm";

export class RefactoringPatients1611194102418 implements MigrationInterface {
    name = 'RefactoringPatients1611194102418'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "patients" ADD "codeArea1" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "patients" ADD "codeArea2" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "patients" DROP COLUMN "codeArea2"`);
        await queryRunner.query(`ALTER TABLE "patients" DROP COLUMN "codeArea1"`);
    }

}
