import { ObjectType, Field, Int, ID } from 'type-graphql';
import { IsString, IsObject } from 'class-validator';

@ObjectType()
export class AuthType {

  @Field()
  @IsString()
  readonly access_token: string;

  @Field()
  @IsString()
  readonly error: string;
  
  
}
