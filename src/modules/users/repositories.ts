import { UserQuizAnswer } from "../userQuizAnswer/contracts/models/userQuizAnswer";
import { User } from "./contracts/models/user";

export class UserRepositories {
  
  async createUser(createUserDto): Promise<User> {
    return User.create(createUserDto);
  }

  async findUserById(id: number): Promise<User | null> {
    return User.findByPk(id);
  }

  async getAllUsers(): Promise<User[]> {
    return User.findAll();
  }

  async deleteUserById(id: number): Promise<void> {
    const user = await User.findByPk(id);
    await UserQuizAnswer.destroy({ where: { userId: id } });
    if (user) {
      await user.destroy();
    }
  }
}