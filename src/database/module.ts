import { Module } from "@nestjs/common";
import { Sequelize } from 'sequelize-typescript';
import { Ask } from "src/modules/ask/contracts/models/ask";
import { Quiz } from "src/modules/quiz/contracts/models/quiz";
import { UserQuizAnswer } from "src/modules/userQuizAnswer/contracts/models/userQuizAnswer";
import { User } from "src/modules/users/contracts/models/user";

const providers = [
  {
    provide: "SEQUELIZE",
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: "postgres",
        host: "localhost",
        username: "your_name",
        password: "your_password",
        database: "comment-dev",
      });
      sequelize.addModels([User, Quiz, UserQuizAnswer, Ask]);
      await sequelize.sync();
      return sequelize;
    },
  },
];

@Module({
  providers,
  exports: providers,
})
export class DatabaseModule {}
