import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  Default,
  CreatedAt,
  UpdatedAt,
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
}

export default Organization;
