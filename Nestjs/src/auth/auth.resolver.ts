import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthType } from './dto/create-auth.dto';
import { AuthInput } from './input-auth.input';
import { UsersService } from '../users/users.service';
import { UnauthorizedException, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IUser } from './interfaces/user.interface';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}
  @Query(() => [AuthType])
  async validateUser(
    @Args('username') username: string,
    @Args('password') password: string,
  ): Promise<AuthType[]> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === password) {
      const token = await this.login(user);
      return [token];
    } else {
      return [{ access_token: '' , error:JSON.stringify(new UnauthorizedException())}];
     
    }
  }
  async login(user) {
    const payload = {
      username: user.username,
      sub: user.userId,
      pwd: user.password,
    };
    const token = { access_token: this.jwtService.sign(payload) , error:''};

    return token;
  }
}
