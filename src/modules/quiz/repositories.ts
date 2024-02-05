import { CreateQuizDto } from './contracts/dto/create';
import { Quiz } from './contracts/models/quiz';

export class QuizRepositories {
  async createQuiz(createQuizDto, userId: number): Promise<Quiz> {
    createQuizDto.userId = userId;
    return Quiz.create(createQuizDto);
  }

  async findQuizById(id: number): Promise<Quiz | null> {
    return Quiz.findByPk(id);
  }

  async getAllQuizzes(): Promise<Quiz[]> {
    return Quiz.findAll();
  }

  async deleteQuizById(id: number): Promise<void> {
    const quiz = await Quiz.findByPk(id);

    if (quiz) {
      await quiz.destroy();
    }
  }
}
