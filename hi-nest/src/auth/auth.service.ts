import {
  Injectable,
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
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

  async getAllUser(): Promise<UserEntity[]> {
    const users = await this.userRepository.find();
    return users;
  }

  async createUser(createUserDTO: CreateUserDTO): Promise<UserEntity> {
    const { email, password } = createUserDTO;
    const user = await this.userRepository.create({
      email,
      password,
    });
    try {
      await this.userRepository.save(user);
    } catch (e) {
      if (e.code === '23505')
        throw new ConflictException('Alreday existed user');
      else throw new InternalServerErrorException();
    }

    return user;
  }
}
