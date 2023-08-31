import { IUser } from "../../domain/interfaces/user.interface";
import { HttpError } from "../interfaces/http.error.interface";
import { IUsersRepository } from "../repositories/users.repository";

class UsersService{

  constructor(
    private usersRepository: IUsersRepository
  ){}

  async create(userData: IUser){
    const userAlreadyExists = await this.usersRepository.findByEmail(userData.email);

    if(userAlreadyExists)
      return userAlreadyExists!.id;

    const userId = this.usersRepository.create(
      userData.name,
      userData.email
    );

    // console.log(userId);

    return userId;
  }

}

export { UsersService };