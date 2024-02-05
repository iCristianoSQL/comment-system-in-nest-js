import { CreateAskDto } from './contracts/dto/create';
import { Ask } from './contracts/models/ask';

export class AskRepositories {
  async createAsk(createAskDto, quizId: number): Promise<Ask> {
    createAskDto.quizId = quizId;
    return Ask.create(createAskDto);
  }

  async findAskById(id: number): Promise<Ask | null> {
    return Ask.findByPk(id);
  }

  async getAllAsks(): Promise<Ask[]> {
    return Ask.findAll();
  }

  async getAsksByQuizId(quizId: number): Promise<Ask[]> {
    return Ask.findAll({
      where: {
        quizId: quizId,
      },
    });
  }
}
