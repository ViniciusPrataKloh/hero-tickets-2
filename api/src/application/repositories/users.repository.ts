import { User } from "../../domain/entities/user.entity";

export interface IUsersRepository{
  create(name: string, email: string): Promise<string>;
  findByEmail(email: string): Promise<User | undefined>;
}