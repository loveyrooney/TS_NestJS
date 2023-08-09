import {
  Injectable,
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/users.entity';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './UserDTO/create.user.dto';
import * as bcrypt from 'bcrypt';

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
    const salt = 12;
    const hash = await bcrypt.hash(password, salt);
    const user = await this.userRepository.create({
      email,
      password: hash,
    });
    try {
      await this.userRepository.save(user);
    } catch (e) {
      if (e.code === '23505')
        throw new ConflictException('Already existed user');
      else throw new InternalServerErrorException();
    }

    return user;
  }
}
