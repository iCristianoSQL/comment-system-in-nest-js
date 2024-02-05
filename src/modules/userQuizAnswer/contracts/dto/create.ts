import { ApiProperty } from "@nestjs/swagger";

export class CreateUserQuizAnswerDto {
  @ApiProperty()
  userId: number;

  @ApiProperty()
  askId: number;

  @ApiProperty()
  description: string;

  @ApiProperty()
  date: Date;
}
