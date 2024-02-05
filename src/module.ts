import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/module';
import { UserRepositories } from './modules/users/repositories';
import { UserService } from './modules/users/services';
import { UserController } from './modules/users/controllers';
import { QuizController } from './modules/quiz/controllers';
import { QuizRepositories } from './modules/quiz/repositories';
import { QuizService } from './modules/quiz/services';
import { UserQuizAnswerService } from './modules/userQuizAnswer/services';
import { UserQuizAnswerController } from './modules/userQuizAnswer/controllers';
import { UserQuizAnswerRepositories } from './modules/userQuizAnswer/repositories';
import { AskRepositories } from './modules/ask/repositories';
import { AskService } from './modules/ask/services';
import { AskController } from './modules/ask/controllers';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController, QuizController, UserQuizAnswerController, AskController],
  providers: [
    UserService,
    UserRepositories,
    QuizRepositories,
    QuizService,
    UserQuizAnswerRepositories,
    UserQuizAnswerService,
    AskRepositories,
    AskService
  ],
})
export class AppModule {}
