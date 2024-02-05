import { Controller, Get, Post, Body, Param, Req } from '@nestjs/common';
import { CreateAskDto } from './contracts/dto/create';
import { AskService } from './services';
import { ApiTags } from '@nestjs/swagger';
import { Ask } from './contracts/models/ask';

@Controller('asks')
@ApiTags('Ask')
export class AskController {
  constructor(private readonly askService: AskService) {}

  @Post()
  async createAsk(@Body() createAsk: CreateAskDto, @Req() req): Promise<Ask> {
    const quizId = req.body.quizId;
    return this.askService.createAsk(createAsk, quizId);
  }

  @Get(':id')
  async findAskById(@Param('id') id: number): Promise<Ask | null> {
    return this.askService.findAskById(id);
  }

  @Get()
  async getAllAsks(): Promise<Ask[]> {
    return this.askService.getAllAsks();
  }

  @Get('quiz/:quizId')
  async getAsksByQuizId(@Param('quizId') quizId: number): Promise<Ask[]> {
    return this.askService.getAsksByQuizId(quizId);
  }
}
