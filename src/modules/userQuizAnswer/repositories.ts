import { User } from "../users/contracts/models/user";
import { CreateUserQuizAnswerDto } from "./contracts/dto/create";
import { UserQuizAnswer } from "./contracts/models/userQuizAnswer";

export class UserQuizAnswerRepositories {
  async createUserQuizAnswer(createAnswerDto, userId: number, askId: number): Promise<UserQuizAnswer> {
    createAnswerDto.userId = userId;
    createAnswerDto.askId = askId;
    return UserQuizAnswer.create(createAnswerDto);
  }

  async findUserQuizAnswerById(id: number): Promise<UserQuizAnswer | null> {
    return UserQuizAnswer.findByPk(id);
  }

  async getAllUserQuizAnswers(): Promise<UserQuizAnswer[]> {
    return UserQuizAnswer.findAll();
  }

  async getAllUserQuizAnswerWithUserDataByAskId(askId: number): Promise<UserQuizAnswer[]> {
    return UserQuizAnswer.findAll({
      include: [User],
      where: {
        askId: askId,
      },
    });
  }

  async deleteUserQuizAnswerById(id: number): Promise<void> {
    const userQuizAnswer = await UserQuizAnswer.findByPk(id);
    
    if (userQuizAnswer) {
      await userQuizAnswer.destroy();
    }
  }
}
