import { Inject, Injectable } from '@nestjs/common';
import { UserRepositories } from './repositories';
import { User } from './contracts/models/user';
import { CreateUserDto } from './contracts/dto/create';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepositories
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    return this.userRepository.createUser(createUserDto);
  }

  async findUserById(id: number): Promise<User | null> {
    return this.userRepository.findUserById(id);
  }

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.getAllUsers();
  }

  async deleteUserById(id: number): Promise<void> {
    return this.userRepository.deleteUserById(id);
  }
}
