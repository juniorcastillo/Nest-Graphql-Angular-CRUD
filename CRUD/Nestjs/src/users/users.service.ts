import { Injectable, Logger } from '@nestjs/common';
import { IUser } from 'src/auth/interfaces/user.interface';



@Injectable()
export class UsersService {
  private readonly users: IUser[];

  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'john05',
        password: 'changeme',
        name: "John",
        lastname:"Smith",
        departament: "HR department"
      },
      {
        userId: 2,
        username: 'chris',
        password: 'secret',
        name: "Christopher",
        lastname:"Lora",
        departament: "HR department"
      },
      {
        userId: 3,
        username: 'maria',
        password: 'guess',
        name: "Ana Maria",
        lastname:"Santana",
        departament: "HR department"
      },
    ];
  }

  async findOne(username: string): Promise<IUser | undefined> {
     Logger.log("User service: " , username )
    return this.users.find(user => user.username === username);
  }
}