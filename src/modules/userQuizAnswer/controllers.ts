import { Controller, Get, Post, Body, Param, Req, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserQuizAnswer } from './contracts/models/userQuizAnswer';
import { CreateUserQuizAnswerDto } from './contracts/dto/create';
import { UserQuizAnswerService } from './services';

@Controller('user-quiz-answers')
@ApiTags('User Quiz Answer')
export class UserQuizAnswerController {
  constructor(private readonly userQuizAnswerService: UserQuizAnswerService) {}

  @Post()
  async createQuiz(@Body() createUserQuizAnswerDto: CreateUserQuizAnswerDto, @Req() req): Promise<UserQuizAnswer> {
    const userId = req.body.userId;
    const askId = req.body.askId;
    return this.userQuizAnswerService.createUserQuizAnswer(createUserQuizAnswerDto, userId, askId);
  }

  @Get(':id')
  async findQuizById(@Param('id') id: number): Promise<UserQuizAnswer | null> {
    return this.userQuizAnswerService.findUserQuizAnswerById(id);
  }

  @Get()
  async getAllQuizzes(): Promise<UserQuizAnswer[]> {
    return this.userQuizAnswerService.getAllUserQuizAnswers();
  }

  @Get('by-ask/:askId')
  async getAllUserQuizAnswerWithUserDataByAskId(@Param('askId') askId: number): Promise<UserQuizAnswer[]> {
    return this.userQuizAnswerService.getAllUserQuizAnswerWithUserDataByAskId(askId);
  }

  @Delete(':id')
  async deleteUserQuizAnswerById(@Param('id') id: number): Promise<void> {
    return this.userQuizAnswerService.deleteUserQuizAnswerById(id);
  }
}
