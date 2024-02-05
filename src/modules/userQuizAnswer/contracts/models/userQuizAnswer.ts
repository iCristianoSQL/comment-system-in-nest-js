import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Ask } from 'src/modules/ask/contracts/models/ask';
import { User } from 'src/modules/users/contracts/models/user';

@Table
export class UserQuizAnswer extends Model {
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    allowNull: false,
  })
  description: string;

  @Column({
    allowNull: false,
    type: DataType.DATE,
    defaultValue: DataType.NOW,
  })
  date: Date;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User, { onDelete: 'CASCADE' })
  user: User;

  @ForeignKey(() => Ask)
  @Column
  askId: number;

  @BelongsTo(() => Ask, { onDelete: 'CASCADE' })
  ask: Ask;
}