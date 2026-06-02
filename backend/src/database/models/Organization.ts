import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  Default,
  CreatedAt,
  UpdatedAt,
  HasMany,
  AllowNull,
} from 'sequelize-typescript';
import { UUIDV4 } from 'sequelize';
import User from './User';

@Table({
  tableName: 'organizations',
})
class Organization extends Model {
  @PrimaryKey
  @Default(UUIDV4)
  @Column(DataType.UUID)
  declare id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  declare slug: string;

  @HasMany(() => User)
  declare users: User[];

  @CreatedAt
  declare createAt: Date;

  @UpdatedAt
  declare updatedAt: Date;
}

export default Organization;
