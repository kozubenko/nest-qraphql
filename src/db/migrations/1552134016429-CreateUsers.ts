import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class CreateUsers1552134016429 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(new Table({
      name: 'user',
      columns: [
        { name: 'id', type: 'int', isPrimary: true },
      ],
    }), true);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('user');
  }

}
