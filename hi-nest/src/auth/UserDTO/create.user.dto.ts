import { IsEmail, IsString } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  @IsEmail()
  readonly email: string;

  @IsString()
  //@Maches(/^[a-zA-Z0-9]*$/, {msg: 'password only alphabet and number'})
  readonly password: string;
}
