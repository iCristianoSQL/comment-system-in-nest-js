import { ApiProperty } from "@nestjs/swagger";

export class CreateAskDto {
  @ApiProperty()
  quizId: number;

  @ApiProperty()
  description: string;

  @ApiProperty()
  date: Date;
}
