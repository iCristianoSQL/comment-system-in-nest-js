import { Injectable } from '@nestjs/common';
import { CreateUserQuizAnswerDto } from './contracts/dto/create';
import { UserQuizAnswer } from './contracts/models/userQuizAnswer';
import { UserQuizAnswerRepositories } from './repositories';

@Injectable()
export class UserQuizAnswerService {
  constructor(
    private readonly userQuizAnswerRepository: UserQuizAnswerRepositories
  ) {}

  async createUserQuizAnswer(createQuizDto, userId: number, askId: number): Promise<UserQuizAnswer> {
    createQuizDto.userId = userId;
    createQuizDto.askId = askId;
    return UserQuizAnswer.create(createQuizDto);
  }

  async findUserQuizAnswerById(id: number): Promise<UserQuizAnswer | null> {
    return this.userQuizAnswerRepository.findUserQuizAnswerById(id);
  }

  async getAllUserQuizAnswers(): Promise<UserQuizAnswer[]> {
    return this.userQuizAnswerRepository.getAllUserQuizAnswers();
  }

  async getAllUserQuizAnswerWithUserDataByAskId(askId: number): Promise<UserQuizAnswer[]> {
    return this.userQuizAnswerRepository.getAllUserQuizAnswerWithUserDataByAskId(askId);
  }

  async deleteUserQuizAnswerById(id: number): Promise<void> {
    return this.userQuizAnswerRepository.deleteUserQuizAnswerById(id);
  }
}
