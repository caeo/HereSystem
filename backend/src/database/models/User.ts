import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  ForeignKey,
  Default,
  CreatedAt,
  UpdatedAt,
  BelongsTo,
} from 'sequelize-typescript';

import { UUIDV4 } from 'sequelize';

import { UserRole } from '../../types/UserRole';

import Organization from './Organization';

@Table({
  tableName: 'users',
  underscored: true,
})
class User extends Model {
  @PrimaryKey
  @Default(UUIDV4)
  @Column(DataType.UUID)
  declare id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  declare name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  declare email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare password: string;

  @Column({
    type: DataType.ENUM(...Object.values(UserRole)),
    allowNull: false,
  })
  declare role: UserRole;

  @ForeignKey(() => Organization)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  declare organizationId: string;

  @BelongsTo(() => Organization)
  declare organization: Organization;

  @CreatedAt
  declare createdAt: Date;

  @UpdatedAt
  declare updatedAt: Date;
}

export default User;
