import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/users.entity';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './UserDTO/create.user.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async getAll(): Promise<UserEntity[]> {
    const movies = await this.userRepository.find();
    return movies;
  }

  async createUser(createUserDTO: CreateUserDTO): Promise<UserEntity> {
    const { username, password } = createUserDTO;
    const user = await this.userRepository.create({
      username,
      password,
    });
    await this.userRepository.save(user);
    return user;
  }
}
