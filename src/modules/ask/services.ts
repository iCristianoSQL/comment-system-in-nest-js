import { Injectable } from '@nestjs/common';
import { CreateAskDto } from './contracts/dto/create';
import { AskRepositories } from './repositories';
import { Ask } from './contracts/models/ask';

@Injectable()
export class AskService {
  constructor(
    private readonly askRepository: AskRepositories
  ) {}

  async createAsk(createAskDto, quizId: number): Promise<Ask> {
    createAskDto.quizId = quizId;
    return Ask.create(createAskDto);
  }

  async findAskById(id: number): Promise<Ask | null> {
    return this.askRepository.findAskById(id);
  }

  async getAllAsks(): Promise<Ask[]> {
    return this.askRepository.getAllAsks();
  }

  async getAsksByQuizId(quizId: number): Promise<Ask[]> {
    return this.askRepository.getAsksByQuizId(quizId);
  }
}
