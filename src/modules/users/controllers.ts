import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UserService } from './services';
import { User } from './contracts/models/user';
import { CreateUserDto } from './contracts/dto/create';
import { ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.createUser(createUserDto);
  }

  @Get(':id')
  async findUserById(@Param('id') id: number): Promise<User | null> {
    return this.userService.findUserById(id);
  }

  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  @Delete(':id')
  async deleteUserById(@Param('id') id: number): Promise<void> {
    return this.userService.deleteUserById(id);
  }
}
