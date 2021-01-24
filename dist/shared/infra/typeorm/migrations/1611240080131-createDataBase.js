"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDataBase1611240080131 = void 0;

class createDataBase1611240080131 {
  constructor() {
    this.name = 'createDataBase1611240080131';
  }

  async up(queryRunner) {
    await queryRunner.query(`CREATE TABLE "physicians" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "medicalSpecialty" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_ca420d8a50c2f5ae18e781f244f" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "patients" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "codeArea1" character varying NOT NULL, "preferredPhone" character varying NOT NULL, "codeArea2" character varying NOT NULL, "secondaryPhone" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a7f0b9fcbb3469d5ec0b0aceaa7" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "appointments" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "physician" character varying NOT NULL, "patient" character varying NOT NULL, "day" character varying NOT NULL, "month" character varying NOT NULL, "start" character varying NOT NULL, "end" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_4a437a9a27e948726b8bb3e36ad" PRIMARY KEY ("id"))`);
  }

  async down(queryRunner) {
    await queryRunner.query(`DROP TABLE "appointments"`);
    await queryRunner.query(`DROP TABLE "patients"`);
    await queryRunner.query(`DROP TABLE "physicians"`);
  }

}

exports.createDataBase1611240080131 = createDataBase1611240080131;