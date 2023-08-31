import { User } from "../../../domain/entities/user.entity";
import { IUsersRepository } from "../users.repository";

import {v4 as uuid} from "uuid";

class UsersRepositoryInMemory implements IUsersRepository{

  constructor(
    private users: User[] = []
  ){}

  async create(name: string, email: string): Promise<string> {
    const user = new User(
      uuid(),
      name,
      email
    );

    this.users.push(user);
    return user.id;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = this.users.find((user) => user.email === email);

    return user;
  }

}

export { UsersRepositoryInMemory };