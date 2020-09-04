import { ObjectType, Field, Int, ID } from 'type-graphql';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

@ObjectType()
export class EmployeeType {
  @Field(() => ID)
  @IsString()
  readonly id?: string;
  @Field()
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @Field()
  @IsString()
  @IsNotEmpty()
  readonly lastname: string;
  @Field(() => Int)
  @IsNumber()
  readonly age: number;
  @Field()
  @IsString()
  @IsNotEmpty()
  readonly occupation: string;
  @Field()
  @IsString()
  readonly address: string;
}
