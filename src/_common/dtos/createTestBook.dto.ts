import { IsString, IsNotEmpty, MaxLength, IsNumber } from 'class-validator';

export class CreateTestBookDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  desc: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;
}
