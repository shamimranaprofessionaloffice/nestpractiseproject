import {
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  IsStrongPassword,
  Min,
  MinLength,
} from 'class-validator';

export class userDTO {
  @IsString()
  @MinLength(2,{message:"at least type 2 latter"})
  name: string;
  @IsEmail({},{message:"enter your valid email address"})
  email: string;
  @IsStrongPassword()
  password: string;
  @IsOptional()
  @IsNumber()
  @Min(18,{message:"minimum 18 year old"})
  age?: number;
}
