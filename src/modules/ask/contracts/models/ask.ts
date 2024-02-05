import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { Quiz } from 'src/modules/quiz/contracts/models/quiz';
import { UserQuizAnswer } from 'src/modules/userQuizAnswer/contracts/models/userQuizAnswer';

@Table
export class Ask extends Model {
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

  @ForeignKey(() => Quiz)
  @Column
  quizId: number;

  @BelongsTo(() => Quiz, { onDelete: 'CASCADE' })
  quiz: Quiz;

  @HasMany(() => UserQuizAnswer, { onDelete: 'CASCADE' })
  userQuizAnswers: UserQuizAnswer[];
}
