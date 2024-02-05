import { ApiProperty } from "@nestjs/swagger";

export class CreateQuizDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  date: string;

  @ApiProperty()
  userId: number;
}
