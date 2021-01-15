import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAppointment1610550397426 
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'appointments',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'physician_id',
                        type: 'uuid',
                    },
                    {
                        name: 'patient_id',
                        type: 'uuid',
                    },
                    {
                        name: 'day',
                        type: 'varchar',
                    },
                    {
                        name: 'month',
                        type: 'varchar',
                    },
                    {
                        name: 'start',
                        type: 'varchar',
                    },
                    {
                        name: 'end',
                        type: 'varchar',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('appointments');
    }

}
