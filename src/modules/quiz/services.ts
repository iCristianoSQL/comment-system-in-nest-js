import { Injectable } from '@nestjs/common';
import { Quiz } from './contracts/models/quiz';
import { CreateQuizDto } from './contracts/dto/create';
import { QuizRepositories } from './repositories';

@Injectable()
export class QuizService {
  constructor(
    private readonly quizRepository: QuizRepositories
  ) {}

  async createQuiz(createQuizDto, userId: number): Promise<Quiz> {
    createQuizDto.userId = userId;
    return Quiz.create(createQuizDto);
  }

  async findQuizById(id: number): Promise<Quiz | null> {
    return this.quizRepository.findQuizById(id);
  }

  async getAllQuizzes(): Promise<Quiz[]> {
    return this.quizRepository.getAllQuizzes();
  }

  async deleteQuizById(id: number): Promise<void> {
    return this.quizRepository.deleteQuizById(id);
  }
}
