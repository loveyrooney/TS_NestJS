import { Controller, Post, Body, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDTO } from './UserDTO/create.user.dto';
import { UserEntity } from 'src/entities/users.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  getAll(): Promise<UserEntity[]> {
    return this.authService.getAll();
  }

  @Post('/signup')
  create(@Body() createUserDTO: CreateUserDTO): Promise<UserEntity> {
    console.log(createUserDTO);
    return this.authService.createUser(createUserDTO);
  }
}
