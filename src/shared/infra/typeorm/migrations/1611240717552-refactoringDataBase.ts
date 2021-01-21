import {MigrationInterface, QueryRunner} from "typeorm";

export class refactoringDataBase1611240717552 implements MigrationInterface {
    name = 'refactoringDataBase1611240717552'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "appointments_physicians_physicians" ("appointmentsId" uuid NOT NULL, "physiciansId" uuid NOT NULL, CONSTRAINT "PK_b4d4253306b76c953e4fbc11367" PRIMARY KEY ("appointmentsId", "physiciansId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_ad12fe39f432345322c6282546" ON "appointments_physicians_physicians" ("appointmentsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_41afd1cc9793765af54ad301aa" ON "appointments_physicians_physicians" ("physiciansId") `);
        await queryRunner.query(`CREATE TABLE "appointments_patients_patients" ("appointmentsId" uuid NOT NULL, "patientsId" uuid NOT NULL, CONSTRAINT "PK_6ac6429e213ee195d6961753eec" PRIMARY KEY ("appointmentsId", "patientsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_50fa97306b61acf4d8d4bb821a" ON "appointments_patients_patients" ("appointmentsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_7d45c4e109f0b8deac2a0620ec" ON "appointments_patients_patients" ("patientsId") `);
        await queryRunner.query(`ALTER TABLE "appointments_physicians_physicians" ADD CONSTRAINT "FK_ad12fe39f432345322c62825463" FOREIGN KEY ("appointmentsId") REFERENCES "appointments"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "appointments_physicians_physicians" ADD CONSTRAINT "FK_41afd1cc9793765af54ad301aa3" FOREIGN KEY ("physiciansId") REFERENCES "physicians"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "appointments_patients_patients" ADD CONSTRAINT "FK_50fa97306b61acf4d8d4bb821a9" FOREIGN KEY ("appointmentsId") REFERENCES "appointments"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "appointments_patients_patients" ADD CONSTRAINT "FK_7d45c4e109f0b8deac2a0620ec2" FOREIGN KEY ("patientsId") REFERENCES "patients"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "appointments_patients_patients" DROP CONSTRAINT "FK_7d45c4e109f0b8deac2a0620ec2"`);
        await queryRunner.query(`ALTER TABLE "appointments_patients_patients" DROP CONSTRAINT "FK_50fa97306b61acf4d8d4bb821a9"`);
        await queryRunner.query(`ALTER TABLE "appointments_physicians_physicians" DROP CONSTRAINT "FK_41afd1cc9793765af54ad301aa3"`);
        await queryRunner.query(`ALTER TABLE "appointments_physicians_physicians" DROP CONSTRAINT "FK_ad12fe39f432345322c62825463"`);
        await queryRunner.query(`DROP INDEX "IDX_7d45c4e109f0b8deac2a0620ec"`);
        await queryRunner.query(`DROP INDEX "IDX_50fa97306b61acf4d8d4bb821a"`);
        await queryRunner.query(`DROP TABLE "appointments_patients_patients"`);
        await queryRunner.query(`DROP INDEX "IDX_41afd1cc9793765af54ad301aa"`);
        await queryRunner.query(`DROP INDEX "IDX_ad12fe39f432345322c6282546"`);
        await queryRunner.query(`DROP TABLE "appointments_physicians_physicians"`);
    }

}
