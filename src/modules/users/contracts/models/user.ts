import { ApiTags } from '@nestjs/swagger';
import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { Quiz } from 'src/modules/quiz/contracts/models/quiz';
import { UserQuizAnswer } from 'src/modules/userQuizAnswer/contracts/models/userQuizAnswer';
@ApiTags('User')
@Table
export class User extends Model {
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    allowNull: false,
  })
  name: string;

  @Column({
    allowNull: false,
  })
  password: string;

  @Column({
    allowNull: false,
    unique: true,
  })
  cpf: string;

  @HasMany(() => Quiz, { onDelete: 'CASCADE' })
  quizzes: Quiz[];

  @HasMany(() => UserQuizAnswer, { onDelete: 'CASCADE' })
  userQuizAnswers: UserQuizAnswer[];
}
