import { IsEmail, IsNotEmpty, IsStrongPassword } from 'class-validator';

export class userLoginDTO {
  @IsNotEmpty({ message: 'email must be required' })
  @IsEmail({}, { message: 'enter your valid email' })
  email: string;
  @IsNotEmpty({ message: 'password must be required' })
  @IsStrongPassword(
    {},
    {
      message:
        'use strong password like a capital letter a digit a special caracter',
    },
  )
  password: string;
}
