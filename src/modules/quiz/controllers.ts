import { Controller, Get, Post, Body, Param, Req, Delete } from '@nestjs/common';
import { Quiz } from './contracts/models/quiz';
import { CreateQuizDto } from './contracts/dto/create';
import { QuizService } from './services';
import { ApiTags } from '@nestjs/swagger';

@Controller('quizzes')
@ApiTags('Quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Post()
  async createQuiz(@Body() createQuizDto: CreateQuizDto, @Req() req): Promise<Quiz> {
    const userId = req.body.userId;
    return this.quizService.createQuiz(createQuizDto, userId);
  }

  @Get(':id')
  async findQuizById(@Param('id') id: number): Promise<Quiz | null> {
    return this.quizService.findQuizById(id);
  }

  @Get()
  async getAllQuizzes(): Promise<Quiz[]> {
    return this.quizService.getAllQuizzes();
  }

  @Delete(':id')
  async deleteQuizById(@Param('id') id: number): Promise<void> {
    return this.quizService.deleteQuizById(id);
  }
}
